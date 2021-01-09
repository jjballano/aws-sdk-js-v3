import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient.ts";
import { ComposeEnvironmentsMessage, EnvironmentDescriptionsMessage } from "../models/models_0.ts";
import {
  deserializeAws_queryComposeEnvironmentsCommand,
  serializeAws_queryComposeEnvironmentsCommand,
} from "../protocols/Aws_query.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "../../types/mod.ts";

export type ComposeEnvironmentsCommandInput = ComposeEnvironmentsMessage;
export type ComposeEnvironmentsCommandOutput = EnvironmentDescriptionsMessage & __MetadataBearer;

/**
 * <p>Create or update a group of environments that each run a separate component of a single
 *       application. Takes a list of version labels that specify application source bundles for each
 *       of the environments to create or update. The name of each environment and other required
 *       information must be included in the source bundles in an environment manifest named
 *       <code>env.yaml</code>. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-mgmt-compose.html">Compose Environments</a>
 *       for details.</p>
 */
export class ComposeEnvironmentsCommand extends $Command<
  ComposeEnvironmentsCommandInput,
  ComposeEnvironmentsCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ComposeEnvironmentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ComposeEnvironmentsCommandInput, ComposeEnvironmentsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "ComposeEnvironmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ComposeEnvironmentsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: EnvironmentDescriptionsMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ComposeEnvironmentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryComposeEnvironmentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ComposeEnvironmentsCommandOutput> {
    return deserializeAws_queryComposeEnvironmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
