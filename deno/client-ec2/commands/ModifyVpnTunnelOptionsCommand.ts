import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { ModifyVpnTunnelOptionsRequest, ModifyVpnTunnelOptionsResult } from "../models/models_4.ts";
import {
  deserializeAws_ec2ModifyVpnTunnelOptionsCommand,
  serializeAws_ec2ModifyVpnTunnelOptionsCommand,
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

export type ModifyVpnTunnelOptionsCommandInput = ModifyVpnTunnelOptionsRequest;
export type ModifyVpnTunnelOptionsCommandOutput = ModifyVpnTunnelOptionsResult & __MetadataBearer;

/**
 * <p>Modifies the options for a VPN tunnel in an AWS Site-to-Site VPN connection. You can modify
 *             multiple options for a tunnel in a single request, but you can only modify one tunnel at
 *             a time. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPNTunnels.html">Site-to-Site VPN Tunnel Options for Your Site-to-Site VPN
 *                 Connection</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p>
 */
export class ModifyVpnTunnelOptionsCommand extends $Command<
  ModifyVpnTunnelOptionsCommandInput,
  ModifyVpnTunnelOptionsCommandOutput,
  EC2ClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyVpnTunnelOptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyVpnTunnelOptionsCommandInput, ModifyVpnTunnelOptionsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVpnTunnelOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyVpnTunnelOptionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyVpnTunnelOptionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyVpnTunnelOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyVpnTunnelOptionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyVpnTunnelOptionsCommandOutput> {
    return deserializeAws_ec2ModifyVpnTunnelOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
