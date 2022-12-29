import React from 'react';
import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import { Toolbar, Button, Link } from '@mui/material';
const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  let navigate = useNavigate();
  let location = useLocation();

  const goHome = () => {
    navigate(location?.state?.from || '/');
  };
  const goContacts = () => {
    navigate(location?.state?.from || '/contacts');
  };

  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="large" onClick={goHome}>
          Home
        </Button>
      </Toolbar>

      {isLoggedIn && (
        <>
          <Link
            href="/goit-react-hw-08-phonebook-1/contacts"
            onClick={goContacts}
            component="h2"
            variant="h4"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1, ml: 3, color: '#212d35' }}
          >
            Phonebook
          </Link>
        </>
      )}
    </>
  );
};
export default Navigation;
//     <Typography
//   component="h2"
//   variant="h4"
//   color="inherit"
//   align="center"
//   noWrap
//   sx={{ flex: 1, ml: 3, color: '#113044' }}
// >
//   Phonebook
// </Typography>
