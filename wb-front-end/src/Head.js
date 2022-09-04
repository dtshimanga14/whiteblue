import './css/Head.css';
import { Link } from 'react-router-dom';

const Head = (props) => {
  const {avatar, middlename, username} = props;
  return (
    <div className="Head">
      <img className="profil" 
						 src={avatar !== '' ? `http://localhost:8000/image/${avatar}` : "./photos/defaults/user.jpg"}
			/> 
      <span className="great-tittle-ff">Whiteblue </span>
      <span className="header-names">
        {username} {' '} {middlename}
      </span>
      <div className="button-set">
          <ol className="listnav">
            <button className="btn btn-bottom-border" >
              <i class="fa-solid fa-school-flag"></i>
            </button>
            <button className="btn bell-btn btn-bottom-border" >
              <i class="fa-solid fa-bell" />
            </button>
            <Link to="/">
              <button className="btn bell-btn btn-bottom-border" >
                <span className="bell-layer">logout</span>
              </button>
            </Link>
          </ol>
      </div>
    </div>
  );
};
export default Head;