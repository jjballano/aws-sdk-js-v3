import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient.ts";
import { ListStorageLensConfigurationsRequest, ListStorageLensConfigurationsResult } from "../models/models_0.ts";
import {
  deserializeAws_restXmlListStorageLensConfigurationsCommand,
  serializeAws_restXmlListStorageLensConfigurationsCommand,
} from "../protocols/Aws_restXml.ts";
import { getProcessArnablesPlugin } from "../../middleware-sdk-s3-control/mod.ts";
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

export type ListStorageLensConfigurationsCommandInput = ListStorageLensConfigurationsRequest;
export type ListStorageLensConfigurationsCommandOutput = ListStorageLensConfigurationsResult & __MetadataBearer;

/**
 * <p>Gets a list of Amazon S3 Storage Lens configurations. For more information about S3 Storage Lens, see
 *          <a href="https://docs.aws.amazon.com/https:/docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Working with Amazon S3 Storage Lens</a> in the
 *          <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 *          <note>
 *             <p>To use this action,
 *          you must have permission to perform the <code>s3:ListStorageLensConfigurations</code> action. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html#storage_lens_IAM">Setting permissions to use Amazon S3 Storage Lens</a> in the
 *          <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 *          </note>
 */
export class ListStorageLensConfigurationsCommand extends $Command<
  ListStorageLensConfigurationsCommandInput,
  ListStorageLensConfigurationsCommandOutput,
  S3ControlClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListStorageLensConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStorageLensConfigurationsCommandInput, ListStorageLensConfigurationsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.middlewareStack.use(getProcessArnablesPlugin(configuration));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "ListStorageLensConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListStorageLensConfigurationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListStorageLensConfigurationsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListStorageLensConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListStorageLensConfigurationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListStorageLensConfigurationsCommandOutput> {
    return deserializeAws_restXmlListStorageLensConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
