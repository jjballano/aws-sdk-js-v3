
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient.ts";
import { StreamJournalToKinesisRequest, StreamJournalToKinesisResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1StreamJournalToKinesisCommand,
  serializeAws_restJson1StreamJournalToKinesisCommand,
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

export type StreamJournalToKinesisCommandInput = StreamJournalToKinesisRequest;
export type StreamJournalToKinesisCommandOutput = StreamJournalToKinesisResponse & __MetadataBearer;

export class StreamJournalToKinesisCommand extends $Command<
  StreamJournalToKinesisCommandInput,
  StreamJournalToKinesisCommandOutput,
  QLDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StreamJournalToKinesisCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QLDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StreamJournalToKinesisCommandInput, StreamJournalToKinesisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: StreamJournalToKinesisRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StreamJournalToKinesisResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StreamJournalToKinesisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StreamJournalToKinesisCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StreamJournalToKinesisCommandOutput> {
    return deserializeAws_restJson1StreamJournalToKinesisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
