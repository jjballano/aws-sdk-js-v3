import { AppRunner } from "../AppRunner.ts";
import { AppRunnerClient } from "../AppRunnerClient.ts";
import {
  ListAutoScalingConfigurationsCommand,
  ListAutoScalingConfigurationsCommandInput,
  ListAutoScalingConfigurationsCommandOutput,
} from "../commands/ListAutoScalingConfigurationsCommand.ts";
import { AppRunnerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AppRunnerClient,
  input: ListAutoScalingConfigurationsCommandInput,
  ...args: any
): Promise<ListAutoScalingConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAutoScalingConfigurationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AppRunner,
  input: ListAutoScalingConfigurationsCommandInput,
  ...args: any
): Promise<ListAutoScalingConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.listAutoScalingConfigurations(input, ...args);
};
export async function* paginateListAutoScalingConfigurations(
  config: AppRunnerPaginationConfiguration,
  input: ListAutoScalingConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<ListAutoScalingConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAutoScalingConfigurationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AppRunner) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AppRunnerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AppRunner | AppRunnerClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
