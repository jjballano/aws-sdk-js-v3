
import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient.ts";
import { AdminUpdateDeviceStatusRequest, AdminUpdateDeviceStatusResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1AdminUpdateDeviceStatusCommand,
  serializeAws_json1_1AdminUpdateDeviceStatusCommand,
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

export type AdminUpdateDeviceStatusCommandInput = AdminUpdateDeviceStatusRequest;
export type AdminUpdateDeviceStatusCommandOutput = AdminUpdateDeviceStatusResponse & __MetadataBearer;

export class AdminUpdateDeviceStatusCommand extends $Command<
  AdminUpdateDeviceStatusCommandInput,
  AdminUpdateDeviceStatusCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AdminUpdateDeviceStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AdminUpdateDeviceStatusCommandInput, AdminUpdateDeviceStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: AdminUpdateDeviceStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AdminUpdateDeviceStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AdminUpdateDeviceStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AdminUpdateDeviceStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AdminUpdateDeviceStatusCommandOutput> {
    return deserializeAws_json1_1AdminUpdateDeviceStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
