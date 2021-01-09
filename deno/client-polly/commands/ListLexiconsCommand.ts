import { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient.ts";
import { ListLexiconsInput, ListLexiconsOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListLexiconsCommand,
  serializeAws_restJson1ListLexiconsCommand,
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

export type ListLexiconsCommandInput = ListLexiconsInput;
export type ListLexiconsCommandOutput = ListLexiconsOutput & __MetadataBearer;

/**
 * <p>Returns a list of pronunciation lexicons stored in an AWS Region. For more information,
 *       see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing
 *         Lexicons</a>.</p>
 */
export class ListLexiconsCommand extends $Command<
  ListLexiconsCommandInput,
  ListLexiconsCommandOutput,
  PollyClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListLexiconsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PollyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLexiconsCommandInput, ListLexiconsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PollyClient";
    const commandName = "ListLexiconsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListLexiconsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListLexiconsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListLexiconsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListLexiconsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLexiconsCommandOutput> {
    return deserializeAws_restJson1ListLexiconsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
