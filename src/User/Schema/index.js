import { gql } from "apollo-server";

export const UserSchema = gql`
  type Links {
    name: String!
    url: String!
  }

  type User {
    id: ID
    username: String!
    email: String!
    password: String!
    links: [Links]
    createdAt: String!
    updatedAt: String!
  }

  input LinksInput {
    name: String!
    url: String!
  }

  input UserInput {
    username: String!
    email: String!
    links: [LinksInput]
    password: String!
  }

  type Query {
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    createUser(user: UserInput!): User!
    updateUser(username: String, user: UserInput): User!
    deleteUser(username: String!): User
  }
`;
