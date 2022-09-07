import './css/Head.css';
import { Link, useNavigate } from 'react-router-dom';

const Head = (props) => {
  const {avatar, middlename, username} = props;
  const navigate = useNavigate();
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
              <i className="fa-solid fa-school-flag"/>
            </button>
            <button className="btn bell-btn btn-bottom-border" >
              <i className="fa-solid fa-bell" />
            </button>
            <Link to="/">
              <button className="btn bell-btn btn-bottom-border" 
                onClick={()=> {
                  localStorage.removeItem("auth-token");
                  navigate(`/`);
                }}>
                <span className="bell-layer">logout</span>
              </button>
            </Link>
          </ol>
      </div>
    </div>
  );
};
export default Head;