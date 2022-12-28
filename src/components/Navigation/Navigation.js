import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" style={styles.link}>
        Home
      </NavLink>

      {isLoggedIn && (
        <>
          <NavLink to="/contacts" style={styles.link}>
            Phonebook
          </NavLink>
          <NavLink to="/upload" style={styles.link}>
            Loading
          </NavLink>
        </>
      )}
    </nav>
  );
}

// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// const Navigation = () => {
//   const [value, setValue] = useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   return (
//     <div>
//       <div value={value} onChange={handleChange} centered>
//         <a label="home" component={NavLink} to="/" />
//         <a label="login" component={NavLink} to="/login" />
//         <a label="logout" component={NavLink} to="/logout" />
//       </div>
//       <span></span>
//     </div>
//   );
// };
// export default Navigation;
