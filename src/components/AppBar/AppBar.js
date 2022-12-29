import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { authSelectors } from '../../redux/auth';
import { Outlet } from 'react-router-dom';
// import { Box } from '@mui/material';

const AppBar=() =>{
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
     {/* <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid #2A363B"
      > */} 
        <header className="header">
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
      {/* </Box> */}

      <Outlet />
    </>
  );
}
export default AppBar;