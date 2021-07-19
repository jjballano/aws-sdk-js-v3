import process from "https://deno.land/std@0.101.0/node/process.ts";
export const emitWarningIfUnsupportedVersion = (version: string) => {
  if (version && parseInt(version.substring(1, version.indexOf("."))) < 12) {
    process.emitWarning(
      `The AWS SDK for JavaScript (v3) will\n` +
        `no longer support Node.js ${version} as of January 1, 2022.\n` +
        `To continue receiving updates to AWS services, bug fixes, and security\n` +
        `updates please upgrade to Node.js 12.x or later.\n\n` +
        `More information can be found at: https://a.co/1l6FLnu`,
      `NodeDeprecationWarning`
    );
  }
};
