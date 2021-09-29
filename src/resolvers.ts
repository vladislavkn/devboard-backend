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
  },
};

export default resolvers;
