import { gql } from "apollo-server";

export const UserSchema = gql`
  type User {
    id: ID
    username: String
    password: String
    email: String
    perfil: Perfil
    accountType: String
    hasInstagramAuthentication: Boolean
    themaType: String
    createdAt: String!
    updatedAt: String!
  }

  input UserInput {
    username: String
    email: String
    perfil: PerfilInput
    themaType: String
    accountType: String
    hasInstagramAuthentication: Boolean
    password: String
    userType: String
  }

  type Query {
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    createUser(user: UserInput): User!
    updateUser(username: String, user: UserInput): User
    deleteUser(username: String!): User
  }
`;
