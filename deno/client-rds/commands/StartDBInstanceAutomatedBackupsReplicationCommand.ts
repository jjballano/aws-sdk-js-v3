import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient.ts";
import {
  StartDBInstanceAutomatedBackupsReplicationMessage,
  StartDBInstanceAutomatedBackupsReplicationResult,
} from "../models/models_1.ts";
import {
  deserializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommand,
  serializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommand,
} from "../protocols/Aws_query.ts";
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

export type StartDBInstanceAutomatedBackupsReplicationCommandInput = StartDBInstanceAutomatedBackupsReplicationMessage;
export type StartDBInstanceAutomatedBackupsReplicationCommandOutput = StartDBInstanceAutomatedBackupsReplicationResult &
  __MetadataBearer;

/**
 * <p>Enables replication of automated backups to a different AWS Region.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html">
 *             Replicating Automated Backups to Another AWS Region</a> in the <i>Amazon RDS User Guide.</i>
 *          </p>
 */
export class StartDBInstanceAutomatedBackupsReplicationCommand extends $Command<
  StartDBInstanceAutomatedBackupsReplicationCommandInput,
  StartDBInstanceAutomatedBackupsReplicationCommandOutput,
  RDSClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartDBInstanceAutomatedBackupsReplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    StartDBInstanceAutomatedBackupsReplicationCommandInput,
    StartDBInstanceAutomatedBackupsReplicationCommandOutput
  > {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "StartDBInstanceAutomatedBackupsReplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartDBInstanceAutomatedBackupsReplicationMessage.filterSensitiveLog,
      outputFilterSensitiveLog: StartDBInstanceAutomatedBackupsReplicationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StartDBInstanceAutomatedBackupsReplicationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartDBInstanceAutomatedBackupsReplicationCommandOutput> {
    return deserializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
