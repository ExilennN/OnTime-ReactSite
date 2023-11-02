import React from 'react'
import Layout from "../component/layout/layout";
import {useParams} from "react-router-dom";

import ProductSliderImages from "../elements/product-slider";
import CartButton from '../elements/button';

import style from "./pages-styles/cardProduct.module.css";
import "./pages-styles/tabs.css";

import previewProductImg1 from "../images/product1.png";
import osImg1 from "../images/OS1.avif";
import osImg2 from "../images/OS2.avif";
import osImg3 from "../images/OS3.avif";

import previewProductImg2 from "../images/product2.png";
import ryImg1 from "../images/RY1.jpg";
import ryImg2 from "../images/RY2.jpg";
import ryImg3 from "../images/RY3.jpg";

import previewProductImg3 from "../images/product3.png";
import rdImg1 from "../images/RD1.jpg";
import rdImg2 from "../images/RD2.jpg";
import rdImg3 from "../images/RD3.jpg";

import previewProductImg4 from "../images/product4.png";
import ppImg1 from "../images/PP1.jpg";
import ppImg2 from "../images/PP2.jpg";
import ppImg3 from "../images/PP3.jpg";

import visa from "../images/visa.png";
import mastercard from "../images/mastercard.png";

const PRODUCTS = [
  {id: 0, brand: "Omega", name: "Seamaster", price: "7 350", 
    specification: {colorCase: "Silver", colorDial: "Black", colorStrap: "Black", diameter: "42 mm", materialStrap: "Rubber", materialCase: "Stainless steel", movement: "Automatic"}, 
    previewImage: previewProductImg1, images: [osImg1, osImg2, osImg3], inStock: true,
    comments: [{ user: "Amelie Lacroix", text: "Wonderfull watch, stylish and comfortable. Buy this one for my cherie, she was so exited"},
               { user: "Yasuo", text: "Some good choice for price!"}]},
               
  {id: 1, brand: "Rolex",name: "Yacht-Master 40 Blue", price: "14 495",
    specification: {colorCase: "Silver", colorDial: "Blue", colorStrap: "Silver", diameter: "42 mm", materialStrap: "Metal", materialCase: "Stainless steel", movement: "Automatic"}, 
    previewImage: previewProductImg2, images: [ryImg1, ryImg2, ryImg3], inStock: true,
    comments: [{ user: "Sylvanas Windrunner", text: "The Wrath of the Lich King was nothing. Wait until you see the Wrath of the Banshee Queen!"},
               { user: "Jaina Proudmoore", text: "All things change, whether from inside out or the outside in. That is what magic is. And we are magic too."},
               { user: "Natasha Romanoff", text: "At Some Point, We All Have To Choose Between What The World Wants You To Be And Who You Are. Steve, You Know What’s About To Happen. Do You Really Want To Punch Your Way Out Of This"}]},

  {id: 2, brand: "Rolex", name: "Daytona", price: "33 750",
    specification: {colorCase: "Silver", colorDial: "Cosmic Black", colorStrap: "Silver", diameter: "42 mm", materialStrap: "Metal", materialCase: "Stainless steel", movement: "Automatic"}, 
    previewImage: previewProductImg3, images: [rdImg1, rdImg2, rdImg3], inStock: false,
    comments: [{ user: "Severus Snape", text: "This one is good, but not as good as I am."},
               { user: "Anonimus", text: "I saw some better of this one model. So take this one in your danger."}]},

  {id: 3, brand: "Patek Philippe", name: "Calatrava Ladies", previewImage: previewProductImg4,price: "31 940",
    specification: {colorCase: "Silver", colorDial: "White", colorStrap: "Black", diameter: "35 mm", materialStrap: "Lether", materialCase: "Stainless steel", movement: "Automatic"}, 
    images: [ppImg1, ppImg2, ppImg3], inStock: true,
    comments: [{ user: "Anonimus", text: "Buy this one for my dauther, she was happy about style and looks of this watch. Thank you for fast delivery!"},
               ]},
];

export function Products() { return PRODUCTS; }

function inStock(product){
  let inStockStatus = {text: "Available", color: "darkgreen"};
  if (!product.inStock) {inStockStatus = {text: "Not Available", color: "darkred"}};
  return(
    <>
      <div style={{position: "relative",top: "1px",backgroundColor: inStockStatus.color, width: "8px", height: "8px", borderRadius: "100px"}}></div>
      <span style={{color: inStockStatus.color, fontSize:"17px", marginLeft: "5px"}}>{inStockStatus.text}</span>
    </>
  )
}


function Comments(props){
  let commentsData = props.product.comments.map(comment=>
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
              <span className={style.specificationInner}>{props.product.specification.colorCase}</span>
            </div>
            <div className={style.specificationItemBlock}>
              <span className={style.specificationCategory}>Color Dial</span>
              <span className={style.specificationInner}>{props.product.specification.colorDial}</span>
            </div>
            <div className={style.specificationItemBlock}>
              <span className={style.specificationCategory}>Color Strap</span>
              <span className={style.specificationInner}>{props.product.specification.colorStrap}</span>
              </div>
            <div className={style.specificationItemBlock}>
              <span className={style.specificationCategory}>Diameter</span>
              <span className={style.specificationInner}>{props.product.specification.diameter}</span>
            </div>
          </div>

          <div className={style.specificationDetailsBlock}> 
            <div className={style.specificationItemBlock}>
              <span className={style.specificationCategory}>Material Strap</span>
              <span className={style.specificationInner}>{props.product.specification.materialStrap}</span>
            </div>
            <div className={style.specificationItemBlock}>
              <span className={style.specificationCategory}>Material Case</span>
              <span className={style.specificationInner}>{props.product.specification.materialCase}</span>
            </div>
            <div className={style.specificationItemBlock}>
              <span className={style.specificationCategory}>Movement</span>
              <span className={style.specificationInner}>{props.product.specification.movement}</span>
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
      else if (event.target.textContent === "Comments") { this.setState({activeTab: <Comments product={this.props.product}/>}); }
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

function CardProduct() {
  let {id} = useParams();
  let PRODUCT = PRODUCTS[id];
  return (
    <div>
        <Layout>
          <div className={style.cardProductWrapper}>
            <div className={style.cardProductWrapperInner}>
              <div className={style.mainInfoBlock}>
                <div className={style.productImageSection}>
                  <ProductSliderImages images = {PRODUCT.images}></ProductSliderImages>
                </div>
                <div className={style.infoBlock}>
                  <div className={style.nameBlock}>
                    <span className={style.productBrand}>{PRODUCT.brand}</span>
                    <span className={style.productName}>{PRODUCT.name}</span>
                  </div>
                  <hr className={style.separator}></hr>
                  <br></br>
                  <div className={style.inStockBlock}>
                    <span className={style.priceText}>$ {PRODUCT.price}</span>
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
                  <TabContent product = {PRODUCT}></TabContent>
                </div>
              </div>
              
            </div>
          </div>
          
        </Layout>
    </div>
  );
}

export default CardProduct;
