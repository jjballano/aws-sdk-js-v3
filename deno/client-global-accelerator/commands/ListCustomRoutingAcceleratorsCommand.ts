import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient.ts";
import { ListCustomRoutingAcceleratorsRequest, ListCustomRoutingAcceleratorsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListCustomRoutingAcceleratorsCommand,
  serializeAws_json1_1ListCustomRoutingAcceleratorsCommand,
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

export type ListCustomRoutingAcceleratorsCommandInput = ListCustomRoutingAcceleratorsRequest;
export type ListCustomRoutingAcceleratorsCommandOutput = ListCustomRoutingAcceleratorsResponse & __MetadataBearer;

/**
 * <p>List the custom routing accelerators for an AWS account. </p>
 */
export class ListCustomRoutingAcceleratorsCommand extends $Command<
  ListCustomRoutingAcceleratorsCommandInput,
  ListCustomRoutingAcceleratorsCommandOutput,
  GlobalAcceleratorClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCustomRoutingAcceleratorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlobalAcceleratorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCustomRoutingAcceleratorsCommandInput, ListCustomRoutingAcceleratorsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "ListCustomRoutingAcceleratorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCustomRoutingAcceleratorsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCustomRoutingAcceleratorsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCustomRoutingAcceleratorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCustomRoutingAcceleratorsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCustomRoutingAcceleratorsCommandOutput> {
    return deserializeAws_json1_1ListCustomRoutingAcceleratorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
