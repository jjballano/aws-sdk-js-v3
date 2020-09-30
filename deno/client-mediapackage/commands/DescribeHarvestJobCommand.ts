
import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient.ts";
import { DescribeHarvestJobRequest, DescribeHarvestJobResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeHarvestJobCommand,
  serializeAws_restJson1DescribeHarvestJobCommand,
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

export type DescribeHarvestJobCommandInput = DescribeHarvestJobRequest;
export type DescribeHarvestJobCommandOutput = DescribeHarvestJobResponse & __MetadataBearer;

export class DescribeHarvestJobCommand extends $Command<
  DescribeHarvestJobCommandInput,
  DescribeHarvestJobCommandOutput,
  MediaPackageClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeHarvestJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaPackageClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeHarvestJobCommandInput, DescribeHarvestJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DescribeHarvestJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeHarvestJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeHarvestJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeHarvestJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeHarvestJobCommandOutput> {
    return deserializeAws_restJson1DescribeHarvestJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
