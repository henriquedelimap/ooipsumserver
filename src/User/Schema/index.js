import { gql } from "apollo-server";

export const UserSchema = gql`
  type User {
    username: String!
    password: String!
    perfil: String!
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
