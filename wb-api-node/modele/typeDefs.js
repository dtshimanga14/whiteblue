
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id : String
    username : String
    age : Int
    email : String
  }
  type Feed {
    src : String
  }
  type Query {
    users : User
    feeds : [Feed]
  }
`;
exports.typeDefs = typeDefs;