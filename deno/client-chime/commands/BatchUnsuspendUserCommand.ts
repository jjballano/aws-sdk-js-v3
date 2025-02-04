import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import { BatchUnsuspendUserRequest, BatchUnsuspendUserResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1BatchUnsuspendUserCommand,
  serializeAws_restJson1BatchUnsuspendUserCommand,
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

export interface BatchUnsuspendUserCommandInput extends BatchUnsuspendUserRequest {}
export interface BatchUnsuspendUserCommandOutput extends BatchUnsuspendUserResponse, __MetadataBearer {}

/**
 * <p>Removes the suspension from up to 50 previously suspended users for the specified Amazon
 *             Chime <code>EnterpriseLWA</code> account. Only users on <code>EnterpriseLWA</code>
 *             accounts can be unsuspended using this action. For more information about different account types, see
 *     <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">
 *         Managing Your Amazon Chime Accounts
 *     </a> in the account types, in the <i>Amazon Chime Administration Guide</i>.
 * </p>
 *
 *          <p>
 * Previously suspended users who are unsuspended using this action are returned to
 * <code>Registered</code>
 * status. Users who are not previously suspended are ignored.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, BatchUnsuspendUserCommand } from "../../client-chime/mod.ts";
 * // const { ChimeClient, BatchUnsuspendUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new BatchUnsuspendUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchUnsuspendUserCommandInput} for command's `input` shape.
 * @see {@link BatchUnsuspendUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchUnsuspendUserCommand extends $Command<
  BatchUnsuspendUserCommandInput,
  BatchUnsuspendUserCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchUnsuspendUserCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchUnsuspendUserCommandInput, BatchUnsuspendUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "BatchUnsuspendUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchUnsuspendUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchUnsuspendUserResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchUnsuspendUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchUnsuspendUserCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchUnsuspendUserCommandOutput> {
    return deserializeAws_restJson1BatchUnsuspendUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
