import { gql } from "apollo-server";

export const PerfilSchema = gql`
  type Perfil {
    id: ID
    username: String
    bio: String
    accountType: String
    createdAt: String!
    updatedAt: String!
  }

  input PerfilInput {
    username: String
    userId: String
    bio: String
    accountType: String
  }

  type Query {
    perfils: [Perfil]
    perfil(username: String): Perfil
  }

  type Mutation {
    createPerfil(perfil: PerfilInput!): Perfil!
    updatePerfil(Perfilname: String, Perfil: PerfilInput): Perfil!
    deletePerfil(Perfilname: String!): Perfil
  }
`;
