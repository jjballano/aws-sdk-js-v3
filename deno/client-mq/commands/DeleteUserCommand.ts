import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient.ts";
import { DeleteUserRequest, DeleteUserResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteUserCommand,
  serializeAws_restJson1DeleteUserCommand,
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

export interface DeleteUserCommandInput extends DeleteUserRequest {}
export interface DeleteUserCommandOutput extends DeleteUserResponse, __MetadataBearer {}

/**
 * <p>Deletes an ActiveMQ user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, DeleteUserCommand } from "../../client-mq/mod.ts";
 * // const { MqClient, DeleteUserCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new DeleteUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUserCommandInput} for command's `input` shape.
 * @see {@link DeleteUserCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteUserCommand extends $Command<
  DeleteUserCommandInput,
  DeleteUserCommandOutput,
  MqClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteUserCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MqClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteUserCommandInput, DeleteUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MqClient";
    const commandName = "DeleteUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteUserResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteUserCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteUserCommandOutput> {
    return deserializeAws_restJson1DeleteUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
