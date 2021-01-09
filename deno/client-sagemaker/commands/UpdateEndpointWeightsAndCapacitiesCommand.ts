import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { UpdateEndpointWeightsAndCapacitiesInput, UpdateEndpointWeightsAndCapacitiesOutput } from "../models/models_2.ts";
import {
  deserializeAws_json1_1UpdateEndpointWeightsAndCapacitiesCommand,
  serializeAws_json1_1UpdateEndpointWeightsAndCapacitiesCommand,
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

export type UpdateEndpointWeightsAndCapacitiesCommandInput = UpdateEndpointWeightsAndCapacitiesInput;
export type UpdateEndpointWeightsAndCapacitiesCommandOutput = UpdateEndpointWeightsAndCapacitiesOutput &
  __MetadataBearer;

/**
 * <p>Updates variant weight of one or more variants associated with an existing
 *             endpoint, or capacity of one variant associated with an existing endpoint. When it
 *             receives the request, Amazon SageMaker sets the endpoint status to <code>Updating</code>. After
 *             updating the endpoint, it sets the status to <code>InService</code>. To check the status
 *             of an endpoint, use the <a>DescribeEndpoint</a> API. </p>
 */
export class UpdateEndpointWeightsAndCapacitiesCommand extends $Command<
  UpdateEndpointWeightsAndCapacitiesCommandInput,
  UpdateEndpointWeightsAndCapacitiesCommandOutput,
  SageMakerClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateEndpointWeightsAndCapacitiesCommandInput) {
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
  ): Handler<UpdateEndpointWeightsAndCapacitiesCommandInput, UpdateEndpointWeightsAndCapacitiesCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "UpdateEndpointWeightsAndCapacitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateEndpointWeightsAndCapacitiesInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateEndpointWeightsAndCapacitiesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateEndpointWeightsAndCapacitiesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateEndpointWeightsAndCapacitiesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateEndpointWeightsAndCapacitiesCommandOutput> {
    return deserializeAws_json1_1UpdateEndpointWeightsAndCapacitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
