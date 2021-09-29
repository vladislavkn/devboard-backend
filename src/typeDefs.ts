import { gql } from "apollo-server";

export default gql`
  type User {
    avatarURL: String!
    name: String!
  }

  type Post {
    title: String!
    id: ID!
    readableDate: String!
    commentsLink: String!
    originalLink: String!
    reactionsCount: Int!
    author: User!
    description: String!
    body: String!
  }

  type Comment {
    author: User!
    readableDate: String!
    body: String!
  }

  type Tag {
    name: String!
    textColor: String!
    backgroundColor: String!
    id: ID!
  }

  type Query {
    tags(page: Int!, per_page: Int!): [Tag!]!
    taggedPosts(tagIds: [ID!]!): [Post!]!
    lastPosts: [Post!]!
    currentPost(postId: ID!): Post
    postComments(postId: ID!): [Comment!]
  }
`;
