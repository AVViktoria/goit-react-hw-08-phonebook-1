import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register" className="link">
        Регистрация
      </NavLink>
      <NavLink to="/login" className="link">
        Логин
      </NavLink>
    </div>
  );
}
