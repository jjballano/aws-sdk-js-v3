import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient.ts";
import { ListAutomaticTapeCreationPoliciesInput, ListAutomaticTapeCreationPoliciesOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListAutomaticTapeCreationPoliciesCommand,
  serializeAws_json1_1ListAutomaticTapeCreationPoliciesCommand,
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

export type ListAutomaticTapeCreationPoliciesCommandInput = ListAutomaticTapeCreationPoliciesInput;
export type ListAutomaticTapeCreationPoliciesCommandOutput = ListAutomaticTapeCreationPoliciesOutput & __MetadataBearer;

/**
 * <p>Lists the automatic tape creation policies for a gateway. If there are no automatic tape
 *          creation policies for the gateway, it returns an empty list.</p>
 *
 *          <p>This operation is only supported for tape gateways.</p>
 */
export class ListAutomaticTapeCreationPoliciesCommand extends $Command<
  ListAutomaticTapeCreationPoliciesCommandInput,
  ListAutomaticTapeCreationPoliciesCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAutomaticTapeCreationPoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAutomaticTapeCreationPoliciesCommandInput, ListAutomaticTapeCreationPoliciesCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "ListAutomaticTapeCreationPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAutomaticTapeCreationPoliciesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListAutomaticTapeCreationPoliciesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListAutomaticTapeCreationPoliciesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAutomaticTapeCreationPoliciesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAutomaticTapeCreationPoliciesCommandOutput> {
    return deserializeAws_json1_1ListAutomaticTapeCreationPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
