import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient.ts";
import { ListDeploymentConfigsInput, ListDeploymentConfigsOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListDeploymentConfigsCommand,
  serializeAws_json1_1ListDeploymentConfigsCommand,
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

export type ListDeploymentConfigsCommandInput = ListDeploymentConfigsInput;
export type ListDeploymentConfigsCommandOutput = ListDeploymentConfigsOutput & __MetadataBearer;

/**
 * <p>Lists the deployment configurations with the IAM user or AWS account.</p>
 */
export class ListDeploymentConfigsCommand extends $Command<
  ListDeploymentConfigsCommandInput,
  ListDeploymentConfigsCommandOutput,
  CodeDeployClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDeploymentConfigsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDeploymentConfigsCommandInput, ListDeploymentConfigsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "ListDeploymentConfigsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDeploymentConfigsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListDeploymentConfigsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDeploymentConfigsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDeploymentConfigsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDeploymentConfigsCommandOutput> {
    return deserializeAws_json1_1ListDeploymentConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
