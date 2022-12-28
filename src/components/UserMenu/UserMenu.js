import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from 'redux/auth/auth-selectors';
import { authOperations } from '../../redux/auth';
import defaultAvatar from '../../icons/penguin-icon.png';

const UserMenu = () => {
  const name = useSelector(getUsername);
  const dispatch = useDispatch();
  const avatar = defaultAvatar;

  return (
    <>
      <div className="userBox">
        <img src={avatar} alt="user" width="30" className="userAvatar" />
        <span className="userGreeting">
          <span className="userName">{name}</span>, welcome to your Phonebook
        </span>
      </div>

      <button
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
      >
        Logout
      </button>
    </>
  );
};

export default UserMenu;
