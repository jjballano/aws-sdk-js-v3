import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client.ts";
import { ListReusableDelegationSetsRequest, ListReusableDelegationSetsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restXmlListReusableDelegationSetsCommand,
  serializeAws_restXmlListReusableDelegationSetsCommand,
} from "../protocols/Aws_restXml.ts";
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

export type ListReusableDelegationSetsCommandInput = ListReusableDelegationSetsRequest;
export type ListReusableDelegationSetsCommandOutput = ListReusableDelegationSetsResponse & __MetadataBearer;

/**
 * <p>Retrieves a list of the reusable delegation sets that are associated with the current AWS account.</p>
 */
export class ListReusableDelegationSetsCommand extends $Command<
  ListReusableDelegationSetsCommandInput,
  ListReusableDelegationSetsCommandOutput,
  Route53ClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListReusableDelegationSetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListReusableDelegationSetsCommandInput, ListReusableDelegationSetsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ListReusableDelegationSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListReusableDelegationSetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListReusableDelegationSetsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListReusableDelegationSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListReusableDelegationSetsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListReusableDelegationSetsCommandOutput> {
    return deserializeAws_restXmlListReusableDelegationSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
