import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient.ts";
import { GetSnapshotLimitsRequest, GetSnapshotLimitsResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetSnapshotLimitsCommand,
  serializeAws_json1_1GetSnapshotLimitsCommand,
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

export type GetSnapshotLimitsCommandInput = GetSnapshotLimitsRequest;
export type GetSnapshotLimitsCommandOutput = GetSnapshotLimitsResult & __MetadataBearer;

/**
 * <p>Obtains the manual snapshot limits for a directory.</p>
 */
export class GetSnapshotLimitsCommand extends $Command<
  GetSnapshotLimitsCommandInput,
  GetSnapshotLimitsCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSnapshotLimitsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSnapshotLimitsCommandInput, GetSnapshotLimitsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "GetSnapshotLimitsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSnapshotLimitsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSnapshotLimitsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSnapshotLimitsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetSnapshotLimitsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSnapshotLimitsCommandOutput> {
    return deserializeAws_json1_1GetSnapshotLimitsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
