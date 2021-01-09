import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import { ListProxySessionsRequest, ListProxySessionsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListProxySessionsCommand,
  serializeAws_restJson1ListProxySessionsCommand,
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

export type ListProxySessionsCommandInput = ListProxySessionsRequest;
export type ListProxySessionsCommandOutput = ListProxySessionsResponse & __MetadataBearer;

/**
 * <p>Lists the proxy sessions for the specified Amazon Chime Voice Connector.</p>
 */
export class ListProxySessionsCommand extends $Command<
  ListProxySessionsCommandInput,
  ListProxySessionsCommandOutput,
  ChimeClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListProxySessionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListProxySessionsCommandInput, ListProxySessionsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ListProxySessionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListProxySessionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListProxySessionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListProxySessionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListProxySessionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListProxySessionsCommandOutput> {
    return deserializeAws_restJson1ListProxySessionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
