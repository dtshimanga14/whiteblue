import "./css/Post.css";

const Post = ({ d }) => {
    return (
      <div className="Post">
        <img 
          className = "" src={d.src}
          alt="here must be an"
        />
    </div>
    );
};
export default Post;