import { useDispatch } from 'react-redux';
// import { getUsername } from 'redux/auth/auth-selectors';
import { authOperations } from '../../redux/auth';
// import defaultAvatar from '../../icons/penguin-icon.png';

import { Button } from '@mui/material';
const UserMenu = () => {
  // const name = useSelector(getUsername);
  const dispatch = useDispatch();
  // const avatar = defaultAvatar;

  return (
    <>
      
      <Button variant="contained" sx={{ mr: 5,  }}  size="small" onClick={() => {
          dispatch(authOperations.logOut());
        }}>
        Logout
        </Button>
    </>
  );
};

export default UserMenu;



 //<div className="userBox">
   //     <img src={avatar} alt="user" width="30" className="userAvatar" />
   //     <span className="userGreeting">
   //       <span className="userName">{name}</span>, welcome to your Phonebook
   //     </span>
 //     </div> 