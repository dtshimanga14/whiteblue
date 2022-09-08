
const{ MongoClient, ObjectId} = require("mongodb");
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
    user : async (root,{ username, password },{ dataSources }) => {
      const user = dataSources.authApi.getUser(username, password);
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
      const chats = database.collection('chats');
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
    },
    posts : async() => {
      const posts = database.collection('posts');
      const data = await posts.find({}).toArray();
      return data;
    }
  },
  Mutation : {
    login : (root,{ username, password }) => {
      return { token : username == "dan" ? "auth-token" : null };
    }
  }
};
exports.resolvers = resolvers;