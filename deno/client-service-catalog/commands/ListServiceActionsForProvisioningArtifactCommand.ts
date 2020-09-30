
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient.ts";
import {
  ListServiceActionsForProvisioningArtifactInput,
  ListServiceActionsForProvisioningArtifactOutput,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand,
  serializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand,
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

export type ListServiceActionsForProvisioningArtifactCommandInput = ListServiceActionsForProvisioningArtifactInput;
export type ListServiceActionsForProvisioningArtifactCommandOutput = ListServiceActionsForProvisioningArtifactOutput &
  __MetadataBearer;

export class ListServiceActionsForProvisioningArtifactCommand extends $Command<
  ListServiceActionsForProvisioningArtifactCommandInput,
  ListServiceActionsForProvisioningArtifactCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListServiceActionsForProvisioningArtifactCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListServiceActionsForProvisioningArtifactCommandInput,
    ListServiceActionsForProvisioningArtifactCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListServiceActionsForProvisioningArtifactInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListServiceActionsForProvisioningArtifactOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListServiceActionsForProvisioningArtifactCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListServiceActionsForProvisioningArtifactCommandOutput> {
    return deserializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
