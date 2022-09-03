import './css/App.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Switch,Route,Redirect } from 'react-router-dom';

import Feed from "./Feed";
import Head from "./Head";
import Friends from "./Friends";
import Menu from "./Menu";
import Boxes from "./Boxes";
import Poster from "./Poster";

function App() {

  const [chats,setChats] = useState([]);
  const [posterToggle, setPosterToggle] = useState(false);

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
      {posterToggle ? 
				(<Poster 
            setPosterToggle={() => setPosterToggle(!posterToggle)}
        />) : null}
      <Head />
      <Friends popUpChatBox = {popUpChatBox}/>
      <Menu />
      <Feed setPosterToggle={() => setPosterToggle(!posterToggle)}/>
      <Boxes chats={chats} onClose={onClose}/>
    </div>
  );
}
export default App;
