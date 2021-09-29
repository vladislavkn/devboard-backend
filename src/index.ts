require("dotenv").config();
import { ApolloServer } from "apollo-server";
import typeDefs from "./typeDefs";

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`🚀 Server is ready at ${url}`);
});
