import { RAM } from "../RAM.ts";
import { RAMClient } from "../RAMClient.ts";
import {
  ListPermissionsCommand,
  ListPermissionsCommandInput,
  ListPermissionsCommandOutput,
} from "../commands/ListPermissionsCommand.ts";
import { RAMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RAMClient,
  input: ListPermissionsCommandInput,
  ...args: any
): Promise<ListPermissionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPermissionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RAM,
  input: ListPermissionsCommandInput,
  ...args: any
): Promise<ListPermissionsCommandOutput> => {
  // @ts-ignore
  return await client.listPermissions(input, ...args);
};
export async function* paginateListPermissions(
  config: RAMPaginationConfiguration,
  input: ListPermissionsCommandInput,
  ...additionalArguments: any
): Paginator<ListPermissionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPermissionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RAM | RAMClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
