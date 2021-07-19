import { GetRoleCredentialsCommand, GetRoleCredentialsCommandOutput, SSOClient } from "../client-sso/mod.ts";
import { getMasterProfileName, parseKnownFiles, SourceProfileInit } from "../credential-provider-ini/mod.ts";
import { CredentialsProviderError } from "../property-provider/mod.ts";
import { getHomeDir, ParsedIniData } from "../shared-ini-file-loader/mod.ts";
import { CredentialProvider, Credentials } from "../types/mod.ts";
import { createHash } from "https://deno.land/std@0.101.0/node/crypto.ts";
import { readFileSync } from "https://deno.land/std@0.101.0/node/fs.ts";
import { join } from "https://deno.land/std@0.101.0/node/path.ts";

/**
 * The time window (15 mins) that SDK will treat the SSO token expires in before the defined expiration date in token.
 * This is needed because server side may have invalidated the token before the defined expiration date.
 *
 * @internal
 */
export const EXPIRE_WINDOW_MS = 15 * 60 * 1000;

const SHOULD_FAIL_CREDENTIAL_CHAIN = false;

/**
 * Cached SSO token retrieved from SSO login flow.
 */
interface SSOToken {
  // A base64 encoded string returned by the sso-oidc service.
  accessToken: string;
  // RFC3339 format timestamp
  expiresAt: string;
  region?: string;
  startUrl?: string;
}

export interface FromSSOInit extends SourceProfileInit {
  ssoClient?: SSOClient;
}

/**
 * Creates a credential provider that will read from a credential_process specified
 * in ini files.
 */
export const fromSSO =
  (init: FromSSOInit = {}): CredentialProvider =>
  async () => {
    const profiles = await parseKnownFiles(init);
    return resolveSSOCredentials(getMasterProfileName(init), profiles, init);
  };

const resolveSSOCredentials = async (
  profileName: string,
  profiles: ParsedIniData,
  options: FromSSOInit
): Promise<Credentials> => {
  const profile = profiles[profileName];
  if (!profile) {
    throw new CredentialsProviderError(`Profile ${profileName} could not be found in shared credentials file.`);
  }
  const { sso_start_url: startUrl, sso_account_id: accountId, sso_region: region, sso_role_name: roleName } = profile;
  if (!startUrl && !accountId && !region && !roleName) {
    throw new CredentialsProviderError(`Profile ${profileName} is not configured with SSO credentials.`);
  }
  if (!startUrl || !accountId || !region || !roleName) {
    throw new CredentialsProviderError(
      `Profile ${profileName} does not have valid SSO credentials. Required parameters "sso_account_id", "sso_region", ` +
        `"sso_role_name", "sso_start_url". Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`,
      SHOULD_FAIL_CREDENTIAL_CHAIN
    );
  }
  const hasher = createHash("sha1");
  const cacheName = hasher.update(startUrl).digest("hex");
  const tokenFile = join(getHomeDir(), ".aws", "sso", "cache", `${cacheName}.json`);
  let token: SSOToken;
  try {
    token = JSON.parse(readFileSync(tokenFile, { encoding: "utf-8" }));
    if (new Date(token.expiresAt).getTime() - Date.now() <= EXPIRE_WINDOW_MS) {
      throw new Error("SSO token is expired.");
    }
  } catch (e) {
    throw new CredentialsProviderError(
      `The SSO session associated with this profile has expired or is otherwise invalid. To refresh this SSO session ` +
        `run aws sso login with the corresponding profile.`,
      SHOULD_FAIL_CREDENTIAL_CHAIN
    );
  }
  const { accessToken } = token;
  const sso = options.ssoClient || new SSOClient({ region });
  let ssoResp: GetRoleCredentialsCommandOutput;
  try {
    ssoResp = await sso.send(
      new GetRoleCredentialsCommand({
        accountId,
        roleName,
        accessToken,
      })
    );
  } catch (e) {
    throw CredentialsProviderError.from(e, SHOULD_FAIL_CREDENTIAL_CHAIN);
  }
  const { roleCredentials: { accessKeyId, secretAccessKey, sessionToken, expiration } = {} } = ssoResp;
  if (!accessKeyId || !secretAccessKey || !sessionToken || !expiration) {
    throw new CredentialsProviderError("SSO returns an invalid temporary credential.", SHOULD_FAIL_CREDENTIAL_CHAIN);
  }
  return { accessKeyId, secretAccessKey, sessionToken, expiration: new Date(expiration) };
};
