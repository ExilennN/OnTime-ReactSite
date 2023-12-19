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
        <a style={{width: "60px", height: "60px"}} href='http://127.0.0.1:8000/products'><i className="fas fa-bars"></i></a>
    </div>
  );
}

export default HeaderTop;