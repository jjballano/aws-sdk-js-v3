
import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import { RegenerateSecurityTokenRequest, RegenerateSecurityTokenResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1RegenerateSecurityTokenCommand,
  serializeAws_restJson1RegenerateSecurityTokenCommand,
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

export type RegenerateSecurityTokenCommandInput = RegenerateSecurityTokenRequest;
export type RegenerateSecurityTokenCommandOutput = RegenerateSecurityTokenResponse & __MetadataBearer;

export class RegenerateSecurityTokenCommand extends $Command<
  RegenerateSecurityTokenCommandInput,
  RegenerateSecurityTokenCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegenerateSecurityTokenCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegenerateSecurityTokenCommandInput, RegenerateSecurityTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: RegenerateSecurityTokenRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegenerateSecurityTokenResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegenerateSecurityTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RegenerateSecurityTokenCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegenerateSecurityTokenCommandOutput> {
    return deserializeAws_restJson1RegenerateSecurityTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
