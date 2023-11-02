import React from 'react'
import "./header_top.css";
import {Link} from "react-router-dom";

function Cart() {
  return (
    <div>
        <Link to="/cart"><span className='cart-icon'></span></Link>
    </div>
  );
}

export default Cart;