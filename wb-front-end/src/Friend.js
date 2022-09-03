import "./css/Friend.css";
import moment from 'moment';
    
const Friend = ({ user, popUpChatBox }) => {
  return(
    <div className="friend_plholder" onClick={() => popUpChatBox(user)}>
        <img className="image-friend" 
            src={user.avatar !== '' ? 
            `http://localhost:8000/image/${user.avatar}` : 
            "./photos/defaults/user.jpg"}
        />
        <span className="names-friend">
            {user.firstname}  {user.middlename}</span>
        <span>
            <div  className={user.isConnected ? "connected-green-status" :"connected-gray-status"}/>
        </span>
        <div className="last-seen">{moment(user.lastSeenOnline).fromNow()}</div>
    </div>
  );
};
export default Friend;