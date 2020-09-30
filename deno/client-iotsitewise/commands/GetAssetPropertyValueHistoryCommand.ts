
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient.ts";
import { GetAssetPropertyValueHistoryRequest, GetAssetPropertyValueHistoryResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetAssetPropertyValueHistoryCommand,
  serializeAws_restJson1GetAssetPropertyValueHistoryCommand,
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

export type GetAssetPropertyValueHistoryCommandInput = GetAssetPropertyValueHistoryRequest;
export type GetAssetPropertyValueHistoryCommandOutput = GetAssetPropertyValueHistoryResponse & __MetadataBearer;

export class GetAssetPropertyValueHistoryCommand extends $Command<
  GetAssetPropertyValueHistoryCommandInput,
  GetAssetPropertyValueHistoryCommandOutput,
  IoTSiteWiseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAssetPropertyValueHistoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSiteWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAssetPropertyValueHistoryCommandInput, GetAssetPropertyValueHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetAssetPropertyValueHistoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAssetPropertyValueHistoryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAssetPropertyValueHistoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetAssetPropertyValueHistoryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAssetPropertyValueHistoryCommandOutput> {
    return deserializeAws_restJson1GetAssetPropertyValueHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
