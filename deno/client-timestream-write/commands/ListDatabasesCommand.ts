import { ServiceInputTypes, ServiceOutputTypes, TimestreamWriteClientResolvedConfig } from "../TimestreamWriteClient.ts";
import { ListDatabasesRequest, ListDatabasesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_0ListDatabasesCommand,
  serializeAws_json1_0ListDatabasesCommand,
} from "../protocols/Aws_json1_0.ts";
import { getEndpointDiscoveryPlugin } from "../../middleware-endpoint-discovery/mod.ts";
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

export interface ListDatabasesCommandInput extends ListDatabasesRequest {}
export interface ListDatabasesCommandOutput extends ListDatabasesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of your Timestream databases.
 *          Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, ListDatabasesCommand } from "../../client-timestream-write/mod.ts";
 * // const { TimestreamWriteClient, ListDatabasesCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * const client = new TimestreamWriteClient(config);
 * const command = new ListDatabasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDatabasesCommandInput} for command's `input` shape.
 * @see {@link ListDatabasesCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListDatabasesCommand extends $Command<
  ListDatabasesCommandInput,
  ListDatabasesCommandOutput,
  TimestreamWriteClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDatabasesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TimestreamWriteClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDatabasesCommandInput, ListDatabasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointDiscoveryPlugin(configuration, { clientStack, options, isDiscoveredEndpointRequired: true })
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TimestreamWriteClient";
    const commandName = "ListDatabasesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDatabasesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDatabasesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDatabasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListDatabasesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDatabasesCommandOutput> {
    return deserializeAws_json1_0ListDatabasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
