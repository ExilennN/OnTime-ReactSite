import React from 'react'
import style from "./footer.module.css";
import facebookIcon from "../../images/facebook_grey.png";
import instaIcon from "../../images/instagram_grey.png";
import tiktokIcon from "../../images/tiktok_grey.png";

import facebookIconHover from "../../images/facebook.png";
import instaIconHover from "../../images/instagram.png";
import tiktokIconHover from "../../images/tiktok.png";

import Img from "../../elements/img"

function Socials() {
  return (
    <div className={style.socialsWrapper}>
        <Img class_name={style.socialsImgF} imgSrc={facebookIcon} hoverImgSrc={facebookIconHover}></Img>
        <Img class_name={style.socialsImgI} imgSrc={instaIcon} hoverImgSrc={instaIconHover}></Img>
        <Img class_name={style.socialsImgT} imgSrc={tiktokIcon} hoverImgSrc={tiktokIconHover}></Img>
    </div>
  );
}

export default Socials;