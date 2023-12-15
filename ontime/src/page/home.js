import React, { useEffect, useState } from 'react';
import Layout from "../component/layout/layout";
import style from "./pages-styles/home.module.css";
import Slider from "../elements/slider"
import Blog from "../elements/blog";

import ProductPreview from '../elements/product-preview';

import bg1 from "../images/watchesBG.webp";
import bg2 from "../images/watchesBG1.jpg";

let PRODUCTS;

function ShowProducts(){
  let Products = PRODUCTS.slice(PRODUCTS.length-4)
  let productsData =  Products.map(product=><ProductPreview id={product.id} productImg={product.preview_image} name={product.name} brand={product.brand} productPrice={product.price}></ProductPreview>)
  return(
    <>
      {productsData}
    </>
  )
}

export function Products() { return PRODUCTS; }

function Home(props) {
  PRODUCTS = props.PRODUCTS;
  return (
    <div>
      <Layout>
        <Slider></Slider>
        <div className={style.aboutStoreWrapper}>
          <div className={style.aboutStoreSection}>
            <span className={style.aboutCaption}>The On Time® watch store</span>
            <p className={style.aboutText}> We at On Time® are committed to helping you find the perfect watch. </p>
            <p className={style.aboutText}> And we make every effort so you get a good deal on buying watches. Our special offers change weekly! Subscribe to our newsletter to hear about our latest deals.</p>
            <p className={style.aboutText}> Browse our online store to find exclusive watches for men and elegant women’s watches.</p>
          </div>     
        </div>
        <h1 className={style.previewProductSectionCaption}>Our New Products</h1>
        <div className={style.previewWatchesWrapper}>
          {<ShowProducts/>}
        </div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#17130f"}}>
          <Blog bg={bg1} caption="Timeless Design and Style" text="The design philosophy behind luxury watches embodies timeless elegance. Classic designs endure through generations, maintaining their appeal and relevance. Whether it's the simplicity of a minimalist dial or the complexity of a chronograph, the aesthetic appeal of these watches is as much about their timeless design as it is about functionality."></Blog>
          <Blog bg={bg2} caption="Discover new You" text="Discover the language of luxury through our array of brands, each with its own unique story and heritage. From the revered icons to the emerging stars in the watchmaking universe, our collection represents the finest in quality and style."></Blog>
        </div>
        
      </Layout>
    </div>
  );
}

export default Home;