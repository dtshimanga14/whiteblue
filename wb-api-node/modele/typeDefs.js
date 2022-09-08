
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id : String
    username : String
    lastname : String
    firstname : String
    middlename : String
    password : String
    isConnected : Boolean
    lastSeenOnline : String
    age : Int
    email : String
  }
  type Feed {
    src : String
  }
  type Message {
    id : String
    digitalSign : String
    when : String
    text : String
  }
  type Chat {
    _id : String
    firstOwner : String
    secondOwner : String
    messages : [Message]
  }
  type Post {
    _id : String
    description : String
    filename : String
  }
  type Token {
    token : String
  }
  type Query {
    users : User
    user(username: String!, password: String!) : User
    feeds : [Feed]
    friends : [User]
    chats : Chat
    posts : [Post]
  }
  type Mutation {
    login (username: String!, password: String!) : Token
  }
`;
exports.typeDefs = typeDefs;