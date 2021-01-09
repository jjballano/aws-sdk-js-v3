import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient.ts";
import { DescribeFileSystemsRequest, DescribeFileSystemsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeFileSystemsCommand,
  serializeAws_restJson1DescribeFileSystemsCommand,
} from "../protocols/Aws_restJson1.ts";
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

export type DescribeFileSystemsCommandInput = DescribeFileSystemsRequest;
export type DescribeFileSystemsCommandOutput = DescribeFileSystemsResponse & __MetadataBearer;

/**
 * <p>Returns the description of a specific Amazon EFS file system if either the file system
 *         <code>CreationToken</code> or the <code>FileSystemId</code> is provided. Otherwise, it
 *       returns descriptions of all file systems owned by the caller's AWS account in the AWS
 *       Region of the endpoint that you're calling.</p>
 *
 *          <p>When retrieving all file system descriptions, you can optionally specify the
 *         <code>MaxItems</code> parameter to limit the number of descriptions in a response.
 *       Currently, this number is automatically set to 10. If more file system descriptions remain,
 *       Amazon EFS returns a <code>NextMarker</code>, an opaque token, in the response. In this case,
 *       you should send a subsequent request with the <code>Marker</code> request parameter set to the
 *       value of <code>NextMarker</code>. </p>
 *
 *          <p>To retrieve a list of your file system descriptions, this operation is used in an
 *       iterative process, where <code>DescribeFileSystems</code> is called first without the
 *         <code>Marker</code> and then the operation continues to call it with the <code>Marker</code>
 *       parameter set to the value of the <code>NextMarker</code> from the previous response until the
 *       response has no <code>NextMarker</code>. </p>
 *
 *          <p> The order of file systems returned in the response of one
 *         <code>DescribeFileSystems</code> call and the order of file systems returned across the
 *       responses of a multi-call iteration is unspecified. </p>
 *          <p> This operation requires permissions for the
 *         <code>elasticfilesystem:DescribeFileSystems</code> action. </p>
 */
export class DescribeFileSystemsCommand extends $Command<
  DescribeFileSystemsCommandInput,
  DescribeFileSystemsCommandOutput,
  EFSClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFileSystemsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFileSystemsCommandInput, DescribeFileSystemsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "DescribeFileSystemsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFileSystemsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFileSystemsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFileSystemsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeFileSystemsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFileSystemsCommandOutput> {
    return deserializeAws_restJson1DescribeFileSystemsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
