import process from "https://deno.land/std@0.111.0/node/process.ts";
import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient.ts";
import {
  GetOpenIdTokenForDeveloperIdentityInput,
  GetOpenIdTokenForDeveloperIdentityResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand,
  serializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand,
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

export interface GetOpenIdTokenForDeveloperIdentityCommandInput extends GetOpenIdTokenForDeveloperIdentityInput {}
export interface GetOpenIdTokenForDeveloperIdentityCommandOutput
  extends GetOpenIdTokenForDeveloperIdentityResponse,
    __MetadataBearer {}

/**
 * <p>Registers (or retrieves) a Cognito <code>IdentityId</code> and an OpenID Connect
 *          token for a user authenticated by your backend authentication process. Supplying multiple
 *          logins will create an implicit linked account. You can only specify one developer provider
 *          as part of the <code>Logins</code> map, which is linked to the identity pool. The developer
 *          provider is the "domain" by which Cognito will refer to your users.</p>
 *          <p>You can use <code>GetOpenIdTokenForDeveloperIdentity</code> to create a new identity
 *          and to link new logins (that is, user credentials issued by a public provider or developer
 *          provider) to an existing identity. When you want to create a new identity, the
 *             <code>IdentityId</code> should be null. When you want to associate a new login with an
 *          existing authenticated/unauthenticated identity, you can do so by providing the existing
 *             <code>IdentityId</code>. This API will create the identity in the specified
 *             <code>IdentityPoolId</code>.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, GetOpenIdTokenForDeveloperIdentityCommand } from "../../client-cognito-identity/mod.ts";
 * // const { CognitoIdentityClient, GetOpenIdTokenForDeveloperIdentityCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new GetOpenIdTokenForDeveloperIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOpenIdTokenForDeveloperIdentityCommandInput} for command's `input` shape.
 * @see {@link GetOpenIdTokenForDeveloperIdentityCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetOpenIdTokenForDeveloperIdentityCommand extends $Command<
  GetOpenIdTokenForDeveloperIdentityCommandInput,
  GetOpenIdTokenForDeveloperIdentityCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetOpenIdTokenForDeveloperIdentityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetOpenIdTokenForDeveloperIdentityCommandInput, GetOpenIdTokenForDeveloperIdentityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityClient";
    const commandName = "GetOpenIdTokenForDeveloperIdentityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetOpenIdTokenForDeveloperIdentityInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetOpenIdTokenForDeveloperIdentityResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetOpenIdTokenForDeveloperIdentityCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetOpenIdTokenForDeveloperIdentityCommandOutput> {
    return deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
