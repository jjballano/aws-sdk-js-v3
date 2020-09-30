
import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient.ts";
import { CreateReceiptRuleSetRequest, CreateReceiptRuleSetResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryCreateReceiptRuleSetCommand,
  serializeAws_queryCreateReceiptRuleSetCommand,
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

export type CreateReceiptRuleSetCommandInput = CreateReceiptRuleSetRequest;
export type CreateReceiptRuleSetCommandOutput = CreateReceiptRuleSetResponse & __MetadataBearer;

export class CreateReceiptRuleSetCommand extends $Command<
  CreateReceiptRuleSetCommandInput,
  CreateReceiptRuleSetCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateReceiptRuleSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateReceiptRuleSetCommandInput, CreateReceiptRuleSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreateReceiptRuleSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateReceiptRuleSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateReceiptRuleSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateReceiptRuleSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateReceiptRuleSetCommandOutput> {
    return deserializeAws_queryCreateReceiptRuleSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
