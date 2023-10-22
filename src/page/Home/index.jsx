import React from "react";
import "./style.css";
import Slider from "react-slick";
import { Route, Routes } from "react-router-dom";
import { render } from "react-dom";
import About from "../about"
import Footer from "../../components/Footer";
import Contact from "../contact";
const ImageCarousel = () => {
 

  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 9000,
    responsive: [
      {
        breakpoint: 980, // breakpoint from width 768 up
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="hidden md:block">
      <div className="sow-slider-base relative h-96">
        <Slider {...settings}>
          <div>
            {" "}
            <img
              src="https://glo365.vn/wp-content/uploads/2023/10/Home-slider-desk-780x94-PNVN-20-10.png"
              alt="Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src="https://glo365.vn/wp-content/uploads/2023/09/Home-slider-desk-780x94-Morpheus8.png"
              alt="Image"
              className="w-full h-full object-cover"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export function Home() {
  
  return (
    <div className="w-screen">
   
      <Contact id="contact-section"/>
      <Footer />
    </div>
  );
}
