import React from 'react';
import {  useNavigate, useLocation } from 'react-router-dom';
import {
  // Grid,

  Button,

  // Box,
} from '@mui/material';



const AuthNav=()=> {

  let navigate = useNavigate();
let location = useLocation();

const goSignUp = () => {
  navigate(location?.state?.from || '/register');
};

  const goSignIn = () => {
    navigate(location?.state?.from || '/login');
  };
  return (
    <>
      <Button variant="outlined" size="small" onClick = {goSignIn} >
          Sign in
        </Button>
      <Button variant="outlined" size="small" onClick = {goSignUp}>
          Sign up
        </Button>
    </>
  );
}
export default AuthNav;