import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import {  useNavigate, useLocation } from 'react-router-dom';

import Button from '@mui/material/Button';
import { authSelectors } from '../../redux/auth';

const Navigation=() =>{
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);


  let navigate = useNavigate();
  let location = useLocation();

  const goHome = () => {
    navigate(location?.state?.from || '/');
  };


  return (
    <>
    <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <Button size="small" onClick = {goHome}>Home</Button>
      <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          Phonebook
        </Typography>
      {isLoggedIn && (
        <>
          <NavLink to="/contacts" className="link">
            Phonebook
          </NavLink>
        </>
      )}
      </Toolbar>
    </>
  );
}
export default  Navigation;
