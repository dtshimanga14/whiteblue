import './css/App.css';

import React, { useState } from 'react';

import Feed from "./Feed";
import Head from "./Head";
import Friends from "./Friends";
import Menu from "./Menu";
import Boxes from "./Boxes";



function App() {

  const [chats,setChats] = useState([]);
  const popUpChatBox = (user) => {
    if(chats.find(index => index._id === user._id)){
      return null
    }else{
      let newChat = chats.concat(user);
      setChats(newChat)
    }
  };
  const onClose = (index) => {
    let newChat = chats.filter((c) => ( c._id !== index));
    setChats(newChat)
  };

  return (
    <div className="App-grid">
      <Head />
      <Friends popUpChatBox = {popUpChatBox}/>
      <Menu />
      <Feed/>
      <Boxes chats={chats} onClose={onClose}/>
    </div>
  );
}
export default App;
