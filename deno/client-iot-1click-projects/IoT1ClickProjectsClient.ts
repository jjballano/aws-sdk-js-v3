import {
  AssociateDeviceWithPlacementCommandInput,
  AssociateDeviceWithPlacementCommandOutput,
} from "./commands/AssociateDeviceWithPlacementCommand.ts";
import { CreatePlacementCommandInput, CreatePlacementCommandOutput } from "./commands/CreatePlacementCommand.ts";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand.ts";
import { DeletePlacementCommandInput, DeletePlacementCommandOutput } from "./commands/DeletePlacementCommand.ts";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand.ts";
import { DescribePlacementCommandInput, DescribePlacementCommandOutput } from "./commands/DescribePlacementCommand.ts";
import { DescribeProjectCommandInput, DescribeProjectCommandOutput } from "./commands/DescribeProjectCommand.ts";
import {
  DisassociateDeviceFromPlacementCommandInput,
  DisassociateDeviceFromPlacementCommandOutput,
} from "./commands/DisassociateDeviceFromPlacementCommand.ts";
import {
  GetDevicesInPlacementCommandInput,
  GetDevicesInPlacementCommandOutput,
} from "./commands/GetDevicesInPlacementCommand.ts";
import { ListPlacementsCommandInput, ListPlacementsCommandOutput } from "./commands/ListPlacementsCommand.ts";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdatePlacementCommandInput, UpdatePlacementCommandOutput } from "./commands/UpdatePlacementCommand.ts";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "./commands/UpdateProjectCommand.ts";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig.ts";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "../config-resolver/mod.ts";
import { getContentLengthPlugin } from "../middleware-content-length/mod.ts";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "../middleware-host-header/mod.ts";
import { getLoggerPlugin } from "../middleware-logger/mod.ts";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "../middleware-retry/mod.ts";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "../middleware-signing/mod.ts";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "../middleware-user-agent/mod.ts";
import { HttpHandler as __HttpHandler } from "../protocol-http/mod.ts";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "../smithy-client/mod.ts";
import {
  Provider,
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "../types/mod.ts";

export type ServiceInputTypes =
  | AssociateDeviceWithPlacementCommandInput
  | CreatePlacementCommandInput
  | CreateProjectCommandInput
  | DeletePlacementCommandInput
  | DeleteProjectCommandInput
  | DescribePlacementCommandInput
  | DescribeProjectCommandInput
  | DisassociateDeviceFromPlacementCommandInput
  | GetDevicesInPlacementCommandInput
  | ListPlacementsCommandInput
  | ListProjectsCommandInput
  | ListTagsForResourceCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdatePlacementCommandInput
  | UpdateProjectCommandInput;

export type ServiceOutputTypes =
  | AssociateDeviceWithPlacementCommandOutput
  | CreatePlacementCommandOutput
  | CreateProjectCommandOutput
  | DeletePlacementCommandOutput
  | DeleteProjectCommandOutput
  | DescribePlacementCommandOutput
  | DescribeProjectCommandOutput
  | DisassociateDeviceFromPlacementCommandOutput
  | GetDevicesInPlacementCommandOutput
  | ListPlacementsCommandOutput
  | ListProjectsCommandOutput
  | ListTagsForResourceCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdatePlacementCommandOutput
  | UpdateProjectCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies provider for retry algorithm to use.
   * @internal
   */
  retryModeProvider?: __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

type IoT1ClickProjectsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of IoT1ClickProjectsClient class constructor that set the region, credentials and other options.
 */
export interface IoT1ClickProjectsClientConfig extends IoT1ClickProjectsClientConfigType {}

type IoT1ClickProjectsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of IoT1ClickProjectsClient class. This is resolved and normalized from the {@link IoT1ClickProjectsClientConfig | constructor configuration interface}.
 */
export interface IoT1ClickProjectsClientResolvedConfig extends IoT1ClickProjectsClientResolvedConfigType {}

/**
 * <p>The AWS IoT 1-Click Projects API Reference</p>
 */
export class IoT1ClickProjectsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  IoT1ClickProjectsClientResolvedConfig
> {
  /**
   * The resolved configuration of IoT1ClickProjectsClient class. This is resolved and normalized from the {@link IoT1ClickProjectsClientConfig | constructor configuration interface}.
   */
  readonly config: IoT1ClickProjectsClientResolvedConfig;

  constructor(configuration: IoT1ClickProjectsClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveAwsAuthConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
