import { gql } from "apollo-server";

export const LinkSchema = gql`
  type Link {
    id: ID
    userId: String
    name: String
    url: String
    createdAt: String
    updatedAt: String
  }

  input LinkInput {
    userId: String
    name: String
    url: String
  }

  type Query {
    links: [Link]
    link(id: ID!): Link
  }

  type Mutation {
    createLink(link: LinkInput): Link
    updateLink(id: ID, link: LinkInput): Link
    deleteLink(id: ID): Link
  }
`;
