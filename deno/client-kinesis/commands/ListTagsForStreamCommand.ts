import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient.ts";
import { ListTagsForStreamInput, ListTagsForStreamOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListTagsForStreamCommand,
  serializeAws_json1_1ListTagsForStreamCommand,
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

export type ListTagsForStreamCommandInput = ListTagsForStreamInput;
export type ListTagsForStreamCommandOutput = ListTagsForStreamOutput & __MetadataBearer;

/**
 * <p>Lists the tags for the specified Kinesis data stream. This operation has a limit of
 *             five transactions per second per account.</p>
 */
export class ListTagsForStreamCommand extends $Command<
  ListTagsForStreamCommandInput,
  ListTagsForStreamCommandOutput,
  KinesisClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTagsForStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTagsForStreamCommandInput, ListTagsForStreamCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "ListTagsForStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTagsForStreamInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListTagsForStreamOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTagsForStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTagsForStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTagsForStreamCommandOutput> {
    return deserializeAws_json1_1ListTagsForStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
