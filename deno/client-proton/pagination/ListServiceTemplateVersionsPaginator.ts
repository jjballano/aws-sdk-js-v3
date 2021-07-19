import { Proton } from "../Proton.ts";
import { ProtonClient } from "../ProtonClient.ts";
import {
  ListServiceTemplateVersionsCommand,
  ListServiceTemplateVersionsCommandInput,
  ListServiceTemplateVersionsCommandOutput,
} from "../commands/ListServiceTemplateVersionsCommand.ts";
import { ProtonPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ProtonClient,
  input: ListServiceTemplateVersionsCommandInput,
  ...args: any
): Promise<ListServiceTemplateVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListServiceTemplateVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Proton,
  input: ListServiceTemplateVersionsCommandInput,
  ...args: any
): Promise<ListServiceTemplateVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listServiceTemplateVersions(input, ...args);
};
export async function* paginateListServiceTemplateVersions(
  config: ProtonPaginationConfiguration,
  input: ListServiceTemplateVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListServiceTemplateVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListServiceTemplateVersionsCommandOutput;
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
