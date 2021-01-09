import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient.ts";
import { ListDocumentClassificationJobsRequest, ListDocumentClassificationJobsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListDocumentClassificationJobsCommand,
  serializeAws_json1_1ListDocumentClassificationJobsCommand,
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

export type ListDocumentClassificationJobsCommandInput = ListDocumentClassificationJobsRequest;
export type ListDocumentClassificationJobsCommandOutput = ListDocumentClassificationJobsResponse & __MetadataBearer;

/**
 * <p>Gets a list of the documentation classification jobs that you have submitted.</p>
 */
export class ListDocumentClassificationJobsCommand extends $Command<
  ListDocumentClassificationJobsCommandInput,
  ListDocumentClassificationJobsCommandOutput,
  ComprehendClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDocumentClassificationJobsCommandInput) {
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
  ): Handler<ListDocumentClassificationJobsCommandInput, ListDocumentClassificationJobsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "ListDocumentClassificationJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDocumentClassificationJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDocumentClassificationJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListDocumentClassificationJobsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDocumentClassificationJobsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDocumentClassificationJobsCommandOutput> {
    return deserializeAws_json1_1ListDocumentClassificationJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
