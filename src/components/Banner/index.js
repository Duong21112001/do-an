import React from "react";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-left">
          <img
            className="img-banner-main"
            src="https://teddy.vn/wp-content/uploads/2022/09/Teddy.jpg
    "
            alt=""
          />
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
