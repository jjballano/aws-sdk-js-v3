import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { CreateFlowLogsRequest, CreateFlowLogsResult } from "../models/models_0.ts";
import { deserializeAws_ec2CreateFlowLogsCommand, serializeAws_ec2CreateFlowLogsCommand } from "../protocols/Aws_ec2.ts";
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

export interface CreateFlowLogsCommandInput extends CreateFlowLogsRequest {}
export interface CreateFlowLogsCommandOutput extends CreateFlowLogsResult, __MetadataBearer {}

/**
 * <p>Creates one or more flow logs to capture information about IP traffic for a specific network interface,
 *             subnet, or VPC. </p>
 *
 *         <p>Flow log data for a monitored network interface is recorded as flow log records, which are log events
 *             consisting of fields that describe the traffic flow. For more information, see
 *             <a href="https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html#flow-log-records">Flow log records</a>
 *             in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 *
 *         <p>When publishing to CloudWatch Logs, flow log records are published to a log group, and each network
 *             interface has a unique log stream in the log group. When publishing to Amazon S3, flow log records for all
 *             of the monitored network interfaces are published to a single log file object that is stored in the specified
 *             bucket.</p>
 *
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html">VPC Flow Logs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateFlowLogsCommand } from "../../client-ec2/mod.ts";
 * // const { EC2Client, CreateFlowLogsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateFlowLogsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFlowLogsCommandInput} for command's `input` shape.
 * @see {@link CreateFlowLogsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateFlowLogsCommand extends $Command<
  CreateFlowLogsCommandInput,
  CreateFlowLogsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateFlowLogsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateFlowLogsCommandInput, CreateFlowLogsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateFlowLogsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFlowLogsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateFlowLogsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFlowLogsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateFlowLogsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFlowLogsCommandOutput> {
    return deserializeAws_ec2CreateFlowLogsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
