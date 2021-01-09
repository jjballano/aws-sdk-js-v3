import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient.ts";
import { EnableSharingWithAwsOrganizationRequest, EnableSharingWithAwsOrganizationResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1EnableSharingWithAwsOrganizationCommand,
  serializeAws_restJson1EnableSharingWithAwsOrganizationCommand,
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

export type EnableSharingWithAwsOrganizationCommandInput = EnableSharingWithAwsOrganizationRequest;
export type EnableSharingWithAwsOrganizationCommandOutput = EnableSharingWithAwsOrganizationResponse & __MetadataBearer;

/**
 * <p>Enables resource sharing within your AWS Organization.</p>
 *          <p>The caller must be the master account for the AWS Organization.</p>
 */
export class EnableSharingWithAwsOrganizationCommand extends $Command<
  EnableSharingWithAwsOrganizationCommandInput,
  EnableSharingWithAwsOrganizationCommandOutput,
  RAMClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableSharingWithAwsOrganizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableSharingWithAwsOrganizationCommandInput, EnableSharingWithAwsOrganizationCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "EnableSharingWithAwsOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableSharingWithAwsOrganizationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: EnableSharingWithAwsOrganizationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: EnableSharingWithAwsOrganizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1EnableSharingWithAwsOrganizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableSharingWithAwsOrganizationCommandOutput> {
    return deserializeAws_restJson1EnableSharingWithAwsOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
