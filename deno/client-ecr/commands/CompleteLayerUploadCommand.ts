import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient.ts";
import { CompleteLayerUploadRequest, CompleteLayerUploadResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CompleteLayerUploadCommand,
  serializeAws_json1_1CompleteLayerUploadCommand,
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

export type CompleteLayerUploadCommandInput = CompleteLayerUploadRequest;
export type CompleteLayerUploadCommandOutput = CompleteLayerUploadResponse & __MetadataBearer;

/**
 * <p>Informs Amazon ECR that the image layer upload has completed for a specified registry,
 *             repository name, and upload ID. You can optionally provide a <code>sha256</code> digest
 *             of the image layer for data validation purposes.</p>
 *         <p>When an image is pushed, the CompleteLayerUpload API is called once per each new image
 *             layer to verify that the upload has completed.</p>
 *          <note>
 *             <p>This operation is used by the Amazon ECR proxy and is not generally used by
 *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
 *          </note>
 */
export class CompleteLayerUploadCommand extends $Command<
  CompleteLayerUploadCommandInput,
  CompleteLayerUploadCommandOutput,
  ECRClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CompleteLayerUploadCommandInput) {
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
  ): Handler<CompleteLayerUploadCommandInput, CompleteLayerUploadCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "CompleteLayerUploadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CompleteLayerUploadRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CompleteLayerUploadResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CompleteLayerUploadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CompleteLayerUploadCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CompleteLayerUploadCommandOutput> {
    return deserializeAws_json1_1CompleteLayerUploadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
