import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient.ts";
import { DeleteThemeAliasRequest, DeleteThemeAliasResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteThemeAliasCommand,
  serializeAws_restJson1DeleteThemeAliasCommand,
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

export type DeleteThemeAliasCommandInput = DeleteThemeAliasRequest;
export type DeleteThemeAliasCommandOutput = DeleteThemeAliasResponse & __MetadataBearer;

/**
 * <p>Deletes the version of the theme that the specified theme alias points to.
 * 			If you provide a specific alias, you delete the version of the theme
 * 			that the alias points to.</p>
 */
export class DeleteThemeAliasCommand extends $Command<
  DeleteThemeAliasCommandInput,
  DeleteThemeAliasCommandOutput,
  QuickSightClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteThemeAliasCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteThemeAliasCommandInput, DeleteThemeAliasCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DeleteThemeAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteThemeAliasRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteThemeAliasResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteThemeAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteThemeAliasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteThemeAliasCommandOutput> {
    return deserializeAws_restJson1DeleteThemeAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
