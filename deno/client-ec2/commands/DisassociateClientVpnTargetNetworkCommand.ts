
import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import {
  DisassociateClientVpnTargetNetworkRequest,
  DisassociateClientVpnTargetNetworkResult,
} from "../models/models_3.ts";
import {
  deserializeAws_ec2DisassociateClientVpnTargetNetworkCommand,
  serializeAws_ec2DisassociateClientVpnTargetNetworkCommand,
} from "../protocols/Aws_ec2.ts";
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

export type DisassociateClientVpnTargetNetworkCommandInput = DisassociateClientVpnTargetNetworkRequest;
export type DisassociateClientVpnTargetNetworkCommandOutput = DisassociateClientVpnTargetNetworkResult &
  __MetadataBearer;

export class DisassociateClientVpnTargetNetworkCommand extends $Command<
  DisassociateClientVpnTargetNetworkCommandInput,
  DisassociateClientVpnTargetNetworkCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateClientVpnTargetNetworkCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateClientVpnTargetNetworkCommandInput, DisassociateClientVpnTargetNetworkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DisassociateClientVpnTargetNetworkRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateClientVpnTargetNetworkResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateClientVpnTargetNetworkCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DisassociateClientVpnTargetNetworkCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateClientVpnTargetNetworkCommandOutput> {
    return deserializeAws_ec2DisassociateClientVpnTargetNetworkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
