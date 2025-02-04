import { Proton } from "../Proton.ts";
import { ProtonClient } from "../ProtonClient.ts";
import {
  ListEnvironmentAccountConnectionsCommand,
  ListEnvironmentAccountConnectionsCommandInput,
  ListEnvironmentAccountConnectionsCommandOutput,
} from "../commands/ListEnvironmentAccountConnectionsCommand.ts";
import { ProtonPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ProtonClient,
  input: ListEnvironmentAccountConnectionsCommandInput,
  ...args: any
): Promise<ListEnvironmentAccountConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEnvironmentAccountConnectionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Proton,
  input: ListEnvironmentAccountConnectionsCommandInput,
  ...args: any
): Promise<ListEnvironmentAccountConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.listEnvironmentAccountConnections(input, ...args);
};
export async function* paginateListEnvironmentAccountConnections(
  config: ProtonPaginationConfiguration,
  input: ListEnvironmentAccountConnectionsCommandInput,
  ...additionalArguments: any
): Paginator<ListEnvironmentAccountConnectionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEnvironmentAccountConnectionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Proton) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ProtonClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Proton | ProtonClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
