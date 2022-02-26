import React from "react";
import Delivery from "../images/Delivery.png";
import Triangular from "../images/Triangular.png";
import Clipboard from "../images/Clipboard.png";

export default function Cards() {
  return (
    <div className="bg-brownish h-s5 text-white">
      <div className="flex w-fw mx-auto">
        <div className="mr-24 flex items-center h-s5 w-full">
          <img className="mr-8" src={Delivery}></img>
          <div className="flex flex-col items-start">
            <p className="font-bold text-lg">FOCUS</p>
            <p className="text-[#868380]">
              Our unwavering focus on superior service delivery and building
            </p>
          </div>
        </div>

        <div className="mr-24 flex items-center h-s5 w-full">
          <img className="mr-8" src={Triangular}></img>
          <div className="flex flex-col items-start">
            <p className="font-bold text-lg">METHOD</p>
            <p className="text-[#868380]">
              A standardized methodology designed to deliver measurable busin
            </p>
          </div>
        </div>

        <div className="flex items-center h-s5 w-full">
          <img className="mr-8" src={Clipboard}></img>
          <div className="flex flex-col items-start">
            <p className="font-bold text-lg">KNOWLEDGE</p>
            <p className="text-[#868380]">
              A highly skilled, proactive workforce that reliably improves ea
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
