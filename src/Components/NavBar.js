import React, { useState } from 'react';
import "./NavBar.scss";

import Logo from "./../images/logo.svg";
import Hamburger from "./../images/icon-hamburger.svg";
import Close from "./../images/icon-close.svg";

function NavBar({isMobile}) {
  const [clicked, setClicked] = useState(false);
  
  const Menu = clicked ?
    <div className={"Mobile-Dropdown"}>
      <div className={"Mobile-Dropdown-Menu"}>
        <span className={"Mobile-Dropdown-Menu-Item"}>Home</span>
        <span className={"Mobile-Dropdown-Menu-Item"}>About</span>
        <span className={"Mobile-Dropdown-Menu-Item"}>Contact</span>
        <span className={"Mobile-Dropdown-Menu-Item"}>Blog</span>
        <span className={"Mobile-Dropdown-Menu-Item"}>Careers</span>
      </div>
    </div>
    : null;
  
  if (isMobile) {
    return (
      <div>
        <div className={"Navbar mobileNavbar"}>
          <img className={"Navbar-Logo"} src={Logo} alt={"logo"}/>
          <button className={"Navbar-MenuHamburger"} onClick={() => setClicked(!clicked)}><img src={clicked ? Close : Hamburger} alt={"hamburger"}/></button>
        </div>
        {Menu}
      </div>
    );
  } else {
    return (
      <div className={"Navbar"}>
        <img className={"Navbar-Logo"} src={Logo} alt={"logo"}/>
        <div className={"Navbar-Buttons"}>
          <button className={"Navbar-Buttons-Button"}>Home</button>
          <button className={"Navbar-Buttons-Button"}>About</button>
          <button className={"Navbar-Buttons-Button"}>Contact</button>
          <button className={"Navbar-Buttons-Button"}>Blog</button>
          <button className={"Navbar-Buttons-Button"}>Careers</button>
        </div>
        <button className={"Navbar-ReqInv"}>Request Invite</button>
      </div>
    );
  }
}

export default NavBar;