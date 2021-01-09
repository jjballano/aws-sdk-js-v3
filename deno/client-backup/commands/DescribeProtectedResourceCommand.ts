import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient.ts";
import { DescribeProtectedResourceInput, DescribeProtectedResourceOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeProtectedResourceCommand,
  serializeAws_restJson1DescribeProtectedResourceCommand,
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

export type DescribeProtectedResourceCommandInput = DescribeProtectedResourceInput;
export type DescribeProtectedResourceCommandOutput = DescribeProtectedResourceOutput & __MetadataBearer;

/**
 * <p>Returns information about a saved resource, including the last time it was backed up,
 *          its Amazon Resource Name (ARN), and the AWS service type of the saved resource.</p>
 */
export class DescribeProtectedResourceCommand extends $Command<
  DescribeProtectedResourceCommandInput,
  DescribeProtectedResourceCommandOutput,
  BackupClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeProtectedResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeProtectedResourceCommandInput, DescribeProtectedResourceCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "DescribeProtectedResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeProtectedResourceInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeProtectedResourceOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeProtectedResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeProtectedResourceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeProtectedResourceCommandOutput> {
    return deserializeAws_restJson1DescribeProtectedResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
