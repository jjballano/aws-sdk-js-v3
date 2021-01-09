import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { CreateInstanceSnapshotRequest, CreateInstanceSnapshotResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateInstanceSnapshotCommand,
  serializeAws_json1_1CreateInstanceSnapshotCommand,
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

export type CreateInstanceSnapshotCommandInput = CreateInstanceSnapshotRequest;
export type CreateInstanceSnapshotCommandOutput = CreateInstanceSnapshotResult & __MetadataBearer;

/**
 * <p>Creates a snapshot of a specific virtual private server, or <i>instance</i>.
 *       You can use a snapshot to create a new instance that is based on that snapshot.</p>
 *          <p>The <code>create instance snapshot</code> operation supports tag-based access control via
 *       request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 */
export class CreateInstanceSnapshotCommand extends $Command<
  CreateInstanceSnapshotCommandInput,
  CreateInstanceSnapshotCommandOutput,
  LightsailClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateInstanceSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateInstanceSnapshotCommandInput, CreateInstanceSnapshotCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "CreateInstanceSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateInstanceSnapshotRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateInstanceSnapshotResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateInstanceSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateInstanceSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateInstanceSnapshotCommandOutput> {
    return deserializeAws_json1_1CreateInstanceSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
