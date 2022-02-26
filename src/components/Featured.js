import React from "react";
import banner from "../images/banner.png";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";

export default function Featured() {
  return (
    <div className="flex flex-col justify-evenly items-center bg-grey-blue h-s4 text-white text-center">
      <div className="pt-8">
        <h1 className="text-center font-bold text-3xl mb-2">
          Featured Products
        </h1>
        <p className="text-center">
          Unde omnis iste natus error sit voluptatem
        </p>
      </div>
      <div className="flex flex-1 w-fw mx-auto items-center justify-between">
        <div className="w-64 h-72 flex flex-col max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full h-3/5" src={image2}></img>
          <div className="px-6 py-4 h-2/5">
            <div class="text-[#45413E] text-base">
              Kristina Dam Oak Table With White Marble
            </div>
            <p class="font-bold text*xl mb-2 text-[#84BC22]">Awesome</p>
          </div>
        </div>

        <div className="w-64 h-72 flex flex-col max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <img class="w-full h-3/5" src={image1}></img>
          <div class="px-6 py-4">
            <div class="text-[#45413E] text-base">
              Kristina Dam Oak Table With White Marble
              <p class="font-bold text*xl mb-2 text-[#84BC22]">Marketing</p>
            </div>
          </div>
        </div>

        <div className="w-64 h-72 flex flex-col max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <img class="w-full h-3/5" src={image2}></img>
          <div class="px-6 py-4">
            <div class="text-[#45413E] text-base">
              Kristina Dam Oak Table With White Marble
            </div>
            <p class="font-bold text*xl mb-2 text-[#84BC22]">Awesome</p>
          </div>
        </div>

        <div className="w-64 h-72 flex flex-col max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <img class="w-full h-3/5" src={image3}></img>
          <div class="px-6 py-4">
            <div class="text-[#45413E] text-base mt-2">Hezy Theme</div>
            <p class="font-bold text*xl mb-2 text-[#84BC22] mt-4">Marketing</p>
          </div>
        </div>
      </div>
    </div>
  );
}
