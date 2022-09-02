import "./css/Boxes.css";

import Box from "./Box";

const Boxes = ({ chats }) => {
    return (<div className ="Boxes">
      {chats.map(chat => <Box />)}
    </div>)
};
export default Boxes;