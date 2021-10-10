import { RESTDataSource } from "apollo-datasource-rest";
import { Comment, Post, Tag } from "./generated/graphql-types";

export interface ITagsAPI extends RESTDataSource {
  getTags(page: number, per_page: number): Promise<Tag[]>;
}

export interface ICommentsAPI extends RESTDataSource {
  getCommentsByPostId(postId: string): Promise<Comment[]>;
}

export interface IPostsAPI extends RESTDataSource {
  getLatestPosts(page: number, per_page: number): Promise<Post[]>;
  getPostsByTags(
    tags: string[],
    page: number,
    per_page: number
  ): Promise<Post[]>;
  getPostById(postId: string): Promise<Post | null>;
}

export type DataSources = {
  tagsAPI: ITagsAPI;
  commentsAPI: ICommentsAPI;
  postsAPI: IPostsAPI;
};

export type Context = {
  dataSources: DataSources;
};

export type UserDTO = {
  name: string;
  profile_image_90: string;
};

export type TagDTO = {
  id: number;
  name: string;
  bg_color_hex?: string;
  text_color_hex?: string;
};

export type CommentDTO = {
  created_at: string;
  body_html: string;
  id_code: string;
  user: UserDTO;
};

export type PostDTO = {
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  url: string;
  public_reactions_count: number;
  user: UserDTO;
  body_html?: string;
};
