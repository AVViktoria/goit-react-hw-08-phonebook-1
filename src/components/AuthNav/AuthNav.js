import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Grid, Button } from '@mui/material';

const AuthNav = () => {
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
      <Grid container mr={3} spacing={2} justifyContent="flex-end">
        <Grid item>
          <Button variant="outlined" size="small" onClick={goSignIn}>
            Sign in
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" size="small" onClick={goSignUp}>
            Sign up
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default AuthNav;
