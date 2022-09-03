import "./css/Post.css";

import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import moment from 'moment';

const Post = ({ d }) => {
  let timePost = moment(new Date()).format('DD-MMMM-YYYY HH:mm:ss');
  
  const [feedBacks, setFeedBacks] = useState(false);
  const [menuSetting, setmenuSetting] = useState(false);
  const [likerIcon, setLikerToggle] = useState(false);
  const [comment, setComment] = useState("");

  const users = { 
    _id : "", 
    personals : {
      avatar : "",
      username : "",
      middlename : ""
    }
  };
    return (
      <div className="Post">
        <div className="flex-box-row">
				<div>
					<img 
            className = "picture-owner-post" 
            src={`http://localhost:8000/image/${users.avatar}`}
          />
				</div>
				<div className="post-owner">
					<div>
						<Link to={`cv/${users._id}`} >{users.personals.username} {' '} {users.personals.middlename}</Link>
					</div>
					<div>
						<span className="date-time-hour">{timePost}</span> <i className="fa fa-globe"/>
					</div>
				</div>
				<span  className="ellipsis-post" onClick={()=> setmenuSetting(!menuSetting)}>
					<i className="fa fa-ellipsis-h"/>
				</span>
			</div>
        <img 
          className = "post-image" src={d.src}
          alt="here must be an"
        />
        <div  className = "post-feeling-frame">
          <button className="btn" >
            <i className="fa fa-thumbs-up"/><span className="text-button">I like</span>
          </button>
          <button className="btn" >
            <i className="fa fa-comments-o"/><span className="text-button">comment</span>
          </button>
          {true ? 
          (<button className="btn" >
            <i className="fa fa-share"/><span className="text-button">share</span>
          </button>):null}
			 </div><hr/>
       <div className="comment-space">
				<div className="poster-comment-image">
					<img className = "picture-owner-post" src={`http://localhost:8000/image/${users.avatar}`}/>
				</div>
				<form className="post-form">
					<input value={comment} id=""
						onChange={({ target }) => setComment(target.value)}  
						className="post-input"
					/>
				</form>
			</div>
    </div>
    );
};
export default Post;