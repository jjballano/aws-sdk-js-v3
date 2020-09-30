
import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient.ts";
import { ListTypedLinkFacetAttributesRequest, ListTypedLinkFacetAttributesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListTypedLinkFacetAttributesCommand,
  serializeAws_restJson1ListTypedLinkFacetAttributesCommand,
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

export type ListTypedLinkFacetAttributesCommandInput = ListTypedLinkFacetAttributesRequest;
export type ListTypedLinkFacetAttributesCommandOutput = ListTypedLinkFacetAttributesResponse & __MetadataBearer;

export class ListTypedLinkFacetAttributesCommand extends $Command<
  ListTypedLinkFacetAttributesCommandInput,
  ListTypedLinkFacetAttributesCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTypedLinkFacetAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTypedLinkFacetAttributesCommandInput, ListTypedLinkFacetAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListTypedLinkFacetAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTypedLinkFacetAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTypedLinkFacetAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListTypedLinkFacetAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListTypedLinkFacetAttributesCommandOutput> {
    return deserializeAws_restJson1ListTypedLinkFacetAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
