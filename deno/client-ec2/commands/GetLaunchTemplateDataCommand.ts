import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { GetLaunchTemplateDataRequest, GetLaunchTemplateDataResult } from "../models/models_4.ts";
import {
  deserializeAws_ec2GetLaunchTemplateDataCommand,
  serializeAws_ec2GetLaunchTemplateDataCommand,
} from "../protocols/Aws_ec2.ts";
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

export type GetLaunchTemplateDataCommandInput = GetLaunchTemplateDataRequest;
export type GetLaunchTemplateDataCommandOutput = GetLaunchTemplateDataResult & __MetadataBearer;

/**
 * <p>Retrieves the configuration data of the specified instance. You can use this data
 *             to create a launch template. </p>
 *         <p>This action calls on other describe actions to get instance information. Depending on your instance configuration, you may need to allow the following
 *             actions in your IAM policy: DescribeSpotInstanceRequests, DescribeInstanceCreditSpecifications, DescribeVolumes, DescribeInstanceAttribute, and DescribeElasticGpus. Or, you can allow
 *         <code>describe*</code> depending on your instance requirements.</p>
 */
export class GetLaunchTemplateDataCommand extends $Command<
  GetLaunchTemplateDataCommandInput,
  GetLaunchTemplateDataCommandOutput,
  EC2ClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetLaunchTemplateDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLaunchTemplateDataCommandInput, GetLaunchTemplateDataCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetLaunchTemplateDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLaunchTemplateDataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetLaunchTemplateDataResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLaunchTemplateDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2GetLaunchTemplateDataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLaunchTemplateDataCommandOutput> {
    return deserializeAws_ec2GetLaunchTemplateDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
