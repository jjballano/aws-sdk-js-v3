import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient.ts";
import { RestoreDBClusterToPointInTimeMessage, RestoreDBClusterToPointInTimeResult } from "../models/models_0.ts";
import {
  deserializeAws_queryRestoreDBClusterToPointInTimeCommand,
  serializeAws_queryRestoreDBClusterToPointInTimeCommand,
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

export type RestoreDBClusterToPointInTimeCommandInput = RestoreDBClusterToPointInTimeMessage;
export type RestoreDBClusterToPointInTimeCommandOutput = RestoreDBClusterToPointInTimeResult & __MetadataBearer;

/**
 * <p>Restores a cluster to an arbitrary point in time. Users can restore to any point in
 *             time before <code>LatestRestorableTime</code> for up to
 *                 <code>BackupRetentionPeriod</code> days. The target cluster is created from the
 *             source cluster with the same configuration as the original cluster, except that
 *             the new cluster is created with the default security group. </p>
 */
export class RestoreDBClusterToPointInTimeCommand extends $Command<
  RestoreDBClusterToPointInTimeCommandInput,
  RestoreDBClusterToPointInTimeCommandOutput,
  DocDBClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RestoreDBClusterToPointInTimeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RestoreDBClusterToPointInTimeCommandInput, RestoreDBClusterToPointInTimeCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "RestoreDBClusterToPointInTimeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreDBClusterToPointInTimeMessage.filterSensitiveLog,
      outputFilterSensitiveLog: RestoreDBClusterToPointInTimeResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestoreDBClusterToPointInTimeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRestoreDBClusterToPointInTimeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreDBClusterToPointInTimeCommandOutput> {
    return deserializeAws_queryRestoreDBClusterToPointInTimeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
