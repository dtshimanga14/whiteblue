
import './css/App.css';

import Feed from "./Feed";
import Head from "./Head";
import Friends from "./Friends";
import Menu from "./Menu";
import Boxes from "./Boxes";

const chats = [{ name : "daniel"}, { name : "kassampu"}];

function App() {
  return (
    <div className="App-grid">
      <Head />
      <Friends/>
      <Menu />
      <Feed/>
      <Boxes chats={chats} />
    </div>
  );
}
export default App;
