import React from "react";

import HeaderTop from "../header/header_top/header_top";
import Menu from "../header/header_bottom/menu";

import Footer from "../footer/footer";


function Layout(props) {
    return (
        <div>
          <HeaderTop/>
          <Menu></Menu>
          <div style={{minHeight: "100vh"}}>
            {props.children}
          </div>  
          <Footer></Footer>
        </div> 
    );
  }
  
export default Layout;