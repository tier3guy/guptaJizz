import React from 'react';
import '../CSS/Navbar.css';

import Logo from './Logo';
import NavItem from './NavItem';
import ToggleButton from './ToggleButton';

const Navbar = () => {
  return (
    <div>
      <nav className ="navbar fixed-top navbar-expand-lg">
        <div className ="container-fluid nav-container">
          <Logo/>
          <ToggleButton/>
          <div className ="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
                <NavItem name="Home" link="/"/>
                <NavItem name="About" link="/about"/>
                <NavItem name="Menu" link="/menu"/>
                <NavItem name="Services" link="/service"/>
                <NavItem name="Pricing" link="/pricing"/>
                <NavItem name="Book Order" link="/order"/>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
