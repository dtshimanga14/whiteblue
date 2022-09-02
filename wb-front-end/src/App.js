
import './css/App.css';

import Feed from "./Feed";
import Head from "./Head";
import Friends from "./Friends";
import Menu from "./Menu";




function App() {
  return (
    <div className="App-grid">
      <Head />
      <Friends/>
      <Menu />
      <Feed/>
    </div>
  );
}
export default App;
