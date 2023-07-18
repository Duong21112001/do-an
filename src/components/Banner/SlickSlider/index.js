import React, { useState, useEffect } from "react";
import "./style.css";
const Slider = (props) => {
  const { listImg } = props;
  console.log(listImg[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    currentIndex === listImg.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  };
  const handleBack = () => {
    currentIndex === 0
      ? setCurrentIndex(listImg.length - 1)
      : setCurrentIndex(currentIndex - 1);
  };
  const handleDot = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
    
        <div className="slier-content">
          <button className="click-slider click-left" onClick={handleBack}>
            <i className="fa-solid fa-angle-left"></i>
          </button>

          <img className="img-slider" src={listImg[currentIndex].src} alt="" />
          <button className="click-slider click-right" onClick={handleNext}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
        <ul className="ul-slider">
          {listImg.map((item, index) => (
            <li
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleDot(index)}
            ></li>
          ))}
        </ul>
      
    </div>
  );
};
export default Slider;
