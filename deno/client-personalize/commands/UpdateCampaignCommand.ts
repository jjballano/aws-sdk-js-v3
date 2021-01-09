import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient.ts";
import { UpdateCampaignRequest, UpdateCampaignResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdateCampaignCommand,
  serializeAws_json1_1UpdateCampaignCommand,
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

export type UpdateCampaignCommandInput = UpdateCampaignRequest;
export type UpdateCampaignCommandOutput = UpdateCampaignResponse & __MetadataBearer;

/**
 * <p>Updates a campaign by either deploying a new solution or changing the value of the
 *       campaign's <code>minProvisionedTPS</code> parameter.</p>
 *          <p>To update a campaign, the campaign status must be ACTIVE or CREATE FAILED.
 *       Check the campaign status using the <a>DescribeCampaign</a> API.</p>
 *          <note>
 *             <p>You must wait until the <code>status</code> of the
 *         updated campaign is <code>ACTIVE</code> before asking the campaign for recommendations.</p>
 *          </note>
 *          <p>For more information on campaigns, see <a>CreateCampaign</a>.</p>
 */
export class UpdateCampaignCommand extends $Command<
  UpdateCampaignCommandInput,
  UpdateCampaignCommandOutput,
  PersonalizeClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateCampaignCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateCampaignCommandInput, UpdateCampaignCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "UpdateCampaignCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateCampaignRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateCampaignResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateCampaignCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateCampaignCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateCampaignCommandOutput> {
    return deserializeAws_json1_1UpdateCampaignCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
