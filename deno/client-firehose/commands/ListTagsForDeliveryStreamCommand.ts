import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient.ts";
import { ListTagsForDeliveryStreamInput, ListTagsForDeliveryStreamOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListTagsForDeliveryStreamCommand,
  serializeAws_json1_1ListTagsForDeliveryStreamCommand,
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

export type ListTagsForDeliveryStreamCommandInput = ListTagsForDeliveryStreamInput;
export type ListTagsForDeliveryStreamCommandOutput = ListTagsForDeliveryStreamOutput & __MetadataBearer;

/**
 * <p>Lists the tags for the specified delivery stream. This operation has a limit of five
 *          transactions per second per account. </p>
 */
export class ListTagsForDeliveryStreamCommand extends $Command<
  ListTagsForDeliveryStreamCommandInput,
  ListTagsForDeliveryStreamCommandOutput,
  FirehoseClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTagsForDeliveryStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FirehoseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTagsForDeliveryStreamCommandInput, ListTagsForDeliveryStreamCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FirehoseClient";
    const commandName = "ListTagsForDeliveryStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTagsForDeliveryStreamInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListTagsForDeliveryStreamOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTagsForDeliveryStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTagsForDeliveryStreamCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListTagsForDeliveryStreamCommandOutput> {
    return deserializeAws_json1_1ListTagsForDeliveryStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
