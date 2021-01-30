import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient.ts";
import { ListCuratedEnvironmentImagesInput, ListCuratedEnvironmentImagesOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListCuratedEnvironmentImagesCommand,
  serializeAws_json1_1ListCuratedEnvironmentImagesCommand,
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

export type ListCuratedEnvironmentImagesCommandInput = ListCuratedEnvironmentImagesInput;
export type ListCuratedEnvironmentImagesCommandOutput = ListCuratedEnvironmentImagesOutput & __MetadataBearer;

/**
 * <p>Gets information about Docker images that are managed by AWS CodeBuild.</p>
 */
export class ListCuratedEnvironmentImagesCommand extends $Command<
  ListCuratedEnvironmentImagesCommandInput,
  ListCuratedEnvironmentImagesCommandOutput,
  CodeBuildClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCuratedEnvironmentImagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeBuildClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCuratedEnvironmentImagesCommandInput, ListCuratedEnvironmentImagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "ListCuratedEnvironmentImagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCuratedEnvironmentImagesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListCuratedEnvironmentImagesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCuratedEnvironmentImagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCuratedEnvironmentImagesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCuratedEnvironmentImagesCommandOutput> {
    return deserializeAws_json1_1ListCuratedEnvironmentImagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
