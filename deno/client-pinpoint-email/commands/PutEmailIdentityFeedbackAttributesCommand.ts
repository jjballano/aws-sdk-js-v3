import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient.ts";
import {
  PutEmailIdentityFeedbackAttributesRequest,
  PutEmailIdentityFeedbackAttributesResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand,
  serializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand,
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

export type PutEmailIdentityFeedbackAttributesCommandInput = PutEmailIdentityFeedbackAttributesRequest;
export type PutEmailIdentityFeedbackAttributesCommandOutput = PutEmailIdentityFeedbackAttributesResponse &
  __MetadataBearer;

/**
 * <p>Used to enable or disable feedback forwarding for an identity. This setting determines
 *             what happens when an identity is used to send an email that results in a bounce or
 *             complaint event.</p>
 *         <p>When you enable feedback forwarding, Amazon Pinpoint sends you email notifications when bounce
 *             or complaint events occur. Amazon Pinpoint sends this notification to the address that you
 *             specified in the Return-Path header of the original email.</p>
 *         <p>When you disable feedback forwarding, Amazon Pinpoint sends notifications through other
 *             mechanisms, such as by notifying an Amazon SNS topic. You're required to have a method of
 *             tracking bounces and complaints. If you haven't set up another mechanism for receiving
 *             bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events
 *             occur (even if this setting is disabled).</p>
 */
export class PutEmailIdentityFeedbackAttributesCommand extends $Command<
  PutEmailIdentityFeedbackAttributesCommandInput,
  PutEmailIdentityFeedbackAttributesCommandOutput,
  PinpointEmailClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutEmailIdentityFeedbackAttributesCommandInput) {
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
  ): Handler<PutEmailIdentityFeedbackAttributesCommandInput, PutEmailIdentityFeedbackAttributesCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "PutEmailIdentityFeedbackAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutEmailIdentityFeedbackAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutEmailIdentityFeedbackAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutEmailIdentityFeedbackAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutEmailIdentityFeedbackAttributesCommandOutput> {
    return deserializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
