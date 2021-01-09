import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient.ts";
import { DeleteWorkspaceImageRequest, DeleteWorkspaceImageResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteWorkspaceImageCommand,
  serializeAws_json1_1DeleteWorkspaceImageCommand,
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

export type DeleteWorkspaceImageCommandInput = DeleteWorkspaceImageRequest;
export type DeleteWorkspaceImageCommandOutput = DeleteWorkspaceImageResult & __MetadataBearer;

/**
 * <p>Deletes the specified image from your account. To delete an image, you must first delete
 *          any bundles that are associated with the image and unshare the image if it is shared with
 *          other accounts. </p>
 */
export class DeleteWorkspaceImageCommand extends $Command<
  DeleteWorkspaceImageCommandInput,
  DeleteWorkspaceImageCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteWorkspaceImageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteWorkspaceImageCommandInput, DeleteWorkspaceImageCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "DeleteWorkspaceImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteWorkspaceImageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteWorkspaceImageResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteWorkspaceImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteWorkspaceImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteWorkspaceImageCommandOutput> {
    return deserializeAws_json1_1DeleteWorkspaceImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
