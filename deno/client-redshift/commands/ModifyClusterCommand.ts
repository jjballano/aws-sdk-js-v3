import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient.ts";
import { ModifyClusterMessage, ModifyClusterResult } from "../models/models_1.ts";
import {
  deserializeAws_queryModifyClusterCommand,
  serializeAws_queryModifyClusterCommand,
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

export type ModifyClusterCommandInput = ModifyClusterMessage;
export type ModifyClusterCommandOutput = ModifyClusterResult & __MetadataBearer;

/**
 * <p>Modifies the settings for a cluster.</p>
 *         <p>You can also change node type and the number of nodes to scale up or down the
 *             cluster. When resizing a cluster, you must specify both the number of nodes and the node
 *             type even if one of the parameters does not change.</p>
 * 		       <p>You can add another security or
 *             parameter group, or change the master user password. Resetting a cluster password or modifying the security groups associated with a cluster do not need a reboot. However, modifying a parameter group requires a reboot for parameters to take effect.
 * For more information about managing clusters, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 */
export class ModifyClusterCommand extends $Command<
  ModifyClusterCommandInput,
  ModifyClusterCommandOutput,
  RedshiftClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyClusterCommandInput, ModifyClusterCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "ModifyClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyClusterMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyClusterResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyClusterCommandOutput> {
    return deserializeAws_queryModifyClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
