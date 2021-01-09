import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient.ts";
import { ListApprovalRuleTemplatesInput, ListApprovalRuleTemplatesOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListApprovalRuleTemplatesCommand,
  serializeAws_json1_1ListApprovalRuleTemplatesCommand,
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

export type ListApprovalRuleTemplatesCommandInput = ListApprovalRuleTemplatesInput;
export type ListApprovalRuleTemplatesCommandOutput = ListApprovalRuleTemplatesOutput & __MetadataBearer;

/**
 * <p>Lists all approval rule templates in the specified AWS Region in your AWS account. If
 *             an AWS Region is not specified, the AWS Region where you are signed in is used.</p>
 */
export class ListApprovalRuleTemplatesCommand extends $Command<
  ListApprovalRuleTemplatesCommandInput,
  ListApprovalRuleTemplatesCommandOutput,
  CodeCommitClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListApprovalRuleTemplatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListApprovalRuleTemplatesCommandInput, ListApprovalRuleTemplatesCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "ListApprovalRuleTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListApprovalRuleTemplatesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListApprovalRuleTemplatesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListApprovalRuleTemplatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListApprovalRuleTemplatesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListApprovalRuleTemplatesCommandOutput> {
    return deserializeAws_json1_1ListApprovalRuleTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
