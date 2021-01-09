import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient.ts";
import { GetConnectionStatusRequest, GetConnectionStatusResponse } from "../models/models_1.ts";
import {
  deserializeAws_json1_1GetConnectionStatusCommand,
  serializeAws_json1_1GetConnectionStatusCommand,
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

export type GetConnectionStatusCommandInput = GetConnectionStatusRequest;
export type GetConnectionStatusCommandOutput = GetConnectionStatusResponse & __MetadataBearer;

/**
 * <p>Retrieves the Session Manager connection status for an instance to determine whether it is running and
 *    ready to receive Session Manager connections.</p>
 */
export class GetConnectionStatusCommand extends $Command<
  GetConnectionStatusCommandInput,
  GetConnectionStatusCommandOutput,
  SSMClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetConnectionStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConnectionStatusCommandInput, GetConnectionStatusCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetConnectionStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetConnectionStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetConnectionStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetConnectionStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetConnectionStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetConnectionStatusCommandOutput> {
    return deserializeAws_json1_1GetConnectionStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
