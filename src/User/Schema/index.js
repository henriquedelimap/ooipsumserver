import { gql } from "apollo-server";

export const UserSchema = gql`
  type User {
    id: ID
    username: String!
    password: String!
    perfil: String!
    createdAt: String!
    updatedAt: String!
  }

  input UserInput {
    username: String!
    password: String!
    perfil: String!
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
