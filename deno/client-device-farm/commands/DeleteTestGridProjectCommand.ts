import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient.ts";
import { DeleteTestGridProjectRequest, DeleteTestGridProjectResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteTestGridProjectCommand,
  serializeAws_json1_1DeleteTestGridProjectCommand,
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

export type DeleteTestGridProjectCommandInput = DeleteTestGridProjectRequest;
export type DeleteTestGridProjectCommandOutput = DeleteTestGridProjectResult & __MetadataBearer;

/**
 * <p> Deletes a Selenium testing project and all content generated under it. </p>
 *          <important>
 *             <p>You cannot undo this operation.</p>
 *          </important>
 *          <note>
 *             <p>You cannot delete a project if it has active sessions.</p>
 *          </note>
 */
export class DeleteTestGridProjectCommand extends $Command<
  DeleteTestGridProjectCommandInput,
  DeleteTestGridProjectCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteTestGridProjectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteTestGridProjectCommandInput, DeleteTestGridProjectCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "DeleteTestGridProjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTestGridProjectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteTestGridProjectResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteTestGridProjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteTestGridProjectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTestGridProjectCommandOutput> {
    return deserializeAws_json1_1DeleteTestGridProjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
