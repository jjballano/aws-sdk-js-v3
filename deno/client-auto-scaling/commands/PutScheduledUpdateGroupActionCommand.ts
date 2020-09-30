
import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient.ts";
import { PutScheduledUpdateGroupActionType } from "../models/models_0.ts";
import {
  deserializeAws_queryPutScheduledUpdateGroupActionCommand,
  serializeAws_queryPutScheduledUpdateGroupActionCommand,
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

export type PutScheduledUpdateGroupActionCommandInput = PutScheduledUpdateGroupActionType;
export type PutScheduledUpdateGroupActionCommandOutput = __MetadataBearer;

export class PutScheduledUpdateGroupActionCommand extends $Command<
  PutScheduledUpdateGroupActionCommandInput,
  PutScheduledUpdateGroupActionCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutScheduledUpdateGroupActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutScheduledUpdateGroupActionCommandInput, PutScheduledUpdateGroupActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: PutScheduledUpdateGroupActionType.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutScheduledUpdateGroupActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPutScheduledUpdateGroupActionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutScheduledUpdateGroupActionCommandOutput> {
    return deserializeAws_queryPutScheduledUpdateGroupActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
