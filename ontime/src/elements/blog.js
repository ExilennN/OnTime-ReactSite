import React from "react";
import style from "./blog.module.css";


function Blog(props){

    return(
        <div className={style.body}>
            <div className={style.inner} style={{ backgroundImage: `url(${props.bg})` }} >
                <div className={style.blogWrapper}>
                    <div className={style.blogText}>
                        <h1>{props.caption}</h1>
                        <span>{props.text}</span>
                    </div>
                </div>
            </div>   
        </div>
         
    );
}

export default Blog;