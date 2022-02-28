import React from "react";
import Sale from "../Sale.js";

import ImageSlider from "./ImageSlider.js";
import { sliderData } from "./SliderData.js";

export default function Slider() {
  return (
    <div className="w-fw mx-auto flex">
      <div className="max-w-6xl overflow-hidden h-full flex justify-between">
        <ImageSlider slides={sliderData} />
        <Sale />
      </div>
    </div>
  );
}
