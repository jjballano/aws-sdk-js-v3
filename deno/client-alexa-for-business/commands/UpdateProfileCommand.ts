import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient.ts";
import { UpdateProfileRequest, UpdateProfileResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdateProfileCommand,
  serializeAws_json1_1UpdateProfileCommand,
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

export type UpdateProfileCommandInput = UpdateProfileRequest;
export type UpdateProfileCommandOutput = UpdateProfileResponse & __MetadataBearer;

/**
 * <p>Updates an existing room profile by room profile ARN.</p>
 */
export class UpdateProfileCommand extends $Command<
  UpdateProfileCommandInput,
  UpdateProfileCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateProfileCommandInput, UpdateProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "UpdateProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateProfileResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateProfileCommandOutput> {
    return deserializeAws_json1_1UpdateProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
