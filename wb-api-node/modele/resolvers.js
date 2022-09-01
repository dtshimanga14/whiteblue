
const{ mongodb,MongoClient, ObjectId} = require("mongodb");
const { GridFsStorage } = require("multer-gridfs-storage");
const Grid = require('gridfs-stream');
const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://root:2YKasj80X1oJHFSV@wb-db.dongv5t.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(mongoURI);

const resolvers = {
    Query: {
      users : async (root,{filename}) => {
        const database = await client.db("whiteblue");
        const users = database.collection('users');
        const user = await users.findOne();
        return user;
      }
    }
  };
exports.resolvers = resolvers;