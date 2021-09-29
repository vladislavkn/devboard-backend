import { RESTDataSource } from "apollo-datasource-rest";
import { Comment, Tag } from "./generated/graphql-types";

export interface ITagsAPI extends RESTDataSource {
  getTags(page: number, per_page: number): Promise<Tag[]>;
}

export interface ICommentsApi extends RESTDataSource {
  getCommentsByPostId(postId: string): Promise<Comment[]>;
}

export type DataSources = {
  tagsAPI: ITagsAPI;
  commentsAPI: ICommentsApi;
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
  bg_color_hex: string;
  text_color_hex: string;
};

export type CommentDTO = {
  created_at: string;
  body_html: string;
  id_code: string;
  user: UserDTO;
};
