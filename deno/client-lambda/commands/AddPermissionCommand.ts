import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient.ts";
import { AddPermissionRequest, AddPermissionResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1AddPermissionCommand,
  serializeAws_restJson1AddPermissionCommand,
} from "../protocols/Aws_restJson1.ts";
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

export interface AddPermissionCommandInput extends AddPermissionRequest {}
export interface AddPermissionCommandOutput extends AddPermissionResponse, __MetadataBearer {}

/**
 * <p>Grants an Amazon Web Services service or another account permission to use a function. You can apply the policy at the
 *       function level, or specify a qualifier to restrict access to a single version or alias. If you use a qualifier,
 *       the invoker must use the full Amazon Resource Name (ARN) of that version or alias to invoke the function.</p>
 *
 *          <p>To grant permission to another account, specify the account ID as the <code>Principal</code>. For Amazon Web Services
 *       services, the principal is a domain-style identifier defined by the service, like <code>s3.amazonaws.com</code> or
 *         <code>sns.amazonaws.com</code>. For Amazon Web Services services, you can also specify the ARN of the associated resource as the
 *         <code>SourceArn</code>. If you grant permission to a service principal without specifying the source, other
 *       accounts could potentially configure resources in their account to invoke your Lambda function.</p>
 *
 *          <p>This action adds a statement to a resource-based permissions policy for the function. For more information
 *       about function policies, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">Lambda Function Policies</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, AddPermissionCommand } from "../../client-lambda/mod.ts";
 * // const { LambdaClient, AddPermissionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new AddPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddPermissionCommandInput} for command's `input` shape.
 * @see {@link AddPermissionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AddPermissionCommand extends $Command<
  AddPermissionCommandInput,
  AddPermissionCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddPermissionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddPermissionCommandInput, AddPermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "AddPermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddPermissionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AddPermissionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddPermissionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AddPermissionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddPermissionCommandOutput> {
    return deserializeAws_restJson1AddPermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
