import React from 'react'
import style from "./product-preview.module.css";
import { useNavigate } from 'react-router-dom';

function ProductPreview(props) {
  let link = "/product/" + props.id;
  const navigate = useNavigate();
  return (
    <div className={style.productItem}>
      <img className={style.productImg} src={props.productImg}/>
      <div className={style.productTextBlock}>
        <span className={style.productBrand}>{props.brand}</span>
        <span className={style.productName}>{props.name}</span>
        <span className={style.productPrice}>{props.productPrice}$</span>
      </div>
      <button onClick={()=>navigate(link)} className={style.productBtn}>Buy</button>
    </div>
  );
}

export default ProductPreview;
