import {
  getDocumentContentHTML,
  getEnvOrFail,
  getReadableDate,
} from "../utils";
import { RESTDataSource } from "apollo-datasource-rest";
import { Post } from "@/generated/graphql-types";
import { IPostsAPI, PostDTO } from "@/types";

export default class PostsAPI extends RESTDataSource implements IPostsAPI {
  constructor() {
    super();
    this.baseURL = getEnvOrFail("API_URL") as string;
  }

  async getLatestPosts(page: number, per_page: number): Promise<Post[]> {
    const data = await this.get<PostDTO[]>("/articles", {
      page,
      per_page,
    });

    return data.map(this.transformPostDTO);
  }

  async getPostsByTags(
    tags: string[],
    page: number,
    per_page: number
  ): Promise<Post[]> {
    const data = await this.get<PostDTO[]>("/articles", {
      page,
      per_page,
      tags,
    });

    return data.map(this.transformPostDTO);
  }

  async getPostById(postId: string): Promise<Post> {
    const data = await this.get<PostDTO>(`/articles/${postId}`);

    return this.transformPostDTO(data);
  }

  private transformPostDTO(postDTO: PostDTO): Post {
    return {
      id: postDTO.id.toString(),
      title: postDTO.title,
      description: postDTO.description,
      originalLink: postDTO.url,
      commentsLink: `${postDTO.url}#comments`,
      body: postDTO.body_html ?? "[Not available]",
      reactionsCount: postDTO.public_reactions_count,
      readableDate: postDTO.readable_publish_date,
      author: {
        name: postDTO.user.name,
        avatarURL: postDTO.user.profile_image_90,
      },
    };
  }
}
