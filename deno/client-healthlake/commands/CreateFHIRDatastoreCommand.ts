import { HealthLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthLakeClient.ts";
import { CreateFHIRDatastoreRequest, CreateFHIRDatastoreResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_0CreateFHIRDatastoreCommand,
  serializeAws_json1_0CreateFHIRDatastoreCommand,
} from "../protocols/Aws_json1_0.ts";
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

export type CreateFHIRDatastoreCommandInput = CreateFHIRDatastoreRequest;
export type CreateFHIRDatastoreCommandOutput = CreateFHIRDatastoreResponse & __MetadataBearer;

/**
 * <p>Creates a datastore that can ingest and export FHIR data.</p>
 */
export class CreateFHIRDatastoreCommand extends $Command<
  CreateFHIRDatastoreCommandInput,
  CreateFHIRDatastoreCommandOutput,
  HealthLakeClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateFHIRDatastoreCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HealthLakeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateFHIRDatastoreCommandInput, CreateFHIRDatastoreCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthLakeClient";
    const commandName = "CreateFHIRDatastoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFHIRDatastoreRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateFHIRDatastoreResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFHIRDatastoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateFHIRDatastoreCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFHIRDatastoreCommandOutput> {
    return deserializeAws_json1_0CreateFHIRDatastoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
