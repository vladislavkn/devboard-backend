require("dotenv").config();
import { ApolloServer } from "apollo-server";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import { DataSources } from "./types";
import TagsAPI from "./dataSources/tags-api";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: (): DataSources => ({
    tagsAPI: new TagsAPI(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server is ready at ${url}`);
});
