import { gql } from "apollo-server";

export const authSchema = gql`
  type Auth {
    token: String!
    user: User!
  }
  type Mutation {
    signIn(username: String!, password: String!): Auth
  }
`;
