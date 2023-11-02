import React from 'react'
import "./header_top.css";
import logo from "../../../images/logo.png";

function Logo() {
  return (
    <div className='logo-wrapper'>
        <img className='logo' src={logo}></img>
        <h1>On Time</h1>
    </div>
  );
}

export default Logo;