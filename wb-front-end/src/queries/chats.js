import { gql } from "@apollo/client";


  export const GET_CHATS = gql`
    query query {
      chats {
        _id
        firstOwner 
        secondOwner
        messages {
          id 
          digitalSign 
          when 
          text 
          }
        }
    }
    `;