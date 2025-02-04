import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient.ts";
import { ListCrawlersRequest, ListCrawlersResponse } from "../models/models_1.ts";
import {
  deserializeAws_json1_1ListCrawlersCommand,
  serializeAws_json1_1ListCrawlersCommand,
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

export interface ListCrawlersCommandInput extends ListCrawlersRequest {}
export interface ListCrawlersCommandOutput extends ListCrawlersResponse, __MetadataBearer {}

/**
 * <p>Retrieves the names of all crawler resources in this Amazon Web Services account, or the
 *       resources with the specified tag. This operation allows you to see which
 *       resources are available in your account, and their names.</p>
 *
 *          <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on
 *       the response so that tagged resources can be retrieved as a group. If you choose to use tags
 *       filtering, only resources with the tag are retrieved.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListCrawlersCommand } from "../../client-glue/mod.ts";
 * // const { GlueClient, ListCrawlersCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new ListCrawlersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCrawlersCommandInput} for command's `input` shape.
 * @see {@link ListCrawlersCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListCrawlersCommand extends $Command<
  ListCrawlersCommandInput,
  ListCrawlersCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCrawlersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCrawlersCommandInput, ListCrawlersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "ListCrawlersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCrawlersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCrawlersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCrawlersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCrawlersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCrawlersCommandOutput> {
    return deserializeAws_json1_1ListCrawlersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
