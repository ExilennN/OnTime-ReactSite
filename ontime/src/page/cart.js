import React from 'react'
import Layout from "../component/layout/layout";

import { useNavigate } from 'react-router-dom';

import style from "./pages-styles/cart.module.css";
import "./pages-styles/catalogBtn.css";

import { setCookie, getCookie, eraseCookie } from '../elements/cookies';

let PRODUCTS;

function numberWithSpaces(number) { return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");}

function getInCart() { 
  let inCartProducts = [];
  PRODUCTS.forEach(element => {
    if ((getCookie(`${element.name}${element.brand}`)) !== null){
      inCartProducts.push({cookie: element, value: parseInt(getCookie(`${element.name}${element.brand}`))})
    }
  });

  return inCartProducts;
}

function CartItem(props){
  const deleteHandle = () =>{
    eraseCookie(`${props.name}${props.brand}`);
    document.location.reload();
  }
  
  const valueChangeHandle = (value) =>{
    let cookieValue = getCookie(`${props.name}${props.brand}`);
    setCookie(`${props.name}${props.brand}`, parseInt(cookieValue)+value, 999);
    document.location.reload();
    if (getCookie(`${props.name}${props.brand}`) === "") { eraseCookie(`${props.name}${props.brand}`); document.location.reload(); }
  }

  return(
    <div className={style.cartItemBody}>
      <div className={style.imgContainer}>
        <img src={require(`../images/${props.img}`)}/>  
      </div>
      
      <div className={style.productNameGroup}>
        <span className={style.brand}>{props.brand}</span>
        <span>{props.name}</span>
      </div>
      <span className={style.productPrice}>$ {props.price}</span>
      <div className={style.valueBlock}>
        <button onClick={() => valueChangeHandle(-1)} className={style.valueBtn}>{'<'}</button>
        <span id='valueText' className={style.productValueText}>{props.value}</span>
        <button onClick={() => valueChangeHandle(1)} className={style.valueBtn}>{'>'}</button>
      </div>
      
      <button className={style.removeBtn} onClick={deleteHandle}>X</button>
    </div>
  );
}

function Cart(props) {
  PRODUCTS = props.PRODUCTS;
  const orderHandle = () => {
    inCartProducts.map(product => eraseCookie(`${product.cookie.name}${product.cookie.brand}`));
    document.location.reload();
  }

  let link = "/category/watches";
  const navigate = useNavigate();

  let inCartProducts = getInCart();
  let cartData = inCartProducts.map(product => <CartItem id={product.cookie.id} value={product.value} img={product.cookie.preview_image} brand={product.cookie.brand} name={product.cookie.name} price={product.cookie.price}></CartItem>)
  if (inCartProducts.length === 0) {
    cartData = 
    <div className={style.emptyCartText}>
      <span >There is no items in your cart yet. Go and check out our wathches!</span>
    </div>
  }

  let totalPrice = 0;
  inCartProducts.map(product => totalPrice+=product.cookie.price*product.value);
  return (
    <div>
      <Layout>
        <div className={style.wrapper}>
          <h1>Cart</h1>
          <div className={style.body}>
          {cartData}
          <span className={style.total}>Total: $ {numberWithSpaces(totalPrice)}</span>
          <div className={style.btnBlock}>
            <button onClick={orderHandle} className={style.orderBtn}>Order</button>
            <button onClick={()=>navigate(link)} id="catalogBtn">Go to Watches Catalog</button>
          </div>
        </div>
      </div>
      </Layout>
    </div>
  );
}

export default Cart;