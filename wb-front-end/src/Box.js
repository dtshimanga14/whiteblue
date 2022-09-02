import "./css/Box.css";

import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import gql from "graphql-tag";
import moment from 'moment';
import Loading from './Loading.js';
import React, { useState, useEffect } from 'react';
import { useQuery, useApolloClient, useSubscription, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';

import { GET_CHATS } from "./queries/chats.js";

const ChatBox = ({ messages, firstOwner, secondOwner }) => {
    return (<div className="chat-box">
        {messages.map((message) =>(
        <div>
            <div className="chat-time">{moment(message.when).format('MMMM Do YYYY, h:mm:ss a')}</div>
            <span className="delete-hook-left"><i className="fa fa-ellipsis-h"/></span>
            <div className={message.digitalSign === firstOwner ? 'me-chat delete-hook-left':'you-chat delete-hook-right'}>
                {message.text}
            </div>
        </div>))}
    </div>)
  };

const Box = ({onClose, chat}) => {
  const _id = "1";
  let firstOwner = "1243";
  let secondOwner = _id;
  
  const [message, setMessage] = useState("");
    const submit = async (event) => {
		event.preventDefault();
		chats({
		  variables: { 
			firstOwner,secondOwner,
			digitalSign: firstOwner,
			text: message }
		});
		setMessage('');
  };	
  const { loading, error, data } = useQuery(GET_CHATS);
  if (loading) return (<div>'Loading...'</div>);
  if (error) return `Error! ${error.message}`;
  const { chats } = data;
  return (
    <div className="chats-frame">
      <span  className="margin-right-10">
        <div  className={true ? "connected-status-chat-green" :"connected-status-chat-gray"}/>
      </span>
      <div className="peer-chat">
        <a href="#" title="view cv">
            Andrew Crock
        </a>
      </div>
      <div className="icon-right-chat">
        <span  className="cursor-image"> 
            <i className="fa fa-user-plus"/>
        </span>
        <span className="cursor-image">
            <i className="fa fa-minus"/>
        </span >
        <span   className="cursor-image" onClick={() => onClose()}> 
            <i className="fa fa-times"/>
        </span >
      </div>
      <ChatBox 
        messages={chats.messages}
        firstOwner={chats.firstOwner}
        secondOwner={chats.secondOwner}
      />
      <div className="editor-box">
        <form onSubmit={submit}>
        <input className="input-chat"  
            value={message} 
            onChange={({ target }) => setMessage(target.value)} 
        />
        </form>
      </div>
    </div>)
};
export default Box;