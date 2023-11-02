import React, { Component } from "react";

import style from "./slider.module.css";
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";

import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 10000
    };
    return (
      <div className={style.sliderWrapper}>
        <Slider {...settings}>
          <div>
            <div className={style.sliderContainer}>
              <img className={style.imgSlider} src={banner1}/>
            </div>
          </div>
          <div>
            <div className={style.sliderContainer}>
              <img className={style.imgSlider} src={banner2}/>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}


