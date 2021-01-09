import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient.ts";
import { ClusterParameterGroupNameMessage } from "../models/models_0.ts";
import { ResetClusterParameterGroupMessage } from "../models/models_1.ts";
import {
  deserializeAws_queryResetClusterParameterGroupCommand,
  serializeAws_queryResetClusterParameterGroupCommand,
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

export type ResetClusterParameterGroupCommandInput = ResetClusterParameterGroupMessage;
export type ResetClusterParameterGroupCommandOutput = ClusterParameterGroupNameMessage & __MetadataBearer;

/**
 * <p>Sets one or more parameters of the specified parameter group to their default
 *             values and sets the source values of the parameters to "engine-default". To reset the
 *             entire parameter group specify the <i>ResetAllParameters</i> parameter.
 *             For parameter changes to take effect you must reboot any associated clusters. </p>
 */
export class ResetClusterParameterGroupCommand extends $Command<
  ResetClusterParameterGroupCommandInput,
  ResetClusterParameterGroupCommandOutput,
  RedshiftClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResetClusterParameterGroupCommandInput) {
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
  ): Handler<ResetClusterParameterGroupCommandInput, ResetClusterParameterGroupCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "ResetClusterParameterGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResetClusterParameterGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ClusterParameterGroupNameMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResetClusterParameterGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryResetClusterParameterGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ResetClusterParameterGroupCommandOutput> {
    return deserializeAws_queryResetClusterParameterGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
