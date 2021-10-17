import process from "https://deno.land/std@0.111.0/node/process.ts";
import {
  MarketplaceMeteringClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceMeteringClient.ts";
import { ResolveCustomerRequest, ResolveCustomerResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ResolveCustomerCommand,
  serializeAws_json1_1ResolveCustomerCommand,
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

export interface ResolveCustomerCommandInput extends ResolveCustomerRequest {}
export interface ResolveCustomerCommandOutput extends ResolveCustomerResult, __MetadataBearer {}

/**
 * <p>ResolveCustomer is called by a SaaS application during the registration process.
 *             When a buyer visits your website during the registration process, the buyer submits a
 *             registration token through their browser. The registration token is resolved through
 *             this API to obtain a CustomerIdentifier and product code.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceMeteringClient, ResolveCustomerCommand } from "../../client-marketplace-metering/mod.ts";
 * // const { MarketplaceMeteringClient, ResolveCustomerCommand } = require("@aws-sdk/client-marketplace-metering"); // CommonJS import
 * const client = new MarketplaceMeteringClient(config);
 * const command = new ResolveCustomerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResolveCustomerCommandInput} for command's `input` shape.
 * @see {@link ResolveCustomerCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceMeteringClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ResolveCustomerCommand extends $Command<
  ResolveCustomerCommandInput,
  ResolveCustomerCommandOutput,
  MarketplaceMeteringClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResolveCustomerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MarketplaceMeteringClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResolveCustomerCommandInput, ResolveCustomerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MarketplaceMeteringClient";
    const commandName = "ResolveCustomerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResolveCustomerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ResolveCustomerResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResolveCustomerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ResolveCustomerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResolveCustomerCommandOutput> {
    return deserializeAws_json1_1ResolveCustomerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
