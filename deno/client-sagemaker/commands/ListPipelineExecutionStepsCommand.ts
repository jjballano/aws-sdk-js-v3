import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { ListPipelineExecutionStepsRequest, ListPipelineExecutionStepsResponse } from "../models/models_2.ts";
import {
  deserializeAws_json1_1ListPipelineExecutionStepsCommand,
  serializeAws_json1_1ListPipelineExecutionStepsCommand,
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

export type ListPipelineExecutionStepsCommandInput = ListPipelineExecutionStepsRequest;
export type ListPipelineExecutionStepsCommandOutput = ListPipelineExecutionStepsResponse & __MetadataBearer;

/**
 * <p>Gets a list of <code>PipeLineExecutionStep</code> objects.</p>
 */
export class ListPipelineExecutionStepsCommand extends $Command<
  ListPipelineExecutionStepsCommandInput,
  ListPipelineExecutionStepsCommandOutput,
  SageMakerClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPipelineExecutionStepsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPipelineExecutionStepsCommandInput, ListPipelineExecutionStepsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListPipelineExecutionStepsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPipelineExecutionStepsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPipelineExecutionStepsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPipelineExecutionStepsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListPipelineExecutionStepsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPipelineExecutionStepsCommandOutput> {
    return deserializeAws_json1_1ListPipelineExecutionStepsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
