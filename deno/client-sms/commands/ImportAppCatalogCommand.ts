import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient.ts";
import { ImportAppCatalogRequest, ImportAppCatalogResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ImportAppCatalogCommand,
  serializeAws_json1_1ImportAppCatalogCommand,
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

export type ImportAppCatalogCommandInput = ImportAppCatalogRequest;
export type ImportAppCatalogCommandOutput = ImportAppCatalogResponse & __MetadataBearer;

/**
 * <p>Allows application import from AWS Migration Hub.</p>
 */
export class ImportAppCatalogCommand extends $Command<
  ImportAppCatalogCommandInput,
  ImportAppCatalogCommandOutput,
  SMSClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ImportAppCatalogCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportAppCatalogCommandInput, ImportAppCatalogCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "ImportAppCatalogCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportAppCatalogRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ImportAppCatalogResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportAppCatalogCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ImportAppCatalogCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportAppCatalogCommandOutput> {
    return deserializeAws_json1_1ImportAppCatalogCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
