import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { CreateTapesInput, CreateTapesOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateTapesCommand,
  serializeAws_json1_1CreateTapesCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface CreateTapesCommandInput extends CreateTapesInput {}
export interface CreateTapesCommandOutput extends CreateTapesOutput, __MetadataBearer {}

/**
 * <p>Creates one or more virtual tapes. You write data to the virtual tapes and then archive
 *          the tapes. This operation is only supported in the tape gateway type.</p>
 *
 *          <note>
 *             <p>Cache storage must be allocated to the gateway before you can create virtual tapes.
 *             Use the <a>AddCache</a> operation to add cache storage to a gateway.</p>
 *          </note>
 */
export class CreateTapesCommand extends $Command<
  CreateTapesCommandInput,
  CreateTapesCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTapesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTapesCommandInput, CreateTapesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "CreateTapesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTapesInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTapesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTapesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateTapesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTapesCommandOutput> {
    return deserializeAws_json1_1CreateTapesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
