import React, { useEffect, useState } from 'react'
import Layout from "../component/layout/layout";
import {useParams} from "react-router-dom";
import ProductSliderImages from "../elements/product-slider";
import CartButton from '../elements/button';

import style from "./pages-styles/cardProduct.module.css";
import "./pages-styles/tabs.css";

import visa from "../images/visa.png";
import mastercard from "../images/mastercard.png";


function numberWithSpaces(number) { return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");}

function inStock(product){
  let inStockStatus = {text: "Available", color: "darkgreen"};
  if (product.status === "Not Available") {inStockStatus = {text: "Not Available", color: "darkred"}};
  return(
    <>
      <div style={{position: "relative",top: "1px",backgroundColor: inStockStatus.color, width: "8px", height: "8px", borderRadius: "100px"}}></div>
      <span style={{color: inStockStatus.color, fontSize:"17px", marginLeft: "5px"}}>{inStockStatus.text}</span>
    </>
  )
}

function Comments(props){
  let commentsData = props.comments.map(comment=>
    <div className={style.commentBody}>
      <span className={style.commentUser}>{comment.user}</span>
      <span className={style.commentText}>{comment.text}</span>
      <hr/>
    </div>)
  return(
    <>
      {commentsData}
    </>
  );
}

function Specifications(props){

  return(
    <>
      <div className={style.specificationBlock}>
        
        
      <div className={style.specificationDetetailsSection}>
        <div className={style.specificationDetailsBlock}>
            <div className={style.specificationItemBlock}>
              <span className={style.specificationCategory}>Brand</span>
              <span className={style.specificationInner}>{props.product.brand}</span>
            </div>
            <div className={style.specificationItemBlock}>
              <span className={style.specificationCategory}>Collection</span>
              <span className={style.specificationInner}>{props.product.name}</span>
            </div>
            <div className={style.specificationItemBlock}>
              <span className={style.specificationCategory}>Color Case</span>
              <span className={style.specificationInner}>{props.product.color_case}</span>
            </div>
            <div className={style.specificationItemBlock}>
              <span className={style.specificationCategory}>Color Dial</span>
              <span className={style.specificationInner}>{props.product.color_dial}</span>
            </div>
            <div className={style.specificationItemBlock}>
              <span className={style.specificationCategory}>Color Strap</span>
              <span className={style.specificationInner}>{props.product.color_strap}</span>
              </div>
            <div className={style.specificationItemBlock}>
              <span className={style.specificationCategory}>Diameter</span>
              <span className={style.specificationInner}>{props.product.diameter}</span>
            </div>
          </div>

          <div className={style.specificationDetailsBlock}> 
            <div className={style.specificationItemBlock}>
              <span className={style.specificationCategory}>Material Strap</span>
              <span className={style.specificationInner}>{props.product.material_strap}</span>
            </div>
            <div className={style.specificationItemBlock}>
              <span className={style.specificationCategory}>Material Case</span>
              <span className={style.specificationInner}>{props.product.material_case}</span>
            </div>
            <div className={style.specificationItemBlock}>
              <span className={style.specificationCategory}>Movement</span>
              <span className={style.specificationInner}>{props.product.movement}</span>
            </div>
          </div>
      </div>
        
      </div>
    </>
  );
}

class TabContent extends React.Component{
  constructor(props){
    super(props);
    this.state = { activeTab: <Specifications product={this.props.product}/>}
  }

  render(){
    const tabClickHandle = (event) =>{
      var elements = document.querySelectorAll(".tab");
      [].forEach.call(elements, function(el) {
        el.classList.remove("tabSelected");
      });
      event.target.classList.add("tabSelected");
      
      if (event.target.textContent === "Specifications") {  this.setState({activeTab: <Specifications product={this.props.product}/>});  }
      else if (event.target.textContent === "Comments") {this.setState({activeTab: <Comments comments={this.props.comments}/>}); }
    }

    return(
      <div >
        <div className={style.tabsBlock}>
          <button onClick={tabClickHandle} className="tab tabSelected">Specifications</button>
          <button onClick={tabClickHandle} className="tab">Comments</button>
        </div>
        <div className={style.tabContentBlock}>
          {this.state.activeTab}
        </div>
      </div>
    );
  }
}

function CardProduct(props) {
  let {id} = useParams();
  let PRODUCT = props.PRODUCTS.find(product => product.id == id);
  return (
    <div>
        <Layout>
          <div className={style.cardProductWrapper}>
            <div className={style.cardProductWrapperInner}>
              <div className={style.mainInfoBlock}>
                <div className={style.productImageSection}>
                  <ProductSliderImages images = {props.IMAGES.filter((image)=>image.product_id == PRODUCT.id)}></ProductSliderImages>
                </div>
                <div className={style.infoBlock}>
                  <div className={style.nameBlock}>
                    <span className={style.productBrand}>{PRODUCT.brand}</span>
                    <span className={style.productName}>{PRODUCT.name}</span>
                  </div>
                  <hr className={style.separator}></hr>
                  <br></br>
                  <div className={style.inStockBlock}>
                    <span className={style.priceText}>$ {numberWithSpaces(PRODUCT.price)}</span>
                    {inStock(PRODUCT)}
                  </div>
                  <div className={style.orderInfo}>
                    <ul>
                      <li>If you place an order on workdays before 3 p.m., we will ship the package the same day.</li>
                      <li>Free shipping & returns</li>
                      <li>Always insured</li>
                    </ul>
                  </div>
                  <div className={style.paySection}>
                    <div className={style.payBlock}><img className={style.visaImg} src={visa}/></div>
                    <div className={style.payBlock}><img className={style.mastercardImg} src={mastercard}/></div>
                  </div>
                  <div className={style.btnBlock}>
                    <CartButton class_name={style.buyBtn} text="Buy Now" product={PRODUCT}></CartButton>
                    <button className={style.personilizeBtn}>Personalize Order</button>
                  </div>
                </div>
              </div>
              <div className={style.aboutSection}>
                <div>
                  <TabContent comments={props.COMMENTS.filter((comment)=>comment.product_id == PRODUCT.id)} product = {PRODUCT}></TabContent>
                </div>
              </div>
              
            </div>
          </div>
          
        </Layout>
    </div>
  );
}

export default CardProduct;
