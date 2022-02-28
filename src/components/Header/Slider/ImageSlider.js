import React, { useState } from "react";
import { sliderData } from "./SliderData.js";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const lenght = slides.lenght;

  const nextSlide = () => {
    if (current != lenght - 1) {
      setCurrent(current + 1);
    }
    console.log(current);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? lenght - 1 : current - 1);
    console.log(current);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider flex items-center bg-white h-full">
      <FaArrowAltCircleLeft
        onClick={prevSlide}
        className="left-arrow z-1 cursor-pointer select-none opacity-50 hover:opacity-100"
      />

      {sliderData.map((slide, index) => {
        return (
          <div className={"slide"} key={index}>
            {index === current && (
              <img
                style={{ height: "430px" }}
                className="w-fw rounded mt-5"
                src={slide.image}
                alt="ecommerce image"
              ></img>
            )}
          </div>
        );
      })}
      <FaArrowAltCircleRight
        onClick={nextSlide}
        className="right-arrow z-1 cursor-pointer select-none opacity-50 hover:opacity-100"
      />
    </section>
  );
};

export default ImageSlider;
