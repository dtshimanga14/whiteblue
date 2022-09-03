import { gql } from "@apollo/client";

export const GET_FEEDS = gql`
  query getPosts {
    posts {
      _id
      description
      filename
    } 
  }`;