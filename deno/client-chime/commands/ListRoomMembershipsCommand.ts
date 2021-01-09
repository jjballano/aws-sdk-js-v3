import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import { ListRoomMembershipsRequest, ListRoomMembershipsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListRoomMembershipsCommand,
  serializeAws_restJson1ListRoomMembershipsCommand,
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

export type ListRoomMembershipsCommandInput = ListRoomMembershipsRequest;
export type ListRoomMembershipsCommandOutput = ListRoomMembershipsResponse & __MetadataBearer;

/**
 * <p>Lists the membership details for the specified room in an Amazon Chime Enterprise account, such as the members' IDs, email
 *       addresses, and names.</p>
 */
export class ListRoomMembershipsCommand extends $Command<
  ListRoomMembershipsCommandInput,
  ListRoomMembershipsCommandOutput,
  ChimeClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRoomMembershipsCommandInput) {
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
  ): Handler<ListRoomMembershipsCommandInput, ListRoomMembershipsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ListRoomMembershipsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRoomMembershipsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRoomMembershipsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRoomMembershipsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRoomMembershipsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRoomMembershipsCommandOutput> {
    return deserializeAws_restJson1ListRoomMembershipsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
