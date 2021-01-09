import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient.ts";
import { RegisterGameServerInput, RegisterGameServerOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1RegisterGameServerCommand,
  serializeAws_json1_1RegisterGameServerCommand,
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

export type RegisterGameServerCommandInput = RegisterGameServerInput;
export type RegisterGameServerCommandOutput = RegisterGameServerOutput & __MetadataBearer;

/**
 * <p>
 *             <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *         <p>Creates a new game server resource and notifies GameLift FleetIQ that the game server is ready to
 *             host gameplay and players. This operation is called by a game server process that is
 *             running on an instance in a game server group. Registering game servers enables GameLift FleetIQ to
 *             track available game servers and enables game clients and services to claim a game
 *             server for a new game session. </p>
 *         <p>To register a game server, identify the game server group and instance where the game
 *             server is running, and provide a unique identifier for the game server. You can also
 *             include connection and game server data. When a game client or service requests a game
 *             server by calling <a>ClaimGameServer</a>, this information is returned in the
 *             response.</p>
 *         <p>Once a game server is successfully registered, it is put in status
 *                 <code>AVAILABLE</code>. A request to register a game server may fail if the instance
 *             it is running on is in the process of shutting down as part of instance balancing or
 *             scale-down activity. </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">GameLift FleetIQ Guide</a>
 *         </p>
 *         <p>
 *             <b>Related operations</b>
 *          </p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>RegisterGameServer</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListGameServers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ClaimGameServer</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeGameServer</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateGameServer</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeregisterGameServer</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class RegisterGameServerCommand extends $Command<
  RegisterGameServerCommandInput,
  RegisterGameServerCommandOutput,
  GameLiftClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterGameServerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterGameServerCommandInput, RegisterGameServerCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "RegisterGameServerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterGameServerInput.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterGameServerOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterGameServerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterGameServerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterGameServerCommandOutput> {
    return deserializeAws_json1_1RegisterGameServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
