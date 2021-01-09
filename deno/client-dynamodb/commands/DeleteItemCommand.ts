import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient.ts";
import { DeleteItemInput, DeleteItemOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_0DeleteItemCommand,
  serializeAws_json1_0DeleteItemCommand,
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

export type DeleteItemCommandInput = DeleteItemInput;
export type DeleteItemCommandOutput = DeleteItemOutput & __MetadataBearer;

/**
 * <p>Deletes a single item in a table by primary key. You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value.</p>
 *          <p>In addition to deleting an item, you can also return the item's attribute values in the same
 *       operation, using the <code>ReturnValues</code> parameter.</p>
 *          <p>Unless you specify conditions, the <code>DeleteItem</code> is an idempotent operation; running it
 *       multiple times on the same item or attribute does <i>not</i> result in an error response.</p>
 *          <p>Conditional deletes are useful for deleting items only if specific conditions are met. If those conditions are met, DynamoDB performs the delete. Otherwise, the item is not deleted.</p>
 */
export class DeleteItemCommand extends $Command<
  DeleteItemCommandInput,
  DeleteItemCommandOutput,
  DynamoDBClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteItemCommandInput) {
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
  ): Handler<DeleteItemCommandInput, DeleteItemCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "DeleteItemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteItemInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteItemOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteItemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DeleteItemCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteItemCommandOutput> {
    return deserializeAws_json1_0DeleteItemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
