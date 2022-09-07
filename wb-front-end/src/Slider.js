import "./css/Slider.css";
import {  Link } from 'react-router-dom';

const LeftArrow = (props) => {
    return (
      <div className="backArrow arrow" onClick={props.goToPrevSlide}>
        <i className="fa fa-arrow-left" aria-hidden="true"></i>
      </div>
    );
  }
  
  
  const RightArrow = (props) => {
    return (
      <div className="nextArrow arrow" onClick={()=>{
          props.onLoadMoreResult();
          props.goToNextSlide();
      }}>
        <i className="fa fa-arrow-right" aria-hidden="true"></i>
      </div>
    );
  } 

const Slider = (props) => {
  const suggestLenth = 2;
  const avatar = "";

  return (
    <div className="card-slider">
      <LeftArrow goToPrevSlide={props.goToPrevSlide} />
      <RightArrow 
        goToNextSlide={()=> props.goToNextSlide(suggestLenth)} 
      />
      <div className="flex-suggestion-frame" style={{
        transform: `translateX(${props.translateValue}px)`,
        transition: 'transform ease-out 0.45s'
      }}>
		  {props.suggestions.map((friend,key) =>
			(<div className="friends-suggestions" >
			  <div className="suggestion-friends-name">
				<Link to={`cv/${friend._id}`}>
				  <span> {friend.username}
				  </span>{' '}
				  <span>
					{friend.middlename}
				  </span>
				</Link>
			  </div>
				<div>
				  <img className="suggestion-image" 
				    src={avatar !== '' ? 
				    `http://localhost:8000/image/${avatar}` : 
				    "./photos/defaults/user.jpg"}
				   />
				</div>
				<div className="suggestion-btn-frame">
				  <button className="btn" >
					<i className="fa fa-link"/>
				  </button>
				  <button className="btn" >
					<i className="fa fa-feed"/>
				  </button>
				</div>
				<div className="suggestion-fields-frame">
				  <div className="suggestion-profession">
					Physician,degree Phd
				  </div>
				  <div className="suggestion-profession">
					Genetic biology at M.I.T
				  </div>
				</div>
			</div>)
		  )}
		</div>
	</div>
  );
};
export default Slider;