import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
  return (
    <li className ="nav-item">
      <NavLink className ="nav-link navItem" aria-current="page" to = {props.link}>{props.name}</NavLink>
    </li>
  );
}

export default NavItem;
