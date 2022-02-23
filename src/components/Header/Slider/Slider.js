import React from "react";
import facebook from "../../../images/facebook.png";
import ImageSlider from "./ImageSlider.js";
import { sliderData } from "./SliderData.js";

export default function Slider() {
  return (
    <div className="w-fw mx-auto flex flex-1">
      <div className="max-w-6xl overflow-hidden">
        <ImageSlider slides={sliderData} />
      </div>
      {/* <div className="mr-20 mt-12">
        <a href="#">
          <img src={add}></img>
        </a>
      </div> */}
      <div class="mr-8 max-w-sm rounded mt-4">
        <div class="mb-2 h-72 rounded border bg-[#84BC22] text-white w-60 ml-16 ">
          <p className="font-bold text-8xl text-center mt-6">55%</p>
          <p className="text-center mt-12 text-xl">SUMMER</p>
          <p className="text-center text-xl">SALES</p>
        </div>
        <div class="px-6 py-4">
          <div class="text-black text-base">
            <p className=" ml-12 text-xl text-center">Follow us on Facebook</p>
            <p className="text-center text-xs ml-12">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            </p>
          </div>
          <div class="px-6 pt-6 ml-16">
            <button class="w-40 h-10 rounded-full border border-[#3a5b96] hover:bg-[#3b5998] text-[#3a5b96] hover:text-white">
              <a href="www.facebook.com">
                <img className="float-left ml-8 mt-1" src={facebook}></img>
                <p className="mr-6 text-center">FOLLOW</p>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
