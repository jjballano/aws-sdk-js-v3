
import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient.ts";
import {
  ListWebsiteCertificateAuthoritiesRequest,
  ListWebsiteCertificateAuthoritiesResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListWebsiteCertificateAuthoritiesCommand,
  serializeAws_restJson1ListWebsiteCertificateAuthoritiesCommand,
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

export type ListWebsiteCertificateAuthoritiesCommandInput = ListWebsiteCertificateAuthoritiesRequest;
export type ListWebsiteCertificateAuthoritiesCommandOutput = ListWebsiteCertificateAuthoritiesResponse &
  __MetadataBearer;

export class ListWebsiteCertificateAuthoritiesCommand extends $Command<
  ListWebsiteCertificateAuthoritiesCommandInput,
  ListWebsiteCertificateAuthoritiesCommandOutput,
  WorkLinkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListWebsiteCertificateAuthoritiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkLinkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListWebsiteCertificateAuthoritiesCommandInput, ListWebsiteCertificateAuthoritiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListWebsiteCertificateAuthoritiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListWebsiteCertificateAuthoritiesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListWebsiteCertificateAuthoritiesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListWebsiteCertificateAuthoritiesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListWebsiteCertificateAuthoritiesCommandOutput> {
    return deserializeAws_restJson1ListWebsiteCertificateAuthoritiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
