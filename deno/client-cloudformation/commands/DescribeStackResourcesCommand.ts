import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient.ts";
import { DescribeStackResourcesInput, DescribeStackResourcesOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeStackResourcesCommand,
  serializeAws_queryDescribeStackResourcesCommand,
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

export type DescribeStackResourcesCommandInput = DescribeStackResourcesInput;
export type DescribeStackResourcesCommandOutput = DescribeStackResourcesOutput & __MetadataBearer;

/**
 * <p>Returns AWS resource descriptions for running and deleted stacks. If
 *             <code>StackName</code> is specified, all the associated resources that are part of the
 *          stack are returned. If <code>PhysicalResourceId</code> is specified, the associated
 *          resources of the stack that the resource belongs to are returned.</p>
 *          <note>
 *             <p>Only the first 100 resources will be returned. If your stack has more resources
 *             than this, you should use <code>ListStackResources</code> instead.</p>
 *          </note>
 *          <p>For deleted stacks, <code>DescribeStackResources</code> returns resource information
 *          for up to 90 days after the stack has been deleted.</p>
 *          <p>You must specify either <code>StackName</code> or <code>PhysicalResourceId</code>,
 *          but not both. In addition, you can specify <code>LogicalResourceId</code> to filter the
 *          returned result. For more information about resources, the <code>LogicalResourceId</code>
 *          and <code>PhysicalResourceId</code>, go to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/">AWS CloudFormation User
 *          Guide</a>.</p>
 *          <note>
 *             <p>A <code>ValidationError</code> is returned if you specify both
 *                <code>StackName</code> and <code>PhysicalResourceId</code> in the same
 *             request.</p>
 *          </note>
 */
export class DescribeStackResourcesCommand extends $Command<
  DescribeStackResourcesCommandInput,
  DescribeStackResourcesCommandOutput,
  CloudFormationClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeStackResourcesCommandInput) {
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
  ): Handler<DescribeStackResourcesCommandInput, DescribeStackResourcesCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DescribeStackResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeStackResourcesInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeStackResourcesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeStackResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeStackResourcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeStackResourcesCommandOutput> {
    return deserializeAws_queryDescribeStackResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
