import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient.ts";
import { DescribeTagsMessage, TaggedResourceListMessage } from "../models/models_0.ts";
import { deserializeAws_queryDescribeTagsCommand, serializeAws_queryDescribeTagsCommand } from "../protocols/Aws_query.ts";
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

export type DescribeTagsCommandInput = DescribeTagsMessage;
export type DescribeTagsCommandOutput = TaggedResourceListMessage & __MetadataBearer;

/**
 * <p>Returns a list of tags. You can return tags from a specific resource by specifying
 *             an ARN, or you can return all tags for a given type of resource, such as clusters,
 *             snapshots, and so on.</p>
 *         <p>The following are limitations for <code>DescribeTags</code>: </p>
 *         <ul>
 *             <li>
 *                 <p>You cannot specify an ARN and a resource-type value together in the same
 *                     request.</p>
 *             </li>
 *             <li>
 *                 <p>You cannot use the <code>MaxRecords</code> and <code>Marker</code>
 *                     parameters together with the ARN parameter.</p>
 *             </li>
 *             <li>
 *                 <p>The <code>MaxRecords</code> parameter can be a range from 10 to 50 results
 *                     to return in a request.</p>
 *             </li>
 *          </ul>
 *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 *             all resources that match any combination of the specified keys and values. For example,
 *             if you have <code>owner</code> and <code>environment</code> for tag keys, and
 *                 <code>admin</code> and <code>test</code> for tag values, all resources that have any
 *             combination of those values are returned.</p>
 *         <p>If both tag keys and values are omitted from the request, resources are returned
 *             regardless of whether they have tag keys or values associated with them.</p>
 */
export class DescribeTagsCommand extends $Command<
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput,
  RedshiftClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTagsCommandInput, DescribeTagsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTagsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: TaggedResourceListMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTagsCommandOutput> {
    return deserializeAws_queryDescribeTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
