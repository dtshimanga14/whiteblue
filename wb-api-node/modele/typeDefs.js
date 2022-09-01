
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id : String
    username : String
    age : Int
    email : String
  }
  type Query {
    users : User
  }
`;
exports.typeDefs = typeDefs;