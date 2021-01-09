import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient.ts";
import { RestoreDBClusterFromS3Message, RestoreDBClusterFromS3Result } from "../models/models_1.ts";
import {
  deserializeAws_queryRestoreDBClusterFromS3Command,
  serializeAws_queryRestoreDBClusterFromS3Command,
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

export type RestoreDBClusterFromS3CommandInput = RestoreDBClusterFromS3Message;
export type RestoreDBClusterFromS3CommandOutput = RestoreDBClusterFromS3Result & __MetadataBearer;

/**
 * <p>Creates an Amazon Aurora DB cluster from MySQL data stored in an Amazon S3 bucket.
 *             Amazon RDS must be authorized to access the Amazon S3 bucket and the data must be
 *             created using the Percona XtraBackup utility as described in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrating.ExtMySQL.html#AuroraMySQL.Migrating.ExtMySQL.S3"> Migrating Data from MySQL by Using an Amazon S3 Bucket</a> in the
 *                 <i>Amazon Aurora User Guide</i>.</p>
 *         <note>
 *               <p>This action only restores the DB cluster, not the DB instances for that DB
 *                   cluster. You must invoke the <code>CreateDBInstance</code> action to create DB
 *                   instances for the restored DB cluster, specifying the identifier of the restored DB
 *                   cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after
 *                   the <code>RestoreDBClusterFromS3</code> action has completed and the DB
 *                   cluster is available.</p>
 *         </note>
 *         <p>For more information on Amazon Aurora, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *                 What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
 *         </p>
 *         <note>
 *             <p>This action only applies to Aurora DB clusters. The source DB engine must be
 *                 MySQL.</p>
 *         </note>
 */
export class RestoreDBClusterFromS3Command extends $Command<
  RestoreDBClusterFromS3CommandInput,
  RestoreDBClusterFromS3CommandOutput,
  RDSClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RestoreDBClusterFromS3CommandInput) {
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
  ): Handler<RestoreDBClusterFromS3CommandInput, RestoreDBClusterFromS3CommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "RestoreDBClusterFromS3Command";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreDBClusterFromS3Message.filterSensitiveLog,
      outputFilterSensitiveLog: RestoreDBClusterFromS3Result.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestoreDBClusterFromS3CommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRestoreDBClusterFromS3Command(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RestoreDBClusterFromS3CommandOutput> {
    return deserializeAws_queryRestoreDBClusterFromS3Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
