
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient.ts";
import { SetLoadBasedAutoScalingRequest } from "../models/models_0.ts";
import {
  deserializeAws_json1_1SetLoadBasedAutoScalingCommand,
  serializeAws_json1_1SetLoadBasedAutoScalingCommand,
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

export type SetLoadBasedAutoScalingCommandInput = SetLoadBasedAutoScalingRequest;
export type SetLoadBasedAutoScalingCommandOutput = __MetadataBearer;

export class SetLoadBasedAutoScalingCommand extends $Command<
  SetLoadBasedAutoScalingCommandInput,
  SetLoadBasedAutoScalingCommandOutput,
  OpsWorksClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetLoadBasedAutoScalingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetLoadBasedAutoScalingCommandInput, SetLoadBasedAutoScalingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: SetLoadBasedAutoScalingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetLoadBasedAutoScalingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SetLoadBasedAutoScalingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetLoadBasedAutoScalingCommandOutput> {
    return deserializeAws_json1_1SetLoadBasedAutoScalingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
