import React, { useState } from "react";
import SlickSlider from './SlickSlider';
import { v4 as uuidv4 } from "uuid";
function Banner() {
  const sliders = [
    {
      id:uuidv4(),
      src: "https://teddy.vn/wp-content/uploads/2023/06/thang-6_Banner-Web.jpg",
      alt:"banner1"
    },
    {
      id:uuidv4(),
      src: "https://teddy.vn/wp-content/uploads/2023/05/thang-6_Banner-1.jpg",
      alt:"banner2"
    }
    ,
    {
      id:uuidv4(),
      src: "https://teddy.vn/wp-content/uploads/2022/09/Teddy.jpg",
      alt:"banner3"
    }
  ]
 
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-left"> 
      <SlickSlider listImg={sliders} />
        </div>
        <div className="banner-right">
          <div className="banner-top">
            <img
              className="img-banner-item"
              src="https://teddy.vn/wp-content/uploads/2023/05/thang-6_Banner-1.jpg"
            />
          </div>
          <div className="banner-bottom">
            <img
              className="img-banner-item"
              src="https://teddy.vn/wp-content/uploads/2022/08/Bannerslide-teddy.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
