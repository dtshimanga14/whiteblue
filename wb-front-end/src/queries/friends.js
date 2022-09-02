import { gql } from "@apollo/client";

export const GET_FRIENDS = gql`
  query getFriends {
    friends {
      username 
      age 
      email 
    }
  }`;