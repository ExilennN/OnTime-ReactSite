import React from 'react'
import Layout from "../component/layout/layout";
import style from "./pages-styles/category.module.css";

import rLogo from "../images/rolexLogo.png";
import oLogo from "../images/omegaLogo.png";
import ppLogo from "../images/patekPLogo.png";

import {Products} from "./cardProduct";
import { useParams } from 'react-router-dom';
import ProductPreview from '../elements/product-preview';
import { useNavigate } from 'react-router-dom';

let PRODUCTS = Products();




function BrandItem(props){
  let link = "/category/watches";
  const navigate = useNavigate();
  return(
    <div className={style.brandBody}>
      <img onClick={()=>navigate(link)} className={style.brandImg} src={props.img}/>
    </div>
  )

}

function Brands() {
  
  return(
    <div style={{display: "flex", flexDirection: "column"}}>
      <h1 style={{alignSelf:"center"}}>Brands</h1>
      <div className={style.brandBlock}>
        <BrandItem img={rLogo} text="Rolex"></BrandItem>
        <BrandItem img={oLogo} text="Omega"></BrandItem>
        <BrandItem img={ppLogo} text="Patek Philippe"></BrandItem>
      </div>
    </div>
    
  )
}
function showProducts(){
  let productsData = PRODUCTS.map(product=><ProductPreview id={product.id} productImg={product.previewImage} name={product.name} brand={product.brand} productPrice={product.price}></ProductPreview>)
  return(
    <>
      {productsData}
    </>
  )
}

function Watches(){

  return(
    <div style={{display: "flex", flexDirection: "column"}}>
      <h1 style={{alignSelf:"center"}}>Watches</h1>
      <div className={style.watchesBody}>
        {showProducts()}{showProducts()}
      </div>
    </div>
    
  )
}

function Category() {
  let element;
  let {type} = useParams();
  console.log(type);
  if (type === "watches") { element = <Watches></Watches>}
  else { element = <Brands></Brands>}
  return (
    <div>
      <Layout>
        <div>
          {element}
        </div>
      </Layout>
    </div>
  );
}

export default Category;