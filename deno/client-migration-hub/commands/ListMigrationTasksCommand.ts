import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient.ts";
import { ListMigrationTasksRequest, ListMigrationTasksResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListMigrationTasksCommand,
  serializeAws_json1_1ListMigrationTasksCommand,
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

export type ListMigrationTasksCommandInput = ListMigrationTasksRequest;
export type ListMigrationTasksCommandOutput = ListMigrationTasksResult & __MetadataBearer;

/**
 * <p>Lists all, or filtered by resource name, migration tasks associated with the user
 *          account making this call. This API has the following traits:</p>
 *          <ul>
 *             <li>
 *                <p>Can show a summary list of the most recent migration tasks.</p>
 *             </li>
 *             <li>
 *                <p>Can show a summary list of migration tasks associated with a given discovered
 *                resource.</p>
 *             </li>
 *             <li>
 *                <p>Lists migration tasks in a paginated interface.</p>
 *             </li>
 *          </ul>
 */
export class ListMigrationTasksCommand extends $Command<
  ListMigrationTasksCommandInput,
  ListMigrationTasksCommandOutput,
  MigrationHubClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListMigrationTasksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMigrationTasksCommandInput, ListMigrationTasksCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubClient";
    const commandName = "ListMigrationTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMigrationTasksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListMigrationTasksResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMigrationTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListMigrationTasksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMigrationTasksCommandOutput> {
    return deserializeAws_json1_1ListMigrationTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
