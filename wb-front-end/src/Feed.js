import Post from "./Post";



const Feed = () => {
  const feeds = [
    { src : "./pics/black-family.jpg"},
    { src : "./pics/hawai.webp"},
  ];
  return (
    <div>
      {feeds.map((feed) => (<Post d ={feed}/>))}
    </div>
  );
};
export default Feed;