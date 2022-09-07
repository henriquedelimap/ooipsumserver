import { gql } from "apollo-server";

export const PerfilSchema = gql`
  type Perfil {
    id: ID
    user: User
    createdAt: String!
    updatedAt: String!
  }

  input PerfilInput {
    user: UserInput
  }

  type Query {
    perfils: [Perfil]
    perfil(username: String): Perfil
  }

  type Mutation {
    createPerfil(user: UserInput!): Perfil!
    updatePerfil(Perfilname: String, Perfil: PerfilInput): Perfil!
    deletePerfil(Perfilname: String!): Perfil
  }
`;
