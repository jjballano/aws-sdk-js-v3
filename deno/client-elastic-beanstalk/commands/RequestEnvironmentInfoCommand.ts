import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient.ts";
import { RequestEnvironmentInfoMessage } from "../models/models_0.ts";
import {
  deserializeAws_queryRequestEnvironmentInfoCommand,
  serializeAws_queryRequestEnvironmentInfoCommand,
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

export type RequestEnvironmentInfoCommandInput = RequestEnvironmentInfoMessage;
export type RequestEnvironmentInfoCommandOutput = __MetadataBearer;

/**
 * <p>Initiates a request to compile the specified type of information of the deployed
 *       environment.</p>
 *          <p> Setting the <code>InfoType</code> to <code>tail</code> compiles the last lines from
 *       the application server log files of every Amazon EC2 instance in your environment. </p>
 *          <p> Setting the <code>InfoType</code> to <code>bundle</code> compresses the application
 *       server log files for every Amazon EC2 instance into a <code>.zip</code> file. Legacy and .NET
 *       containers do not support bundle logs. </p>
 *          <p> Use <a>RetrieveEnvironmentInfo</a> to obtain the set of logs. </p>
 *          <p>Related Topics</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>RetrieveEnvironmentInfo</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class RequestEnvironmentInfoCommand extends $Command<
  RequestEnvironmentInfoCommandInput,
  RequestEnvironmentInfoCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RequestEnvironmentInfoCommandInput) {
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
  ): Handler<RequestEnvironmentInfoCommandInput, RequestEnvironmentInfoCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "RequestEnvironmentInfoCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RequestEnvironmentInfoMessage.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RequestEnvironmentInfoCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRequestEnvironmentInfoCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RequestEnvironmentInfoCommandOutput> {
    return deserializeAws_queryRequestEnvironmentInfoCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
