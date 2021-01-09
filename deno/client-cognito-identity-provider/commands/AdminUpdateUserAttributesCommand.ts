import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient.ts";
import { AdminUpdateUserAttributesRequest, AdminUpdateUserAttributesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1AdminUpdateUserAttributesCommand,
  serializeAws_json1_1AdminUpdateUserAttributesCommand,
} from "../protocols/Aws_json1_1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import { getAwsAuthPlugin } from "../../middleware-signing/mod.ts";
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

export type AdminUpdateUserAttributesCommandInput = AdminUpdateUserAttributesRequest;
export type AdminUpdateUserAttributesCommandOutput = AdminUpdateUserAttributesResponse & __MetadataBearer;

/**
 * <p>Updates the specified user's attributes, including developer attributes, as an
 *             administrator. Works on any user.</p>
 *         <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the
 *             attribute name.</p>
 *         <p>In addition to updating user attributes, this API can also be used to mark phone and
 *             email as verified.</p>
 *         <p>Calling this action requires developer credentials.</p>
 */
export class AdminUpdateUserAttributesCommand extends $Command<
  AdminUpdateUserAttributesCommandInput,
  AdminUpdateUserAttributesCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AdminUpdateUserAttributesCommandInput) {
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
  ): Handler<AdminUpdateUserAttributesCommandInput, AdminUpdateUserAttributesCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.middlewareStack.use(getAwsAuthPlugin(configuration));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AdminUpdateUserAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdminUpdateUserAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AdminUpdateUserAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AdminUpdateUserAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AdminUpdateUserAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AdminUpdateUserAttributesCommandOutput> {
    return deserializeAws_json1_1AdminUpdateUserAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
