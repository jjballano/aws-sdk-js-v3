import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient.ts";
import { TranslateTextRequest, TranslateTextResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1TranslateTextCommand,
  serializeAws_json1_1TranslateTextCommand,
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

export type TranslateTextCommandInput = TranslateTextRequest;
export type TranslateTextCommandOutput = TranslateTextResponse & __MetadataBearer;

/**
 * <p>Translates input text from the source language to the target language. For a list of
 *       available languages and language codes, see <a>what-is-languages</a>.</p>
 */
export class TranslateTextCommand extends $Command<
  TranslateTextCommandInput,
  TranslateTextCommandOutput,
  TranslateClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TranslateTextCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranslateClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TranslateTextCommandInput, TranslateTextCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranslateClient";
    const commandName = "TranslateTextCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TranslateTextRequest.filterSensitiveLog,
      outputFilterSensitiveLog: TranslateTextResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TranslateTextCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1TranslateTextCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TranslateTextCommandOutput> {
    return deserializeAws_json1_1TranslateTextCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
