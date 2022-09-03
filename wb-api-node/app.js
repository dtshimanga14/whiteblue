require("dotenv").config();
const crypto = require("crypto");
const mongoose = require("mongoose");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const Grid = require('gridfs-stream');
const http = require("http");
const fs = require("fs");
const url = require("url");
const cors = require("cors");
const path = require("path");
const { uuidv4 } = require("uuid");
const { createServer } = require("http"); 
const moment = require("moment");
const { ApolloServer, gql } = require("apollo-server-express");
const { PubSub } = require("apollo-server");
const { createWriteStream } = require("fs");
const express = require("express");
const session = require('express-session');
const bodyParser = require('body-parser');
const { MongoClient } = require("mongodb");

const mongoURI = "mongodb+srv://root:2YKasj80X1oJHFSV@wb-db.dongv5t.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(mongoURI);

const { resolvers } = require("./modele/resolvers");
const { typeDefs } = require("./modele/typeDefs");

var app = express();
const prepare = (o) => {
  o._id = o._id.toString()
  return o
};

const toObjectId = (_id) => {
  return  ObjectId(_id)
};

// connection
const conn = mongoose.createConnection(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// Create storage engine
var filename;


const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err)
        }
        filename = file.originalname;
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads',
         // metadata: { uploadedBy: 'Someone' }
        };
        resolve(fileInfo);
      });
    });
  },
});

const upload = multer({ storage });

// init gfs
let gfs;
conn.once("open", () => {
  // init stream
  gfs = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "uploads"
  });
});

//Rest APIs
app.use(express.static('static'));
app.post("/addPicture", upload.single("file"),async (req, res, err) => {
   
  await client.connect();
  // Establish and verify connection
  const database = await client.db("whiteblue");
  const posts = database.collection('posts');

  let newPost = { 
    description : req.body.description, 
    filename : filename
  };
  let post = posts.insertOne(newPost);
  filename = null;
}).get("/image/:filename", (req, res) => {
  const file = gfs.find({ filename: req.params.filename })
    .toArray((err, files) => {
      if (!files || files.length === 0) {
        return res.status(404).json({
          err: "no files exist"
        });
       }
      gfs.openDownloadStreamByName(req.params.filename).pipe(res);
    });
})
.get("/users",async (req,res) => {
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