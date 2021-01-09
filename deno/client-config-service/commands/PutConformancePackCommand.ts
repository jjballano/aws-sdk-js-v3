import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient.ts";
import { PutConformancePackRequest, PutConformancePackResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1PutConformancePackCommand,
  serializeAws_json1_1PutConformancePackCommand,
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

export type PutConformancePackCommandInput = PutConformancePackRequest;
export type PutConformancePackCommandOutput = PutConformancePackResponse & __MetadataBearer;

/**
 * <p>Creates or updates a conformance pack. A conformance pack is a collection of AWS Config rules that can be easily deployed in an account and a region and across AWS Organization.</p>
 * 		       <p>This API creates a service linked role <code>AWSServiceRoleForConfigConforms</code> in your account.
 * 		The service linked role is created only when the role does not exist in your account. </p>
 * 		       <note>
 *             <p>You must specify either the <code>TemplateS3Uri</code> or the <code>TemplateBody</code> parameter, but not both.
 * 			If you provide both AWS Config uses the <code>TemplateS3Uri</code> parameter and ignores the <code>TemplateBody</code> parameter.</p>
 *          </note>
 */
export class PutConformancePackCommand extends $Command<
  PutConformancePackCommandInput,
  PutConformancePackCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutConformancePackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutConformancePackCommandInput, PutConformancePackCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "PutConformancePackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutConformancePackRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutConformancePackResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutConformancePackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutConformancePackCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutConformancePackCommandOutput> {
    return deserializeAws_json1_1PutConformancePackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
