import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from 'redux/auth/auth-selectors';
import { authOperations } from '../../redux/auth';

const UserMenu = () => {
  const name = useSelector(getUsername);
  const dispatch = useDispatch();
  return (
    <>
      <h3> {name}</h3>
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
