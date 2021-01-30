import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient.ts";
import { PostCommentForPullRequestInput, PostCommentForPullRequestOutput } from "../models/models_1.ts";
import {
  deserializeAws_json1_1PostCommentForPullRequestCommand,
  serializeAws_json1_1PostCommentForPullRequestCommand,
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

export type PostCommentForPullRequestCommandInput = PostCommentForPullRequestInput;
export type PostCommentForPullRequestCommandOutput = PostCommentForPullRequestOutput & __MetadataBearer;

/**
 * <p>Posts a comment on a pull request.</p>
 */
export class PostCommentForPullRequestCommand extends $Command<
  PostCommentForPullRequestCommandInput,
  PostCommentForPullRequestCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PostCommentForPullRequestCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PostCommentForPullRequestCommandInput, PostCommentForPullRequestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "PostCommentForPullRequestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PostCommentForPullRequestInput.filterSensitiveLog,
      outputFilterSensitiveLog: PostCommentForPullRequestOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PostCommentForPullRequestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PostCommentForPullRequestCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PostCommentForPullRequestCommandOutput> {
    return deserializeAws_json1_1PostCommentForPullRequestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
