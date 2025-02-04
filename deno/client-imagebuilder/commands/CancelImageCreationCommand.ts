import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient.ts";
import { CancelImageCreationRequest, CancelImageCreationResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CancelImageCreationCommand,
  serializeAws_restJson1CancelImageCreationCommand,
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

export interface CancelImageCreationCommandInput extends CancelImageCreationRequest {}
export interface CancelImageCreationCommandOutput extends CancelImageCreationResponse, __MetadataBearer {}

/**
 * <p>CancelImageCreation cancels the creation of Image. This operation can only be used on
 * 			images in a non-terminal state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CancelImageCreationCommand } from "../../client-imagebuilder/mod.ts";
 * // const { ImagebuilderClient, CancelImageCreationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new CancelImageCreationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelImageCreationCommandInput} for command's `input` shape.
 * @see {@link CancelImageCreationCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CancelImageCreationCommand extends $Command<
  CancelImageCreationCommandInput,
  CancelImageCreationCommandOutput,
  ImagebuilderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelImageCreationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelImageCreationCommandInput, CancelImageCreationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "CancelImageCreationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelImageCreationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelImageCreationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelImageCreationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CancelImageCreationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelImageCreationCommandOutput> {
    return deserializeAws_restJson1CancelImageCreationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
