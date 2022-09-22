import { gql } from "apollo-server";

export const BlogConfigSchema = gql`
  type AppBarListItem {
    id: ID
    to: String
    label: String

    createdAt: String!
    updatedAt: String!
  }

  type Newsletter {
    id: ID
    placeholder: String
    button: String
    title: String
    subtitle: String
    icon: String

    createdAt: String!
    updatedAt: String!
  }

  type HomeMainCards {
    background: String
    description: String

    createdAt: String!
    updatedAt: String!
  }

  type BlogConfig {
    id: ID
    logo: String
    siteName: String
    appBarListItems: [AppBarListItem]
    newsletter: Newsletter
    homeMainCards: [HomeMainCards]

    createdAt: String!
    updatedAt: String!
  }

  input AppBarListItemInput {
    id: ID
    to: String
    label: String

    createdAt: String!
    updatedAt: String!
  }

  input NewsletterInput {
    id: ID
    placeholder: String
    button: String
    title: String
    subtitle: String
    icon: String

    createdAt: String!
    updatedAt: String!
  }

  input HomeMainCardsInput {
    background: String
    description: String

    createdAt: String!
    updatedAt: String!
  }

  input BlogConfigInput {
    logo: String
    siteName: String
    appBarListItems: [AppBarListItemInput]
    newsletter: NewsletterInput
    homeMainCards: [HomeMainCardsInput]

    createdAt: String!
    updatedAt: String!
  }

  type Query {
    BlogConfig: BlogConfig
  }

  type Mutation {
    createBlogConfig(BlogConfig: BlogConfigInput!): BlogConfig!
    updateBlogConfig(siteName: String, BlogConfig: BlogConfigInput): BlogConfig!
    deleteBlogConfig(siteName: String!): BlogConfig
  }
`;
