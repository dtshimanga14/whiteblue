import { gql } from "@apollo/client";

export const GET_SUGGESTED = gql`
  query getSuggesteds {
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