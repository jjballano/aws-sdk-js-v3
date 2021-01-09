import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient.ts";
import { DeleteTopicInput } from "../models/models_0.ts";
import { deserializeAws_queryDeleteTopicCommand, serializeAws_queryDeleteTopicCommand } from "../protocols/Aws_query.ts";
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

export type DeleteTopicCommandInput = DeleteTopicInput;
export type DeleteTopicCommandOutput = __MetadataBearer;

/**
 * <p>Deletes a topic and all its subscriptions. Deleting a topic might prevent some
 *             messages previously sent to the topic from being delivered to subscribers. This action
 *             is idempotent, so deleting a topic that does not exist does not result in an
 *             error.</p>
 */
export class DeleteTopicCommand extends $Command<
  DeleteTopicCommandInput,
  DeleteTopicCommandOutput,
  SNSClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteTopicCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteTopicCommandInput, DeleteTopicCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "DeleteTopicCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTopicInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteTopicCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteTopicCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTopicCommandOutput> {
    return deserializeAws_queryDeleteTopicCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
