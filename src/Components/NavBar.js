import React from 'react';
import "./NavBar.scss";

import Logo from "./../images/logo.svg";

class NavBar extends React.Component{
  render() {
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