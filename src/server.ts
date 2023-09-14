import express, { Request, Response } from "express";
import * as pgk from "package.json";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import loadMergeSchema from "./libs/loadMergedSchema";
import { Resolvers } from "./resolvers";

async function CreateAppolloServer() {
  const app = express();
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  const server = new ApolloServer({
    typeDefs:loadMergeSchema,
    resolvers:Resolvers,
  })
  
  await server.start();
  app.use("/dymong",cors<cors.CorsRequest>(),express.json(),expressMiddleware(server, {}));

  app.listen({ port: 7000 }, () => {
    console.log("Server run at port 7000");
  });
}

CreateAppolloServer();
