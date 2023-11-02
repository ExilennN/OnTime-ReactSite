import React from 'react'
import style from "./footer.module.css";

import MenuFooter from './menu_footer';
import Socials from './socials';
import Info from "./info";

function Footer() {
  return (
    <div className={style.footerWrapper}>
        <MenuFooter></MenuFooter>
        <Socials></Socials>
        <Info></Info>
    </div>
  );
}

export default Footer;