import { ElasticInferenceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticInferenceClient.ts";
import { DescribeAcceleratorTypesRequest, DescribeAcceleratorTypesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeAcceleratorTypesCommand,
  serializeAws_restJson1DescribeAcceleratorTypesCommand,
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

export type DescribeAcceleratorTypesCommandInput = DescribeAcceleratorTypesRequest;
export type DescribeAcceleratorTypesCommandOutput = DescribeAcceleratorTypesResponse & __MetadataBearer;

/**
 * <p>
 *             Describes the accelerator types available in a given region, as well as their characteristics, such as memory and throughput.
 *         </p>
 */
export class DescribeAcceleratorTypesCommand extends $Command<
  DescribeAcceleratorTypesCommandInput,
  DescribeAcceleratorTypesCommandOutput,
  ElasticInferenceClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAcceleratorTypesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticInferenceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAcceleratorTypesCommandInput, DescribeAcceleratorTypesCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticInferenceClient";
    const commandName = "DescribeAcceleratorTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAcceleratorTypesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAcceleratorTypesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAcceleratorTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAcceleratorTypesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAcceleratorTypesCommandOutput> {
    return deserializeAws_restJson1DescribeAcceleratorTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
