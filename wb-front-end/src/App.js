import logo from './logo.svg';
import './css/App.css';
import Feed from "./Feed";
import Post from "./Post";

function App() {
  const feeds = [
    { src : "/pics/black-family.jpg"},
    { src : "/pics/hawai.webp"},
];
  return (
    <div className="App">
      <header className="App-header">Here will be the header</header>
      {feeds.map((feed) => (<Post d ={feed}/>))}
    </div>
  );
}

export default App;
