
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient.ts";
import { DeleteGlobalNetworkRequest, DeleteGlobalNetworkResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteGlobalNetworkCommand,
  serializeAws_restJson1DeleteGlobalNetworkCommand,
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

export type DeleteGlobalNetworkCommandInput = DeleteGlobalNetworkRequest;
export type DeleteGlobalNetworkCommandOutput = DeleteGlobalNetworkResponse & __MetadataBearer;

export class DeleteGlobalNetworkCommand extends $Command<
  DeleteGlobalNetworkCommandInput,
  DeleteGlobalNetworkCommandOutput,
  NetworkManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteGlobalNetworkCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteGlobalNetworkCommandInput, DeleteGlobalNetworkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DeleteGlobalNetworkRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteGlobalNetworkResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteGlobalNetworkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteGlobalNetworkCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteGlobalNetworkCommandOutput> {
    return deserializeAws_restJson1DeleteGlobalNetworkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
