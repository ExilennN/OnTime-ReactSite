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
    </div>
  );
}

export default HeaderTop;