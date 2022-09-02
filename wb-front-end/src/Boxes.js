import "./css/Boxes.css";

import Box from "./Box";

const Boxes = ({ chats, onClose }) => {
  return (<div className ="Boxes">
    {chats.map(chat => 
      (<Box chat={chat} onClose = {onClose}/>)
    )}
  </div>)
};
export default Boxes;