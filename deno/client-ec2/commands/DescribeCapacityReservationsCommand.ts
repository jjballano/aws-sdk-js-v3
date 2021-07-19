import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { DescribeCapacityReservationsRequest, DescribeCapacityReservationsResult } from "../models/models_2.ts";
import {
  deserializeAws_ec2DescribeCapacityReservationsCommand,
  serializeAws_ec2DescribeCapacityReservationsCommand,
} from "../protocols/Aws_ec2.ts";
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

export interface DescribeCapacityReservationsCommandInput extends DescribeCapacityReservationsRequest {}
export interface DescribeCapacityReservationsCommandOutput
  extends DescribeCapacityReservationsResult,
    __MetadataBearer {}

/**
 * <p>Describes one or more of your Capacity Reservations. The results describe only the Capacity Reservations in the
 * 		    	Region that you're currently using.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeCapacityReservationsCommand } from "../../client-ec2/mod.ts";
 * // const { EC2Client, DescribeCapacityReservationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeCapacityReservationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCapacityReservationsCommandInput} for command's `input` shape.
 * @see {@link DescribeCapacityReservationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeCapacityReservationsCommand extends $Command<
  DescribeCapacityReservationsCommandInput,
  DescribeCapacityReservationsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCapacityReservationsCommandInput) {
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
  ): Handler<DescribeCapacityReservationsCommandInput, DescribeCapacityReservationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeCapacityReservationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCapacityReservationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeCapacityReservationsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCapacityReservationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeCapacityReservationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCapacityReservationsCommandOutput> {
    return deserializeAws_ec2DescribeCapacityReservationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
