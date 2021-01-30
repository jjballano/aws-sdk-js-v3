import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient.ts";
import { ExecuteChangeSetInput, ExecuteChangeSetOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryExecuteChangeSetCommand,
  serializeAws_queryExecuteChangeSetCommand,
} from "../protocols/Aws_query.ts";
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

export type ExecuteChangeSetCommandInput = ExecuteChangeSetInput;
export type ExecuteChangeSetCommandOutput = ExecuteChangeSetOutput & __MetadataBearer;

/**
 * <p>Updates a stack using the input information that was provided when the specified
 *          change set was created. After the call successfully completes, AWS CloudFormation starts
 *          updating the stack. Use the <a>DescribeStacks</a> action to view the status of
 *          the update.</p>
 *          <p>When you execute a change set, AWS CloudFormation deletes all other change sets
 *          associated with the stack because they aren't valid for the updated stack.</p>
 *          <p>If a stack policy is associated with the stack, AWS CloudFormation enforces the
 *          policy during the update. You can't specify a temporary stack policy that overrides the
 *          current policy.</p>
 *          <p>To create a change set for the entire stack hierachy, <code>IncludeNestedStacks</code>
 *          must have been set to <code>True</code>.</p>
 */
export class ExecuteChangeSetCommand extends $Command<
  ExecuteChangeSetCommandInput,
  ExecuteChangeSetCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ExecuteChangeSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExecuteChangeSetCommandInput, ExecuteChangeSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "ExecuteChangeSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExecuteChangeSetInput.filterSensitiveLog,
      outputFilterSensitiveLog: ExecuteChangeSetOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExecuteChangeSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryExecuteChangeSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExecuteChangeSetCommandOutput> {
    return deserializeAws_queryExecuteChangeSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
