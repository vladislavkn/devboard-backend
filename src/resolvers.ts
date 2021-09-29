import { Resolvers } from "./generated/graphql-types";
import { Context } from "./types";

const resolvers: Resolvers<Context> = {
  Query: {
    tags: (_, args, { dataSources }) => {
      return dataSources.tagsAPI.getTags(args.page, args.per_page);
    },
    postComments: (_, args, { dataSources }) => {
      return dataSources.commentsAPI.getCommentsByPostId(args.postId);
    },
    lastPosts: (_, args, { dataSources }) => {
      return dataSources.postsAPI.getLatestPosts(args.page, args.per_page);
    },
    taggedPosts: (_, args, { dataSources }) => {
      return dataSources.postsAPI.getPostsByTags(
        args.tags,
        args.page,
        args.per_page
      );
    },
    currentPost: (_, args, { dataSources }) => {
      return dataSources.postsAPI.getPostById(args.postId);
    },
  },
};

export default resolvers;
