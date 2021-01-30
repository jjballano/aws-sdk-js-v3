import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient.ts";
import { ListTypesRequest, ListTypesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListTypesCommand,
  serializeAws_restJson1ListTypesCommand,
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

export type ListTypesCommandInput = ListTypesRequest;
export type ListTypesCommandOutput = ListTypesResponse & __MetadataBearer;

/**
 * <p>Lists the types for a given API.</p>
 */
export class ListTypesCommand extends $Command<
  ListTypesCommandInput,
  ListTypesCommandOutput,
  AppSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTypesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTypesCommandInput, ListTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "ListTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTypesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTypesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListTypesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTypesCommandOutput> {
    return deserializeAws_restJson1ListTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
