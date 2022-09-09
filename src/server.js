import { mergeTypeDefs } from "@graphql-tools/merge";
import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import { UserSchema } from "./User/Schema/index.js";
import { UserResolver } from "./User/Resolver/index.js";
import dotenv from "dotenv";
import { authSchema } from "./Auth/Schema/index.js";
import { authResolvers } from "./Auth/Resolver/index.js";
import { AuthenticationAssurance } from "./middlewares/AuthenticationAssurance.js";
import { PerfilResolver } from "./Perfil/Resolver/index.js";
import { PerfilSchema } from "./Perfil/Shema/index.js";
import { LinkSchema } from "./Links/Schema/index.js";
import { LinkResolver } from "./Links/Resolver/index.js";
dotenv.config();

export const db = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  name: process.env.DB_NAME,
};

const dbUri = db.host;

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(dbUri, dbOptions)
  .then(() => console.log("database connected"))
  .catch((error) => console.log("database failed", error));

const typeDefs = mergeTypeDefs([UserSchema, authSchema, PerfilSchema]);
const resolvers = [UserResolver, authResolvers, PerfilResolver];

const server = new ApolloServer({
  typeDefs,
  resolvers,
  authChecker: AuthenticationAssurance,
});

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => console.log(url))
  .catch((error) => console.log("server failed", error));
