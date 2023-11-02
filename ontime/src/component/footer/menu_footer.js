import React from 'react'
import style from "./footer.module.css";
import {Link} from "react-router-dom";

function MenuFooter() {
  return (
    <div className={style.menuFooterWrapper}>
      <div className={style.navItem}><Link onClick={() => window.scrollTo(0, 0)} className={style.navItemText} to="/">Home</Link></div>
      <div className={style.navItem}><Link onClick={() => window.scrollTo(0, 0)} className={style.navItemText} to="/category/watches">Watches</Link></div>
      <div className={style.navItem}><Link onClick={() => window.scrollTo(0, 0)} className={style.navItemText} to="/contacts">Contacts</Link></div>
      <div className={style.navItem}><Link onClick={() => window.scrollTo(0, 0)} className={style.navItemText} to="/delivery_and_payment">Delivery and Payment</Link></div>
    </div>
  );
}

export default MenuFooter;