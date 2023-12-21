import React from 'react'
import "./header_top.css";

import Logo from "./logo";
import Cart from "./cart";
import Search from "./search";


function HeaderTop() {
  return (
    <div className="header-top-wrapper">
        <Logo></Logo>
        <Search></Search>
        <Cart></Cart>
        <a style={{cursor: 'pointer', color: 'white'}} href='http://127.0.0.1:8000/products'>
          <div ><i  style={{fontSize: '30px'}} className="fas fa-user"></i></div>
        </a>
    </div>
  );
}

export default HeaderTop;