
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id : String
    username : String
    firstname : String
    middlename : String
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
  type Query {
    users : User
    feeds : [Feed]
    friends : [User]
    chats : Chat
  }
`;
exports.typeDefs = typeDefs;