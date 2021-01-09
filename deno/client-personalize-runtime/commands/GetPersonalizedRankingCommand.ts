import {
  PersonalizeRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PersonalizeRuntimeClient.ts";
import { GetPersonalizedRankingRequest, GetPersonalizedRankingResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetPersonalizedRankingCommand,
  serializeAws_restJson1GetPersonalizedRankingCommand,
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

export type GetPersonalizedRankingCommandInput = GetPersonalizedRankingRequest;
export type GetPersonalizedRankingCommandOutput = GetPersonalizedRankingResponse & __MetadataBearer;

/**
 * <p>Re-ranks a list of recommended items for the given user. The first item in the list is
 *       deemed the most likely item to be of interest to the user.</p>
 *          <note>
 *             <p>The solution backing the campaign must have been created using a recipe of type
 *         PERSONALIZED_RANKING.</p>
 *          </note>
 */
export class GetPersonalizedRankingCommand extends $Command<
  GetPersonalizedRankingCommandInput,
  GetPersonalizedRankingCommandOutput,
  PersonalizeRuntimeClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPersonalizedRankingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeRuntimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPersonalizedRankingCommandInput, GetPersonalizedRankingCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeRuntimeClient";
    const commandName = "GetPersonalizedRankingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPersonalizedRankingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetPersonalizedRankingResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPersonalizedRankingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetPersonalizedRankingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPersonalizedRankingCommandOutput> {
    return deserializeAws_restJson1GetPersonalizedRankingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
