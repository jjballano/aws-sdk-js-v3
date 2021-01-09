import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient.ts";
import { ResendConfirmationCodeRequest, ResendConfirmationCodeResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ResendConfirmationCodeCommand,
  serializeAws_json1_1ResendConfirmationCodeCommand,
} from "../protocols/Aws_json1_1.ts";
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

export type ResendConfirmationCodeCommandInput = ResendConfirmationCodeRequest;
export type ResendConfirmationCodeCommandOutput = ResendConfirmationCodeResponse & __MetadataBearer;

/**
 * <p>Resends the confirmation (for confirmation of registration) to a specific user in the
 *             user pool.</p>
 */
export class ResendConfirmationCodeCommand extends $Command<
  ResendConfirmationCodeCommandInput,
  ResendConfirmationCodeCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResendConfirmationCodeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResendConfirmationCodeCommandInput, ResendConfirmationCodeCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "ResendConfirmationCodeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResendConfirmationCodeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ResendConfirmationCodeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResendConfirmationCodeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ResendConfirmationCodeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResendConfirmationCodeCommandOutput> {
    return deserializeAws_json1_1ResendConfirmationCodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
