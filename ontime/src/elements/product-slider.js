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
            <img style={{height: "25px", opacity: "60%"}} src={Images[i]} />
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
          <div>
            <div className={style.sliderBody}>
              <img style={{height: "400px", width: "fit-content"}} src={Images[0]} />
            </div>
          </div>
          <div>
            <div className={style.sliderBody}>
              <img style={{height: "400px", width: "fit-content"}} src={Images[1]} />
            </div>
          </div>
          <div>
            <div className={style.sliderBody}>
              <img style={{height: "400px", width: "fit-content"}} src={Images[2]} />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}