
const{ mongodb,MongoClient, ObjectId} = require("mongodb");
const { GridFsStorage } = require("multer-gridfs-storage");
const Grid = require('gridfs-stream');
const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://root:2YKasj80X1oJHFSV@wb-db.dongv5t.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(mongoURI);
const database = client.db("whiteblue");
const users = database.collection('users');

const resolvers = {
  Query: {
    users : async (root,{filename}) => {
      const user = await users.findOne();
      return user;
    },
    feeds : () => {
      const feeds = [
        { src : "./pics/black-family.jpg"},
        { src : "./pics/hawai.webp"},
      ];
      return feeds;
    },
    friends : async () => {
      const friends = await users.find({}).toArray();
      return friends;
    },
    chats : async() => {
      return {
        _id : "1",
        firstOwner : "daniel tshims",
        secondOwner : "Rudyger",
        messages : [{
          id : "365758",
          digitalSign : "47585",
          when : "say something",
          text : "hello world",
        }]
      };
    }
  }
};
exports.resolvers = resolvers;