import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient.ts";
import { TransactGetItemsInput, TransactGetItemsOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_0TransactGetItemsCommand,
  serializeAws_json1_0TransactGetItemsCommand,
} from "../protocols/Aws_json1_0.ts";
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

export type TransactGetItemsCommandInput = TransactGetItemsInput;
export type TransactGetItemsCommandOutput = TransactGetItemsOutput & __MetadataBearer;

/**
 * <p>
 *             <code>TransactGetItems</code> is a synchronous operation that atomically retrieves
 *             multiple items from one or more tables (but not from indexes) in a single account and
 *             Region. A <code>TransactGetItems</code> call can contain up to 25
 *                 <code>TransactGetItem</code> objects, each of which contains a <code>Get</code>
 *             structure that specifies an item to retrieve from a table in the account and Region. A
 *             call to <code>TransactGetItems</code> cannot retrieve items from tables in more than one
 *             AWS account or Region. The aggregate size of the items in the transaction cannot exceed
 *             4 MB.</p>
 *          <p>DynamoDB rejects the entire <code>TransactGetItems</code> request if any of the following is true:</p>
 *          <ul>
 *             <li>
 *                <p>A conflicting operation is in the process of updating an
 *           item to be read.</p>
 *             </li>
 *             <li>
 *                <p>There is insufficient provisioned capacity for the transaction
 *           to be completed.</p>
 *             </li>
 *             <li>
 *                <p>There is a user error, such as an invalid data format.</p>
 *             </li>
 *             <li>
 *                <p>The aggregate size of the items in the transaction cannot exceed 4 MB.</p>
 *             </li>
 *          </ul>
 */
export class TransactGetItemsCommand extends $Command<
  TransactGetItemsCommandInput,
  TransactGetItemsCommandOutput,
  DynamoDBClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TransactGetItemsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TransactGetItemsCommandInput, TransactGetItemsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "TransactGetItemsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TransactGetItemsInput.filterSensitiveLog,
      outputFilterSensitiveLog: TransactGetItemsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TransactGetItemsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0TransactGetItemsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TransactGetItemsCommandOutput> {
    return deserializeAws_json1_0TransactGetItemsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
