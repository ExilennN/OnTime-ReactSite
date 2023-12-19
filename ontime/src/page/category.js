import React from 'react'
import Layout from "../component/layout/layout";
import style from "./pages-styles/category.module.css";

import { useParams } from 'react-router-dom';
import ProductPreview from '../elements/product-preview';
import { useNavigate } from 'react-router-dom';

let PRODUCTS;
let BRANDS;



function BrandItem(props){
  let link = "/category/" + props.id;
  const navigate = useNavigate();
  return(
    <div className={style.brandBody}>
      <img onClick={()=>navigate(link)} className={style.brandImg} src={require("../images/" + props.img)}/>
    </div>
  )

}

function Brands() {
  
  return(
    <div style={{display: "flex", flexDirection: "column"}}>
      <h1 style={{alignSelf:"center"}}>Brands</h1>
      <div className={style.brandBlock}>
        {BRANDS.map(brand=><BrandItem id={brand.id} img={brand.image} text={brand.name}></BrandItem>)}
      </div>
    </div>
    
  )
}
function showProducts(){
  let productsData = PRODUCTS.map(product=><ProductPreview id={product.id} productImg={product.preview_image} name={product.name} brand={product.brand} productPrice={product.price}></ProductPreview>)
  return(
    <>
      {productsData}
    </>
  )
}

function Watches(props){
  if (props.brand !==undefined) {
    PRODUCTS = PRODUCTS.filter(product => product.brand_id == props.brand);
  }
  return(
    <div style={{display: "flex", flexDirection: "column"}}>
      <h1 style={{alignSelf:"center"}}>Watches</h1>
      <div className={style.watchesBody}>
        {showProducts()}
      </div>
    </div>
    
  )
}

function Category(props) {
  PRODUCTS = props.PRODUCTS;
  BRANDS = props.BRANDS;
  let element;
  let {type} = useParams();
  if (type === "watches") { element = <Watches></Watches>}
  else if (type === "brands") { element = <Brands></Brands>}
  else {element = <Watches brand={type}></Watches>}
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