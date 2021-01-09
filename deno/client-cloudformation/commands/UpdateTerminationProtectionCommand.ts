import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient.ts";
import { UpdateTerminationProtectionInput, UpdateTerminationProtectionOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryUpdateTerminationProtectionCommand,
  serializeAws_queryUpdateTerminationProtectionCommand,
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

export type UpdateTerminationProtectionCommandInput = UpdateTerminationProtectionInput;
export type UpdateTerminationProtectionCommandOutput = UpdateTerminationProtectionOutput & __MetadataBearer;

/**
 * <p>Updates termination protection for the specified stack. If a user attempts to delete
 *          a stack with termination protection enabled, the operation fails and the stack remains
 *          unchanged. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protecting a
 *             Stack From Being Deleted</a> in the <i>AWS CloudFormation User Guide</i>.</p>
 *          <p> For <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested
 *             stacks</a>, termination protection is set on the root stack and cannot be changed
 *          directly on the nested stack.</p>
 */
export class UpdateTerminationProtectionCommand extends $Command<
  UpdateTerminationProtectionCommandInput,
  UpdateTerminationProtectionCommandOutput,
  CloudFormationClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateTerminationProtectionCommandInput) {
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
  ): Handler<UpdateTerminationProtectionCommandInput, UpdateTerminationProtectionCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "UpdateTerminationProtectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateTerminationProtectionInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateTerminationProtectionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateTerminationProtectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateTerminationProtectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateTerminationProtectionCommandOutput> {
    return deserializeAws_queryUpdateTerminationProtectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
