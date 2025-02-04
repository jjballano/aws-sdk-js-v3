import { GreengrassV2 } from "../GreengrassV2.ts";
import { GreengrassV2Client } from "../GreengrassV2Client.ts";
import {
  ListClientDevicesAssociatedWithCoreDeviceCommand,
  ListClientDevicesAssociatedWithCoreDeviceCommandInput,
  ListClientDevicesAssociatedWithCoreDeviceCommandOutput,
} from "../commands/ListClientDevicesAssociatedWithCoreDeviceCommand.ts";
import { GreengrassV2PaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GreengrassV2Client,
  input: ListClientDevicesAssociatedWithCoreDeviceCommandInput,
  ...args: any
): Promise<ListClientDevicesAssociatedWithCoreDeviceCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListClientDevicesAssociatedWithCoreDeviceCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: GreengrassV2,
  input: ListClientDevicesAssociatedWithCoreDeviceCommandInput,
  ...args: any
): Promise<ListClientDevicesAssociatedWithCoreDeviceCommandOutput> => {
  // @ts-ignore
  return await client.listClientDevicesAssociatedWithCoreDevice(input, ...args);
};
export async function* paginateListClientDevicesAssociatedWithCoreDevice(
  config: GreengrassV2PaginationConfiguration,
  input: ListClientDevicesAssociatedWithCoreDeviceCommandInput,
  ...additionalArguments: any
): Paginator<ListClientDevicesAssociatedWithCoreDeviceCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListClientDevicesAssociatedWithCoreDeviceCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof GreengrassV2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GreengrassV2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GreengrassV2 | GreengrassV2Client");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
