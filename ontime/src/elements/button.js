import React from "react";
import { setCookie, getCookie } from "./cookies";


function Button({class_name, text, product}){
    const clickHandle = () =>{
        if ((getCookie(`${product.name}${product.brand}`)) !== null){
            setCookie(`${product.name}${product.brand}`, parseInt(getCookie(`${product.name}${product.brand}`))+1, 999);
        }
        else { setCookie(`${product.name}${product.brand}`, 1, 999); }
        
    }
    return(
        <>
        <button onClick={clickHandle} className={class_name}>{text}</button>
        </>
    )
}
export default Button;