require("dotenv").config();
import { ApolloServer } from "apollo-server";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import { DataSources } from "./types";
import TagsAPI from "./dataSources/tags-api";
import CommentsAPI from "./dataSources/comments-api";
import PostsAPI from "./dataSources/posts-api";

const port = process.env.PORT || 4000;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: (): DataSources => ({
    tagsAPI: new TagsAPI(),
    commentsAPI: new CommentsAPI(),
    postsAPI: new PostsAPI(),
  }),
});

server.listen({ port }).then(({ url }) => {
  console.log(`🚀 Server is ready at ${url}`);
});
