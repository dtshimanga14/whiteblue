import "./css/Menu.css";
import {  Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="Menu"> 
      <div className="inner-menu">
		<div className="admin-menu-head">
			<i className="fa fa-bank"/>Menu
		</div><hr/>
		<Link to="/materials">
			<button className="btn menu-btn-size">
			<span className="icon-position">
				<i className="fa fa-folder-o"/>
			</span>
			<span className="text-button">Materials </span>
			</button>
		</Link>
		<Link to="/exams">
			<button className="btn menu-btn-size">
				<span className="icon-position">
					<i className="fa fa-folder-o"/>
				</span>
				<span className="text-button">Exams</span>
			</button>
		</Link>
		<Link to="/assignment">
			<button className="btn menu-btn-size">
				<span className="icon-position">
					<i className="fa fa-folder-o"/>
				</span>
				<span className="text-button">Assignments</span>
			</button>
		</Link>
		<Link to="/myclass">
			<button className="btn menu-btn-size">
				<span className="icon-position">
					<i className="fa fa-group"/>
				</span>
				<span className="text-button">My Collegues</span>
			</button>
		</Link>
        <Link to="/transcript">
			<button className="btn menu-btn-size">
				<span className="icon-position">
					<i className="fa "/>
				</span>
				<span className="text-button">Transcripts</span>
			</button>
		</Link>
		<Link to="/resume">
			<button className="btn menu-btn-size">
				<span className="text-button">Resume</span>
			</button>
		</Link>
		<Link to="/histories">
			<button className="btn menu-btn-size">
				<span className="icon-position">
					<i className="fa fa-road"/>
				</span>
				<span className="text-button">Activities</span>
			</button>
		</Link>
		<Link to="/payment">
			<button className="btn menu-btn-size">
				<span className="icon-position">
					<i className="fa fa-money"/>
				</span>
				<span className="text-button">Payments</span>
			</button>
		</Link>
		<Link to="/libraries">
			<button className="btn menu-btn-size">
				<span className="icon-position">
					<i className="fa fa-book"/>
				</span>
				<span className="text-button">Libraries</span>
			</button>
		</Link>
		<Link to="/editor">
			<button className="btn menu-btn-size">
				<span className="icon-position">
					<i className="fa fa-file-text"/>
				</span>
				<span className="text-button">Editor</span>
			</button>
		</Link>
		<Link to="/bookmarked">
			<button className="btn menu-btn-size">
				<span className="icon-position">
					<i className="fa fa-bookmark"/>
				</span>
				<span className="text-button">BookMarks</span>
			</button>
		</Link>
	  </div>
    </div>
  );
};
export default Menu;