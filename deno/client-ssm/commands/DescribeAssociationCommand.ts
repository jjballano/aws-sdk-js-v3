import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient.ts";
import { DescribeAssociationRequest, DescribeAssociationResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeAssociationCommand,
  serializeAws_json1_1DescribeAssociationCommand,
} from "../protocols/Aws_json1_1.ts";
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

export interface DescribeAssociationCommandInput extends DescribeAssociationRequest {}
export interface DescribeAssociationCommandOutput extends DescribeAssociationResult, __MetadataBearer {}

/**
 * <p>Describes the association for the specified target or instance. If you created the
 *    association by using the <code>Targets</code> parameter, then you must retrieve the association
 *    by using the association ID. If you created the association by specifying an instance ID and an
 *    Amazon Web Services Systems Manager document (SSM document), then you retrieve the association by specifying the document
 *    name and the instance ID. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeAssociationCommand } from "../../client-ssm/mod.ts";
 * // const { SSMClient, DescribeAssociationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAssociationCommandInput} for command's `input` shape.
 * @see {@link DescribeAssociationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeAssociationCommand extends $Command<
  DescribeAssociationCommandInput,
  DescribeAssociationCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAssociationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAssociationCommandInput, DescribeAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAssociationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAssociationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAssociationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAssociationCommandOutput> {
    return deserializeAws_json1_1DescribeAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
