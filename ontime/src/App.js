import React, {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./page/home";
import CardProduct from "./page/cardProduct";
import Cart from "./page/cart";
import Category from "./page/category";
import Contacts from "./page/contacts";
import DeliveryPayment from "./page/deliveryPayment";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [images, setImages] = useState([]);
  const [comments, setComments] = useState([]);

  const [isLoadedBrand, setIsLoadedBrand] = useState(false);
  const [isLoadedProduct, setIsLoadedProducts] = useState(false);
  const [isLoadedImage, setIsLoadedImage] = useState(false);
  const [isLoadedComment, setIsLoadedComment] = useState(false);

  useEffect(() => {
     fetch('http://127.0.0.1:8000/api/brands')
      .then(response => response.json())
      .then(data => setBrands(data))
      .then(() => setIsLoadedProducts(true))
  }, []);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .then(() => setIsLoadedBrand(true))
  }, []);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/images')
      .then(response => response.json())
      .then(data => setImages(data))
      .then(() => setIsLoadedImage(true))
  }, []);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/comments')
      .then(response => response.json())
      .then(data => setComments(data))
      .then(() => setIsLoadedComment(true))
  }, []);
  if (!isLoadedBrand || !isLoadedProduct || !isLoadedImage || !isLoadedComment) {
    return (
        <div className="App">
          <img className="App-logo" src={require("./images/loading.png")}></img>
        </div>
    );
  }
  if (isLoadedBrand && isLoadedProduct) {
    products.map(product => product.brand = brands.find(brand => brand.id === product.brand_id).name);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home PRODUCTS={products}/>} />    
        <Route path="/product/:id" element={<CardProduct PRODUCTS={products} IMAGES = {images} COMMENTS = {comments}/>} />    
        <Route path="/category/:type" element={<Category PRODUCTS={products}/>} />  
        <Route path="/cart" element={<Cart PRODUCTS={products}/>} />  
        <Route path="/contacts" element={<Contacts/>} />  
        <Route path="/delivery_and_payment" element={<DeliveryPayment/>} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
