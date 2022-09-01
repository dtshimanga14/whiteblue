

require("dotenv").config();
const { uuidv4 } = require("uuid");
const { createServer } = require("http"); 
const moment = require("moment");
const { ApolloServer, gql } = require("apollo-server-express");
const { PubSub } = require("apollo-server");
const { createWriteStream } = require("fs");

const express = require("express");
const crypto = require("crypto");
const multer = require("multer");


const { resolvers } = require("./modele/resolvers");
const { typeDefs } = require("./modele/typeDefs");

var app = express();
//Rest APIs
app.use(express.static('static'));
app.get("/users",async (req,res) => {
    res.send("hello world");
}).get("/feeds",() => {
    const feeds = [
      { src : "./pics/black-family.jpg"},
      { src : "./pics/hawai.webp"},
    ];
    res.json(feeds);
})
.listen(process.env.PORT,()=> {
    console.log("wb-node-apis is running on 9000");
});

//GRAPHQL APIs
const start = async () => {
  try {
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });
    const httpServer = createServer(app);
    httpServer.listen({ port: 8000 }, () => {
      console.log('Apollo Server on http://localhost:8000/graphql');
    });

  }catch(e) {
    console.log(e);
  } 
};
start();