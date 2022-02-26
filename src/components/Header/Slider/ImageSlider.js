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
    <section className="slider relative flex justify-center items-center bg-white">
      <FaArrowAltCircleLeft
        onClick={prevSlide}
        className="left-arrow absolute top-2/4 left-16 z-1 cursor-pointer select-none opacity-50 hover:opacity-100"
      />
      <FaArrowAltCircleRight
        onClick={nextSlide}
        className="right-arrow absolute top-2/4 right-16 z-1 cursor-pointer select-none opacity-50 hover:opacity-100"
      />
      {sliderData.map((slide, index) => {
        return (
          <div className={"slide"} key={index}>
            {index === current && (
              <img
                className="w-fw h-96 rounded mt-5"
                src={slide.image}
                alt="ecommerce image"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
