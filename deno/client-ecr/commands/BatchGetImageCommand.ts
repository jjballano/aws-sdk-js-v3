import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient.ts";
import { BatchGetImageRequest, BatchGetImageResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1BatchGetImageCommand,
  serializeAws_json1_1BatchGetImageCommand,
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

export type BatchGetImageCommandInput = BatchGetImageRequest;
export type BatchGetImageCommandOutput = BatchGetImageResponse & __MetadataBearer;

/**
 * <p>Gets detailed information for an image. Images are specified with either an
 *                 <code>imageTag</code> or <code>imageDigest</code>.</p>
 *         <p>When an image is pulled, the BatchGetImage API is called once to retrieve the image
 *             manifest.</p>
 */
export class BatchGetImageCommand extends $Command<
  BatchGetImageCommandInput,
  BatchGetImageCommandOutput,
  ECRClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchGetImageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetImageCommandInput, BatchGetImageCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "BatchGetImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetImageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchGetImageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchGetImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetImageCommandOutput> {
    return deserializeAws_json1_1BatchGetImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
