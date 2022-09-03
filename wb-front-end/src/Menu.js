import "./css/Menu.css";
import {  Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="Menu"> 
      <div className="admin-menu-frame">
		<div className="admin-menu-head">
			<i className="fa fa-bank"/>Menu
		</div><hr/>
		<Link to="/materials">
			<button className="btn admin-btn-size">
			<span className="article-caret">
				<i className="fa fa-folder-o"/>
			</span>
			<span className="text-button">Materials </span>
			</button>
		</Link>
				<Link to="/assess">
					<button className="btn admin-btn-size">
						<span className="article-caret">
							<i className="fa fa-folder-o"/>
						</span>
						<span className="text-button">Assess</span>
					</button>
				</Link>
				<Link to="/myclass">
					<button className="btn admin-btn-size">
						<span className="icon-position-admin">
							<i className="fa fa-group"/>
						</span>
						<span className="text-button">My Collegues</span>
					</button>
				</Link>
        <Link to="/histories">
					<button className="btn admin-btn-size">
						<span className="icon-position-admin">
							<i className="fa fa-road"/>
							<div className="bell-layer" >2</div>
						</span>
						<span className="text-button">Transcripts</span>
					</button>
				</Link>
				<Link to="/histories">
					<button className="btn admin-btn-size">
						<span className="icon-position-admin">
							<i className="fa fa-road"/>
							<div className="bell-layer" >2</div>
						</span>
						<span className="text-button">Activities</span>
					</button>
				</Link>
				<Link to="/billing">
					<button className="btn admin-btn-size">
						<span className="icon-position-admin">
							<i className="fa fa-money"/>
						</span>
						<span className="text-button">Bills</span>
					</button>
				</Link>
				<Link to="/libraries">
					<button className="btn admin-btn-size">
						<span className="article-caret">
							<i className="fa fa-book"/>
						</span>
						<span className="text-button">Libraries</span>
					</button>
				</Link>
				<Link to="/editor">
					<button className="btn admin-btn-size">
						<span className="article-caret">
							<i className="fa fa-file-text"/>
						</span>
						<span className="text-button">Writor</span>
					</button>
				</Link>
				<Link to="/tags">
					<button className="btn admin-btn-size">
						<span className="icon-position-admin">
							<i className="fa fa-bookmark"/>
							<div className="bell-layer" >2</div>
						</span>
						<span className="text-button">BookMarks</span>
					</button>
				</Link>
		</div>
    </div>
  );
};
export default Menu;