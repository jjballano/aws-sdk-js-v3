import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient.ts";
import { CreateSampleFindingsRequest, CreateSampleFindingsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateSampleFindingsCommand,
  serializeAws_restJson1CreateSampleFindingsCommand,
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

export type CreateSampleFindingsCommandInput = CreateSampleFindingsRequest;
export type CreateSampleFindingsCommandOutput = CreateSampleFindingsResponse & __MetadataBearer;

/**
 * <p>Generates example findings of types specified by the list of finding types. If 'NULL' is
 *       specified for <code>findingTypes</code>, the API generates example findings of all supported
 *       finding types.</p>
 */
export class CreateSampleFindingsCommand extends $Command<
  CreateSampleFindingsCommandInput,
  CreateSampleFindingsCommandOutput,
  GuardDutyClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSampleFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSampleFindingsCommandInput, CreateSampleFindingsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "CreateSampleFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSampleFindingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSampleFindingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSampleFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSampleFindingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSampleFindingsCommandOutput> {
    return deserializeAws_restJson1CreateSampleFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
