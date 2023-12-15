import React from 'react'
import Layout from "../component/layout/layout";
import style from "./pages-styles/category.module.css";

import rLogo from "../images/rolexLogo.png";
import oLogo from "../images/omegaLogo.png";
import ppLogo from "../images/patekPLogo.png";

import { useParams } from 'react-router-dom';
import ProductPreview from '../elements/product-preview';
import { useNavigate } from 'react-router-dom';

let PRODUCTS;
let TYPE;



function BrandItem(props){
  let link = "/category/" + props.text;
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
        <BrandItem img={ppLogo} text="PatekPhilippe"></BrandItem>
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
  let element;
  let {type} = useParams();
  if (type === "watches") { element = <Watches></Watches>}
  else if (type === "Omega") { element = <Watches brand="5"></Watches>}
  else if (type === "Rolex") { element = <Watches brand="6"></Watches>}
  else if (type === "PatekPhilippe") { element = <Watches brand="7"></Watches>}
  else if (type === "brands") { element = <Brands></Brands>}
  else {element = <Watches></Watches>}
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