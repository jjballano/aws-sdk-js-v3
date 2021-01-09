import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient.ts";
import {
  DescribeInstanceAccessControlAttributeConfigurationRequest,
  DescribeInstanceAccessControlAttributeConfigurationResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeInstanceAccessControlAttributeConfigurationCommand,
  serializeAws_json1_1DescribeInstanceAccessControlAttributeConfigurationCommand,
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

export type DescribeInstanceAccessControlAttributeConfigurationCommandInput = DescribeInstanceAccessControlAttributeConfigurationRequest;
export type DescribeInstanceAccessControlAttributeConfigurationCommandOutput = DescribeInstanceAccessControlAttributeConfigurationResponse &
  __MetadataBearer;

/**
 * <p>Returns the list of AWS SSO identity store attributes that have been configured to work with attributes-based access control (ABAC) for the specified AWS SSO instance. This will not return attributes configured and sent by an external identity provider. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>AWS SSO User Guide</i>.</p>
 */
export class DescribeInstanceAccessControlAttributeConfigurationCommand extends $Command<
  DescribeInstanceAccessControlAttributeConfigurationCommandInput,
  DescribeInstanceAccessControlAttributeConfigurationCommandOutput,
  SSOAdminClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeInstanceAccessControlAttributeConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeInstanceAccessControlAttributeConfigurationCommandInput,
    DescribeInstanceAccessControlAttributeConfigurationCommandOutput
  > {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "DescribeInstanceAccessControlAttributeConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInstanceAccessControlAttributeConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeInstanceAccessControlAttributeConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeInstanceAccessControlAttributeConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeInstanceAccessControlAttributeConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInstanceAccessControlAttributeConfigurationCommandOutput> {
    return deserializeAws_json1_1DescribeInstanceAccessControlAttributeConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
