import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./page/home";
import CardProduct from "./page/cardProduct";
import Cart from "./page/cart";
import Category from "./page/category";
import Contacts from "./page/contacts";
import DeliveryPayment from "./page/deliveryPayment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />    
        <Route path="/product/:id" element={<CardProduct/>} />    
        <Route path="/category/:type" element={<Category/>} />  
        <Route path="/cart" element={<Cart/>} />  
        <Route path="/contacts" element={<Contacts/>} />  
        <Route path="/delivery_and_payment" element={<DeliveryPayment/>} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
