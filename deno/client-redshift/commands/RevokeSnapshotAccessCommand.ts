
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient.ts";
import { RevokeSnapshotAccessMessage, RevokeSnapshotAccessResult } from "../models/models_1.ts";
import {
  deserializeAws_queryRevokeSnapshotAccessCommand,
  serializeAws_queryRevokeSnapshotAccessCommand,
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

export type RevokeSnapshotAccessCommandInput = RevokeSnapshotAccessMessage;
export type RevokeSnapshotAccessCommandOutput = RevokeSnapshotAccessResult & __MetadataBearer;

export class RevokeSnapshotAccessCommand extends $Command<
  RevokeSnapshotAccessCommandInput,
  RevokeSnapshotAccessCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RevokeSnapshotAccessCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RevokeSnapshotAccessCommandInput, RevokeSnapshotAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: RevokeSnapshotAccessMessage.filterSensitiveLog,
      outputFilterSensitiveLog: RevokeSnapshotAccessResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RevokeSnapshotAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRevokeSnapshotAccessCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RevokeSnapshotAccessCommandOutput> {
    return deserializeAws_queryRevokeSnapshotAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
