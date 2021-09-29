import { Comment } from "@/generated/graphql-types";
import {
  getDocumentContentHTML,
  getEnvOrFail,
  getReadableDate,
} from "../utils";
import { RESTDataSource } from "apollo-datasource-rest";
import { CommentDTO, ICommentsAPI } from "@/types";

export default class CommentsAPI
  extends RESTDataSource
  implements ICommentsAPI
{
  constructor() {
    super();
    this.baseURL = getEnvOrFail("API_URL") as string;
  }

  async getCommentsByPostId(postId: string): Promise<Comment[]> {
    const data = await this.get<CommentDTO[]>("/comments", {
      a_id: postId,
    });

    return data.map((comment) => ({
      id: comment.id_code,
      body: getDocumentContentHTML(comment.body_html),
      readableDate: getReadableDate(new Date(comment.created_at)),
      author: {
        name: comment.user.name,
        avatarURL: comment.user.profile_image_90,
      },
    }));
  }
}
