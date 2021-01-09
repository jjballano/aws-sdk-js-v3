import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient.ts";
import { CreatePortfolioShareInput, CreatePortfolioShareOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreatePortfolioShareCommand,
  serializeAws_json1_1CreatePortfolioShareCommand,
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

export type CreatePortfolioShareCommandInput = CreatePortfolioShareInput;
export type CreatePortfolioShareCommandOutput = CreatePortfolioShareOutput & __MetadataBearer;

/**
 * <p>Shares the specified portfolio with the specified account or organization node.
 *          Shares to an organization node can only be created by the management account of an
 *          organization or by a delegated administrator. You can share portfolios to an organization,
 *          an organizational unit, or a specific account.</p>
 *          <p>Note that if a delegated admin is de-registered, they can no longer create portfolio shares.</p>
 *         <p>
 *             <code>AWSOrganizationsAccess</code> must be enabled in order to create a portfolio share to an organization node.</p>
 *          <p>You can't share a shared resource. This includes portfolios that contain a shared product.</p>
 */
export class CreatePortfolioShareCommand extends $Command<
  CreatePortfolioShareCommandInput,
  CreatePortfolioShareCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePortfolioShareCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePortfolioShareCommandInput, CreatePortfolioShareCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "CreatePortfolioShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePortfolioShareInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePortfolioShareOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePortfolioShareCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreatePortfolioShareCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePortfolioShareCommandOutput> {
    return deserializeAws_json1_1CreatePortfolioShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
