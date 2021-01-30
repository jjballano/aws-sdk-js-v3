import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient.ts";
import { AddFlowOutputsRequest, AddFlowOutputsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1AddFlowOutputsCommand,
  serializeAws_restJson1AddFlowOutputsCommand,
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

export type AddFlowOutputsCommandInput = AddFlowOutputsRequest;
export type AddFlowOutputsCommandOutput = AddFlowOutputsResponse & __MetadataBearer;

/**
 * Adds outputs to an existing flow. You can create up to 50 outputs per flow.
 */
export class AddFlowOutputsCommand extends $Command<
  AddFlowOutputsCommandInput,
  AddFlowOutputsCommandOutput,
  MediaConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddFlowOutputsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddFlowOutputsCommandInput, AddFlowOutputsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConnectClient";
    const commandName = "AddFlowOutputsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddFlowOutputsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AddFlowOutputsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddFlowOutputsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AddFlowOutputsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddFlowOutputsCommandOutput> {
    return deserializeAws_restJson1AddFlowOutputsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
