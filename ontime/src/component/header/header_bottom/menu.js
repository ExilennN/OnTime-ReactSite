import React from 'react'
import {Link} from "react-router-dom";
import "./header_bottom.css";

function Menu() {
  return (
    <div className='nav-wrapper'>   
      <div className='nav-item'><Link onClick={() => window.scrollTo(0, 0)} className='nav-item-text' to="/">Home</Link></div>
      <div className='nav-item'><Link onClick={() => window.scrollTo(0, 0)} className='nav-item-text' to="/category/watches">Watches</Link></div>
      <div className='nav-item'><Link onClick={() => window.scrollTo(0, 0)} className='nav-item-text' to="/category/brands">Brands</Link></div>
      <div className='nav-item'><Link onClick={() => window.scrollTo(0, 0)} className='nav-item-text' to="/contacts">Contact Us</Link></div>
      <div className='nav-item'><Link onClick={() => window.scrollTo(0, 0)} className='nav-item-text' to="/delivery_and_payment">Delivery and Payment</Link></div>
    </div>
  );
}

export default Menu;