import { Resolvers } from "./graphql-types";
import { Context } from "./types";

const resolvers: Resolvers<Context> = {
  Query: {
    tags: (_, args, { dataSources }) => {
      return dataSources.tagsAPI.getTags(args.page, args.per_page);
    },
  },
};

export default resolvers;