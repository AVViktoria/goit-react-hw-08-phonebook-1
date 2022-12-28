import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

const Navigation=() =>{
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" className="link">
        Home
      </NavLink>
      {isLoggedIn && (
        <>
          <NavLink to="/contacts" className="link">
            Phonebook
          </NavLink>
        </>
      )}
    </nav>
  );
}
export default  Navigation;
