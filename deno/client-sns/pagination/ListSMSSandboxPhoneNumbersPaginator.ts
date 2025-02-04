import { SNS } from "../SNS.ts";
import { SNSClient } from "../SNSClient.ts";
import {
  ListSMSSandboxPhoneNumbersCommand,
  ListSMSSandboxPhoneNumbersCommandInput,
  ListSMSSandboxPhoneNumbersCommandOutput,
} from "../commands/ListSMSSandboxPhoneNumbersCommand.ts";
import { SNSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SNSClient,
  input: ListSMSSandboxPhoneNumbersCommandInput,
  ...args: any
): Promise<ListSMSSandboxPhoneNumbersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSMSSandboxPhoneNumbersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SNS,
  input: ListSMSSandboxPhoneNumbersCommandInput,
  ...args: any
): Promise<ListSMSSandboxPhoneNumbersCommandOutput> => {
  // @ts-ignore
  return await client.listSMSSandboxPhoneNumbers(input, ...args);
};
export async function* paginateListSMSSandboxPhoneNumbers(
  config: SNSPaginationConfiguration,
  input: ListSMSSandboxPhoneNumbersCommandInput,
  ...additionalArguments: any
): Paginator<ListSMSSandboxPhoneNumbersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSMSSandboxPhoneNumbersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SNS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SNSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SNS | SNSClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
