import "./css/Trick.css";

const Trick =({ togglePosterProps }) => {
  return (
  <div className="wit-frame">
    <div className="wit-header">
        What may be you don t know about
        <span className="wit-field">something</span>
    </div><hr/>
    <div className="wit-core">
        <div className="wit-flex-box">
            <div className="previous-wit" >
                <button className="btn">
                <i className="fa fa-chevron-left"/>
                </button>
            </div>
            <div className="wit-content">
                something
            </div>
            <div className="next-wit" >
                <button className="btn">
                <i className="fa fa-chevron-right"/>
                </button>
            </div>
        </div>
        <span className="wit-authors">
            Author 
        </span>
        <span className="wit-approvaler">
            Approve by
        </span>
        <span >100 ,34  </span>
        </div><hr/>
        <div className="group-btn-wit">
			<button className="btn">
				<i className="fa fa-thumbs-down"/>
			</button>
			<button className="btn">
				<i className="fa fa-share"/><span className="text-button">Share</span>
			</button>
			<button className="btn">
				<i className="fa fa-file-o"/><span className="text-button">Read</span>
			</button>
			<button className="btn" onClick={()=> togglePosterProps()}>
				<i className="fa fa-paper-plane-o"/><span className="text-button">Post</span>
			</button>
		  </div>
    </div>
  );
};
export default Trick;