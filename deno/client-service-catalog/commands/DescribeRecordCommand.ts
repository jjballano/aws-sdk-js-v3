import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient.ts";
import { DescribeRecordInput, DescribeRecordOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeRecordCommand,
  serializeAws_json1_1DescribeRecordCommand,
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

export type DescribeRecordCommandInput = DescribeRecordInput;
export type DescribeRecordCommandOutput = DescribeRecordOutput & __MetadataBearer;

/**
 * <p>Gets information about the specified request operation.</p>
 *          <p>Use this operation after calling a request operation (for example, <a>ProvisionProduct</a>,
 *          <a>TerminateProvisionedProduct</a>, or <a>UpdateProvisionedProduct</a>).
 *       </p>
 *          <note>
 *             <p>If a provisioned product was transferred to a new owner using <a>UpdateProvisionedProductProperties</a>, the new owner
 *       will be able to describe all past records for that product. The previous owner will no longer be able to describe the records, but will be able to
 *       use <a>ListRecordHistory</a> to see the product's history from when he was the owner.</p>
 *          </note>
 */
export class DescribeRecordCommand extends $Command<
  DescribeRecordCommandInput,
  DescribeRecordCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeRecordCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRecordCommandInput, DescribeRecordCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DescribeRecordCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeRecordInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeRecordOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeRecordCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeRecordCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRecordCommandOutput> {
    return deserializeAws_json1_1DescribeRecordCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
