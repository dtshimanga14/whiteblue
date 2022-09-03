import "./css/Feed.css";
import React from 'react';
import { useQuery } from '@apollo/client';

import Post from "./Post";
import Trick from "./Trick";
import Suggested from "./Suggested";
import Loading from "./Loading";

import { GET_FEEDS } from "./queries/feeds";

const Feed = ({ setPosterToggle }) => {
  const {loading, error, data } = useQuery(GET_FEEDS);

  if(loading) return (<Loading />);
  if(error) return `Error ${error.message}`;
  let { feeds } = data;
  return (
    <div className="Feed">
      <Suggested />
      <Trick togglePosterProps={()=> setPosterToggle()} />
      {feeds.map((feed) => (<Post d ={feed}/>))}
    </div>
  );
};
export default Feed;