import { CreateAccessPointCommandInput, CreateAccessPointCommandOutput } from "./commands/CreateAccessPointCommand.ts";
import {
  CreateAccessPointForObjectLambdaCommandInput,
  CreateAccessPointForObjectLambdaCommandOutput,
} from "./commands/CreateAccessPointForObjectLambdaCommand.ts";
import { CreateBucketCommandInput, CreateBucketCommandOutput } from "./commands/CreateBucketCommand.ts";
import { CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand.ts";
import { DeleteAccessPointCommandInput, DeleteAccessPointCommandOutput } from "./commands/DeleteAccessPointCommand.ts";
import {
  DeleteAccessPointForObjectLambdaCommandInput,
  DeleteAccessPointForObjectLambdaCommandOutput,
} from "./commands/DeleteAccessPointForObjectLambdaCommand.ts";
import {
  DeleteAccessPointPolicyCommandInput,
  DeleteAccessPointPolicyCommandOutput,
} from "./commands/DeleteAccessPointPolicyCommand.ts";
import {
  DeleteAccessPointPolicyForObjectLambdaCommandInput,
  DeleteAccessPointPolicyForObjectLambdaCommandOutput,
} from "./commands/DeleteAccessPointPolicyForObjectLambdaCommand.ts";
import { DeleteBucketCommandInput, DeleteBucketCommandOutput } from "./commands/DeleteBucketCommand.ts";
import {
  DeleteBucketLifecycleConfigurationCommandInput,
  DeleteBucketLifecycleConfigurationCommandOutput,
} from "./commands/DeleteBucketLifecycleConfigurationCommand.ts";
import { DeleteBucketPolicyCommandInput, DeleteBucketPolicyCommandOutput } from "./commands/DeleteBucketPolicyCommand.ts";
import {
  DeleteBucketTaggingCommandInput,
  DeleteBucketTaggingCommandOutput,
} from "./commands/DeleteBucketTaggingCommand.ts";
import { DeleteJobTaggingCommandInput, DeleteJobTaggingCommandOutput } from "./commands/DeleteJobTaggingCommand.ts";
import {
  DeletePublicAccessBlockCommandInput,
  DeletePublicAccessBlockCommandOutput,
} from "./commands/DeletePublicAccessBlockCommand.ts";
import {
  DeleteStorageLensConfigurationCommandInput,
  DeleteStorageLensConfigurationCommandOutput,
} from "./commands/DeleteStorageLensConfigurationCommand.ts";
import {
  DeleteStorageLensConfigurationTaggingCommandInput,
  DeleteStorageLensConfigurationTaggingCommandOutput,
} from "./commands/DeleteStorageLensConfigurationTaggingCommand.ts";
import { DescribeJobCommandInput, DescribeJobCommandOutput } from "./commands/DescribeJobCommand.ts";
import { GetAccessPointCommandInput, GetAccessPointCommandOutput } from "./commands/GetAccessPointCommand.ts";
import {
  GetAccessPointConfigurationForObjectLambdaCommandInput,
  GetAccessPointConfigurationForObjectLambdaCommandOutput,
} from "./commands/GetAccessPointConfigurationForObjectLambdaCommand.ts";
import {
  GetAccessPointForObjectLambdaCommandInput,
  GetAccessPointForObjectLambdaCommandOutput,
} from "./commands/GetAccessPointForObjectLambdaCommand.ts";
import {
  GetAccessPointPolicyCommandInput,
  GetAccessPointPolicyCommandOutput,
} from "./commands/GetAccessPointPolicyCommand.ts";
import {
  GetAccessPointPolicyForObjectLambdaCommandInput,
  GetAccessPointPolicyForObjectLambdaCommandOutput,
} from "./commands/GetAccessPointPolicyForObjectLambdaCommand.ts";
import {
  GetAccessPointPolicyStatusCommandInput,
  GetAccessPointPolicyStatusCommandOutput,
} from "./commands/GetAccessPointPolicyStatusCommand.ts";
import {
  GetAccessPointPolicyStatusForObjectLambdaCommandInput,
  GetAccessPointPolicyStatusForObjectLambdaCommandOutput,
} from "./commands/GetAccessPointPolicyStatusForObjectLambdaCommand.ts";
import { GetBucketCommandInput, GetBucketCommandOutput } from "./commands/GetBucketCommand.ts";
import {
  GetBucketLifecycleConfigurationCommandInput,
  GetBucketLifecycleConfigurationCommandOutput,
} from "./commands/GetBucketLifecycleConfigurationCommand.ts";
import { GetBucketPolicyCommandInput, GetBucketPolicyCommandOutput } from "./commands/GetBucketPolicyCommand.ts";
import { GetBucketTaggingCommandInput, GetBucketTaggingCommandOutput } from "./commands/GetBucketTaggingCommand.ts";
import { GetJobTaggingCommandInput, GetJobTaggingCommandOutput } from "./commands/GetJobTaggingCommand.ts";
import {
  GetPublicAccessBlockCommandInput,
  GetPublicAccessBlockCommandOutput,
} from "./commands/GetPublicAccessBlockCommand.ts";
import {
  GetStorageLensConfigurationCommandInput,
  GetStorageLensConfigurationCommandOutput,
} from "./commands/GetStorageLensConfigurationCommand.ts";
import {
  GetStorageLensConfigurationTaggingCommandInput,
  GetStorageLensConfigurationTaggingCommandOutput,
} from "./commands/GetStorageLensConfigurationTaggingCommand.ts";
import { ListAccessPointsCommandInput, ListAccessPointsCommandOutput } from "./commands/ListAccessPointsCommand.ts";
import {
  ListAccessPointsForObjectLambdaCommandInput,
  ListAccessPointsForObjectLambdaCommandOutput,
} from "./commands/ListAccessPointsForObjectLambdaCommand.ts";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand.ts";
import {
  ListRegionalBucketsCommandInput,
  ListRegionalBucketsCommandOutput,
} from "./commands/ListRegionalBucketsCommand.ts";
import {
  ListStorageLensConfigurationsCommandInput,
  ListStorageLensConfigurationsCommandOutput,
} from "./commands/ListStorageLensConfigurationsCommand.ts";
import {
  PutAccessPointConfigurationForObjectLambdaCommandInput,
  PutAccessPointConfigurationForObjectLambdaCommandOutput,
} from "./commands/PutAccessPointConfigurationForObjectLambdaCommand.ts";
import {
  PutAccessPointPolicyCommandInput,
  PutAccessPointPolicyCommandOutput,
} from "./commands/PutAccessPointPolicyCommand.ts";
import {
  PutAccessPointPolicyForObjectLambdaCommandInput,
  PutAccessPointPolicyForObjectLambdaCommandOutput,
} from "./commands/PutAccessPointPolicyForObjectLambdaCommand.ts";
import {
  PutBucketLifecycleConfigurationCommandInput,
  PutBucketLifecycleConfigurationCommandOutput,
} from "./commands/PutBucketLifecycleConfigurationCommand.ts";
import { PutBucketPolicyCommandInput, PutBucketPolicyCommandOutput } from "./commands/PutBucketPolicyCommand.ts";
import { PutBucketTaggingCommandInput, PutBucketTaggingCommandOutput } from "./commands/PutBucketTaggingCommand.ts";
import { PutJobTaggingCommandInput, PutJobTaggingCommandOutput } from "./commands/PutJobTaggingCommand.ts";
import {
  PutPublicAccessBlockCommandInput,
  PutPublicAccessBlockCommandOutput,
} from "./commands/PutPublicAccessBlockCommand.ts";
import {
  PutStorageLensConfigurationCommandInput,
  PutStorageLensConfigurationCommandOutput,
} from "./commands/PutStorageLensConfigurationCommand.ts";
import {
  PutStorageLensConfigurationTaggingCommandInput,
  PutStorageLensConfigurationTaggingCommandOutput,
} from "./commands/PutStorageLensConfigurationTaggingCommand.ts";
import { UpdateJobPriorityCommandInput, UpdateJobPriorityCommandOutput } from "./commands/UpdateJobPriorityCommand.ts";
import { UpdateJobStatusCommandInput, UpdateJobStatusCommandOutput } from "./commands/UpdateJobStatusCommand.ts";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig.ts";
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
  S3ControlInputConfig,
  S3ControlResolvedConfig,
  resolveS3ControlConfig,
} from "../middleware-sdk-s3-control/mod.ts";
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
  StreamHasher as __StreamHasher,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "../types/mod.ts";
import { Readable } from "https://deno.land/std@0.111.0/node/stream.ts";

export type ServiceInputTypes =
  | CreateAccessPointCommandInput
  | CreateAccessPointForObjectLambdaCommandInput
  | CreateBucketCommandInput
  | CreateJobCommandInput
  | DeleteAccessPointCommandInput
  | DeleteAccessPointForObjectLambdaCommandInput
  | DeleteAccessPointPolicyCommandInput
  | DeleteAccessPointPolicyForObjectLambdaCommandInput
  | DeleteBucketCommandInput
  | DeleteBucketLifecycleConfigurationCommandInput
  | DeleteBucketPolicyCommandInput
  | DeleteBucketTaggingCommandInput
  | DeleteJobTaggingCommandInput
  | DeletePublicAccessBlockCommandInput
  | DeleteStorageLensConfigurationCommandInput
  | DeleteStorageLensConfigurationTaggingCommandInput
  | DescribeJobCommandInput
  | GetAccessPointCommandInput
  | GetAccessPointConfigurationForObjectLambdaCommandInput
  | GetAccessPointForObjectLambdaCommandInput
  | GetAccessPointPolicyCommandInput
  | GetAccessPointPolicyForObjectLambdaCommandInput
  | GetAccessPointPolicyStatusCommandInput
  | GetAccessPointPolicyStatusForObjectLambdaCommandInput
  | GetBucketCommandInput
  | GetBucketLifecycleConfigurationCommandInput
  | GetBucketPolicyCommandInput
  | GetBucketTaggingCommandInput
  | GetJobTaggingCommandInput
  | GetPublicAccessBlockCommandInput
  | GetStorageLensConfigurationCommandInput
  | GetStorageLensConfigurationTaggingCommandInput
  | ListAccessPointsCommandInput
  | ListAccessPointsForObjectLambdaCommandInput
  | ListJobsCommandInput
  | ListRegionalBucketsCommandInput
  | ListStorageLensConfigurationsCommandInput
  | PutAccessPointConfigurationForObjectLambdaCommandInput
  | PutAccessPointPolicyCommandInput
  | PutAccessPointPolicyForObjectLambdaCommandInput
  | PutBucketLifecycleConfigurationCommandInput
  | PutBucketPolicyCommandInput
  | PutBucketTaggingCommandInput
  | PutJobTaggingCommandInput
  | PutPublicAccessBlockCommandInput
  | PutStorageLensConfigurationCommandInput
  | PutStorageLensConfigurationTaggingCommandInput
  | UpdateJobPriorityCommandInput
  | UpdateJobStatusCommandInput;

export type ServiceOutputTypes =
  | CreateAccessPointCommandOutput
  | CreateAccessPointForObjectLambdaCommandOutput
  | CreateBucketCommandOutput
  | CreateJobCommandOutput
  | DeleteAccessPointCommandOutput
  | DeleteAccessPointForObjectLambdaCommandOutput
  | DeleteAccessPointPolicyCommandOutput
  | DeleteAccessPointPolicyForObjectLambdaCommandOutput
  | DeleteBucketCommandOutput
  | DeleteBucketLifecycleConfigurationCommandOutput
  | DeleteBucketPolicyCommandOutput
  | DeleteBucketTaggingCommandOutput
  | DeleteJobTaggingCommandOutput
  | DeletePublicAccessBlockCommandOutput
  | DeleteStorageLensConfigurationCommandOutput
  | DeleteStorageLensConfigurationTaggingCommandOutput
  | DescribeJobCommandOutput
  | GetAccessPointCommandOutput
  | GetAccessPointConfigurationForObjectLambdaCommandOutput
  | GetAccessPointForObjectLambdaCommandOutput
  | GetAccessPointPolicyCommandOutput
  | GetAccessPointPolicyForObjectLambdaCommandOutput
  | GetAccessPointPolicyStatusCommandOutput
  | GetAccessPointPolicyStatusForObjectLambdaCommandOutput
  | GetBucketCommandOutput
  | GetBucketLifecycleConfigurationCommandOutput
  | GetBucketPolicyCommandOutput
  | GetBucketTaggingCommandOutput
  | GetJobTaggingCommandOutput
  | GetPublicAccessBlockCommandOutput
  | GetStorageLensConfigurationCommandOutput
  | GetStorageLensConfigurationTaggingCommandOutput
  | ListAccessPointsCommandOutput
  | ListAccessPointsForObjectLambdaCommandOutput
  | ListJobsCommandOutput
  | ListRegionalBucketsCommandOutput
  | ListStorageLensConfigurationsCommandOutput
  | PutAccessPointConfigurationForObjectLambdaCommandOutput
  | PutAccessPointPolicyCommandOutput
  | PutAccessPointPolicyForObjectLambdaCommandOutput
  | PutBucketLifecycleConfigurationCommandOutput
  | PutBucketPolicyCommandOutput
  | PutBucketTaggingCommandOutput
  | PutJobTaggingCommandOutput
  | PutPublicAccessBlockCommandOutput
  | PutStorageLensConfigurationCommandOutput
  | PutStorageLensConfigurationTaggingCommandOutput
  | UpdateJobPriorityCommandOutput
  | UpdateJobStatusCommandOutput;

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

  /**
   * A function that, given a hash constructor and a stream, calculates the
   * hash of the streamed value.
   * @internal
   */
  streamHasher?: __StreamHasher<Readable> | __StreamHasher<Blob>;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes MD5 hashes.
   * @internal
   */
  md5?: __HashConstructor;
}

type S3ControlClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  S3ControlInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of S3ControlClient class constructor that set the region, credentials and other options.
 */
export interface S3ControlClientConfig extends S3ControlClientConfigType {}

type S3ControlClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  S3ControlResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of S3ControlClient class. This is resolved and normalized from the {@link S3ControlClientConfig | constructor configuration interface}.
 */
export interface S3ControlClientResolvedConfig extends S3ControlClientResolvedConfigType {}

/**
 * <p>
 *          Amazon Web Services S3 Control provides access to Amazon S3 control plane actions.
 *
 *       </p>
 */
export class S3ControlClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  S3ControlClientResolvedConfig
> {
  /**
   * The resolved configuration of S3ControlClient class. This is resolved and normalized from the {@link S3ControlClientConfig | constructor configuration interface}.
   */
  readonly config: S3ControlClientResolvedConfig;

  constructor(configuration: S3ControlClientConfig) {
    let _config_0 = __getRuntimeConfig(configuration);
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveAwsAuthConfig(_config_4);
    let _config_6 = resolveS3ControlConfig(_config_5);
    let _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
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
