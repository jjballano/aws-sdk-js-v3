
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient.ts";
import { CreateVpcPeeringAuthorizationInput, CreateVpcPeeringAuthorizationOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateVpcPeeringAuthorizationCommand,
  serializeAws_json1_1CreateVpcPeeringAuthorizationCommand,
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

export type CreateVpcPeeringAuthorizationCommandInput = CreateVpcPeeringAuthorizationInput;
export type CreateVpcPeeringAuthorizationCommandOutput = CreateVpcPeeringAuthorizationOutput & __MetadataBearer;

export class CreateVpcPeeringAuthorizationCommand extends $Command<
  CreateVpcPeeringAuthorizationCommandInput,
  CreateVpcPeeringAuthorizationCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateVpcPeeringAuthorizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateVpcPeeringAuthorizationCommandInput, CreateVpcPeeringAuthorizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreateVpcPeeringAuthorizationInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVpcPeeringAuthorizationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVpcPeeringAuthorizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateVpcPeeringAuthorizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateVpcPeeringAuthorizationCommandOutput> {
    return deserializeAws_json1_1CreateVpcPeeringAuthorizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
