import { mergeTypeDefs } from "@graphql-tools/merge";
import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import { UserSchema } from "./User/Schema/index.js";
import { UserResolver } from "./User/Resolver/index.js";
import dotenv from "dotenv";

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

const typeDefs = mergeTypeDefs([UserSchema]);
const resolvers = [UserResolver];

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => console.log(url))
  .catch((error) => console.log("server failed", error));
