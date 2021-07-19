import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import { PutRetentionSettingsRequest, PutRetentionSettingsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1PutRetentionSettingsCommand,
  serializeAws_restJson1PutRetentionSettingsCommand,
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

export interface PutRetentionSettingsCommandInput extends PutRetentionSettingsRequest {}
export interface PutRetentionSettingsCommandOutput extends PutRetentionSettingsResponse, __MetadataBearer {}

/**
 * <p>
 * Puts retention settings for the specified Amazon Chime Enterprise account. We recommend using AWS CloudTrail to monitor usage of this API for your account. For more information, see
 * <a href="https://docs.aws.amazon.com/chime/latest/ag/cloudtrail.html">Logging Amazon Chime API Calls with AWS CloudTrail</a>
 * in the <i>Amazon Chime Administration Guide</i>.</p>
 *
 *          <p>
 * To turn off existing retention settings, remove the number of days from the corresponding
 * <b>RetentionDays</b>
 * field in the
 * <b>RetentionSettings</b>
 * object. For more information about retention settings, see
 * <a href="https://docs.aws.amazon.com/chime/latest/ag/chat-retention.html">Managing Chat Retention Policies</a>
 * in the <i>Amazon Chime Administration Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, PutRetentionSettingsCommand } from "../../client-chime/mod.ts";
 * // const { ChimeClient, PutRetentionSettingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new PutRetentionSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRetentionSettingsCommandInput} for command's `input` shape.
 * @see {@link PutRetentionSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutRetentionSettingsCommand extends $Command<
  PutRetentionSettingsCommandInput,
  PutRetentionSettingsCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutRetentionSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRetentionSettingsCommandInput, PutRetentionSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "PutRetentionSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutRetentionSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutRetentionSettingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutRetentionSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutRetentionSettingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutRetentionSettingsCommandOutput> {
    return deserializeAws_restJson1PutRetentionSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
