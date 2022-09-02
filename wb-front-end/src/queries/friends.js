import { gql } from "@apollo/client";

export const GET_FRIENDS = gql`
  query getFriends {
    friends {
      _id
      username 
      firstname 
      middlename 
      isConnected 
      lastSeenOnline 
      age 
      email 
    }
  }`;