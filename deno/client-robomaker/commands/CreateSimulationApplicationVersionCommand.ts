import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient.ts";
import {
  CreateSimulationApplicationVersionRequest,
  CreateSimulationApplicationVersionResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateSimulationApplicationVersionCommand,
  serializeAws_restJson1CreateSimulationApplicationVersionCommand,
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

export type CreateSimulationApplicationVersionCommandInput = CreateSimulationApplicationVersionRequest;
export type CreateSimulationApplicationVersionCommandOutput = CreateSimulationApplicationVersionResponse &
  __MetadataBearer;

/**
 * <p>Creates a simulation application with a specific revision id.</p>
 */
export class CreateSimulationApplicationVersionCommand extends $Command<
  CreateSimulationApplicationVersionCommandInput,
  CreateSimulationApplicationVersionCommandOutput,
  RoboMakerClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSimulationApplicationVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSimulationApplicationVersionCommandInput, CreateSimulationApplicationVersionCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "CreateSimulationApplicationVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSimulationApplicationVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSimulationApplicationVersionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateSimulationApplicationVersionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSimulationApplicationVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateSimulationApplicationVersionCommandOutput> {
    return deserializeAws_restJson1CreateSimulationApplicationVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
