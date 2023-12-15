import React, { Component } from "react";
import Slider from "react-slick";
import style from "./product-slider.module.css";


export default class ProductSliderImages extends Component {
    constructor(props){
        super(props);
    }
  render() {
    let Images = this.props.images;
    const settings = {
      customPaging: function(i) {
        return (
          <a className={style.dotsPreviewWrapper}>
            <img style={{height: "25px", opacity: "60%"}} src={require("../images/" + Images[i].path)} />
          </a>
        );
      },
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <div className={style.sliderWrapper}>
        <Slider {...settings}>
          {Images.map(image => 
            <div>
              <div className={style.sliderBody}>
                <img style={{height: "400px", width: "fit-content"}} src={require("../images/" + image.path)} />
              </div>
            </div>
            )}
        </Slider>
      </div>
    );
  }
}