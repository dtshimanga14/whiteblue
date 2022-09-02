import "./css/Friends.css";

import React from 'react';
import { useQuery } from '@apollo/client';

import Loading from "./Loading";

import { GET_FRIENDS } from "./queries/friends";

const Friends = () => {
    const {loading, error, data } = useQuery(GET_FRIENDS);
  
    if(loading) return (<Loading />);
    if(error) return `Error ${error.message}`;
    let { friends } = data;
  return (
    <div className ="Friends">
      {friends.map(friend => <div>{friend.username}</div>)}
    </div>
  );
};
export default Friends;