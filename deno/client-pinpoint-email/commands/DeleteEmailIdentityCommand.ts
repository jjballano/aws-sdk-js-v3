import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient.ts";
import { DeleteEmailIdentityRequest, DeleteEmailIdentityResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteEmailIdentityCommand,
  serializeAws_restJson1DeleteEmailIdentityCommand,
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

export type DeleteEmailIdentityCommandInput = DeleteEmailIdentityRequest;
export type DeleteEmailIdentityCommandOutput = DeleteEmailIdentityResponse & __MetadataBearer;

/**
 * <p>Deletes an email identity that you previously verified for use with Amazon Pinpoint. An identity
 *             can be either an email address or a domain name.</p>
 */
export class DeleteEmailIdentityCommand extends $Command<
  DeleteEmailIdentityCommandInput,
  DeleteEmailIdentityCommandOutput,
  PinpointEmailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteEmailIdentityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteEmailIdentityCommandInput, DeleteEmailIdentityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "DeleteEmailIdentityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteEmailIdentityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteEmailIdentityResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteEmailIdentityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteEmailIdentityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteEmailIdentityCommandOutput> {
    return deserializeAws_restJson1DeleteEmailIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
