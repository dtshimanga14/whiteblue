import { gql } from "@apollo/client";


  export const GET_CHATS = gql`
    query query {
      chats {
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