import { HealthLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthLakeClient.ts";
import { ListFHIRDatastoresRequest, ListFHIRDatastoresResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_0ListFHIRDatastoresCommand,
  serializeAws_json1_0ListFHIRDatastoresCommand,
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

export type ListFHIRDatastoresCommandInput = ListFHIRDatastoresRequest;
export type ListFHIRDatastoresCommandOutput = ListFHIRDatastoresResponse & __MetadataBearer;

/**
 * <p>Lists all FHIR datastores that are in the user’s account, regardless of datastore
 *          status.</p>
 */
export class ListFHIRDatastoresCommand extends $Command<
  ListFHIRDatastoresCommandInput,
  ListFHIRDatastoresCommandOutput,
  HealthLakeClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFHIRDatastoresCommandInput) {
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
  ): Handler<ListFHIRDatastoresCommandInput, ListFHIRDatastoresCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthLakeClient";
    const commandName = "ListFHIRDatastoresCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFHIRDatastoresRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFHIRDatastoresResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFHIRDatastoresCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListFHIRDatastoresCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFHIRDatastoresCommandOutput> {
    return deserializeAws_json1_0ListFHIRDatastoresCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
