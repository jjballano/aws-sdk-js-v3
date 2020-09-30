
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient.ts";
import { BatchDisableStandardsRequest, BatchDisableStandardsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1BatchDisableStandardsCommand,
  serializeAws_restJson1BatchDisableStandardsCommand,
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

export type BatchDisableStandardsCommandInput = BatchDisableStandardsRequest;
export type BatchDisableStandardsCommandOutput = BatchDisableStandardsResponse & __MetadataBearer;

export class BatchDisableStandardsCommand extends $Command<
  BatchDisableStandardsCommandInput,
  BatchDisableStandardsCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchDisableStandardsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDisableStandardsCommandInput, BatchDisableStandardsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: BatchDisableStandardsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDisableStandardsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchDisableStandardsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchDisableStandardsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchDisableStandardsCommandOutput> {
    return deserializeAws_restJson1BatchDisableStandardsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
