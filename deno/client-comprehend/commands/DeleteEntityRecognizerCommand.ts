import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient.ts";
import { DeleteEntityRecognizerRequest, DeleteEntityRecognizerResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteEntityRecognizerCommand,
  serializeAws_json1_1DeleteEntityRecognizerCommand,
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

export type DeleteEntityRecognizerCommandInput = DeleteEntityRecognizerRequest;
export type DeleteEntityRecognizerCommandOutput = DeleteEntityRecognizerResponse & __MetadataBearer;

/**
 * <p>Deletes an entity recognizer.</p>
 *          <p>Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will be deleted.
 *       If an active inference job is using the model, a <code>ResourceInUseException</code> will be
 *       returned.</p>
 *          <p>This is an asynchronous action that puts the recognizer into a DELETING state, and it is
 *       then removed by a background job. Once removed, the recognizer disappears from your account
 *       and is no longer available for use. </p>
 */
export class DeleteEntityRecognizerCommand extends $Command<
  DeleteEntityRecognizerCommandInput,
  DeleteEntityRecognizerCommandOutput,
  ComprehendClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteEntityRecognizerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteEntityRecognizerCommandInput, DeleteEntityRecognizerCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "DeleteEntityRecognizerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteEntityRecognizerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteEntityRecognizerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteEntityRecognizerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteEntityRecognizerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteEntityRecognizerCommandOutput> {
    return deserializeAws_json1_1DeleteEntityRecognizerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
