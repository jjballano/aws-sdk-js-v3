import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient.ts";
import { DescribeDomainsRequest, DescribeDomainsResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeDomainsCommand,
  serializeAws_queryDescribeDomainsCommand,
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

export type DescribeDomainsCommandInput = DescribeDomainsRequest;
export type DescribeDomainsCommandOutput = DescribeDomainsResponse & __MetadataBearer;

/**
 * <p>Gets information about the search domains owned by this account. Can be limited to specific domains. Shows
 *       all domains by default. To get the number of searchable documents in a domain, use the console or submit a <code>matchall</code> request to your domain's search endpoint: <code>q=matchall&amp;q.parser=structured&amp;size=0</code>. For more information,
 *       see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Information about a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 */
export class DescribeDomainsCommand extends $Command<
  DescribeDomainsCommandInput,
  DescribeDomainsCommandOutput,
  CloudSearchClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDomainsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDomainsCommandInput, DescribeDomainsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "DescribeDomainsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDomainsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDomainsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDomainsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeDomainsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDomainsCommandOutput> {
    return deserializeAws_queryDescribeDomainsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
