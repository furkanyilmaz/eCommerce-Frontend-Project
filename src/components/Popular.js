import React from "react";
import U from "../images/U.png";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";

export default function Popular() {
  return (
    <div className="bg-[#262a32] text-center">
      <div className="flex items-center w-fw mx-auto pt-20 pb-2 justify-center">
        <div className="bg-gray-800 w-full pl-2">
          <hr></hr>
        </div>
        <div>
          <p className="text-white font-bold mr-12 ml-12 text-xl indent-1">
            <td>Popular</td>
            <td>Items</td>
          </p>
        </div>
        <div className="bg-gray-800 w-full pr-2">
          <hr></hr>
        </div>
      </div>
      <br></br>

      <div className="columns-4 text-white ml-80 mr-80 w-fw mx-auto ">
        <div
          id="popular"
          className="max-w-sm h-96 overflow-hidden shadow-lg bg-white rounded-md mb-10 mr-5 relative"
        >
          <img className="w-full" src={image1}></img>
          <div className="px-6 py-4">
            <div className="text-[#45413E]">
              Kristina Dam Oak Table With White Marble Top
            </div>
            <p className="text-[#011847] font-bold text*xl mb-2">$ 799.55</p>
          </div>
          {/* <div className="w-full h-full top-0 left-0 opacity-80 bg-green-400 absolute"></div> */}
        </div>
        <div
          id="popular"
          className="max-w-sm h-96 overflow-hidden shadow-lg bg-white rounded-md mb-10 mr-5"
        >
          <img className="w-full" src={image3}></img>
          <div className="px-6 py-4">
            <div className="text-[#45413E]">
              Hay - About A Lounge Chair AAL 93
            </div>
            <p className="text-[#011847] font-bold text*xl mb-2">$ 799.55</p>
          </div>
        </div>
        <div
          id="popular"
          className="max-w-sm h-96 overflow-hidden shadow-lg bg-white rounded-md mb-10 mr-5"
        >
          <img className="w-full" src={image2}></img>
          <div className="px-6 py-4">
            <div className="text-[#45413E]">
              Kristina Dam Oak Table With White dale Top
            </div>
            <p className="text-[#011847] font-bold text*xl mb-2">$ 799.55</p>
          </div>
        </div>
        <div
          id="popular"
          className="max-w-sm h-96 overflow-hidden shadow-lg bg-white rounded-md mb-10 mr-5"
        >
          <img className="w-full" src={image3}></img>
          <div className="px-6 py-4">
            <div className="text-[#45413E]">Cocktail Table Walnut | YES</div>
            <p className="text-[#011847] font-bold text*xl mt-6">$ 299.99</p>
          </div>
        </div>
        <div
          id="popular"
          className="max-w-sm h-96 overflow-hidden shadow-lg bg-white rounded-md mb-10 mr-5"
        >
          <img className="w-full" src={image1}></img>
          <div className="px-6 py-4">
            <div className="text-[#45413E]">
              Hay - About A Lounge Chair AAL 93
            </div>
            <p className="text-[#011847] font-bold text*xl mb-2">$ 659.55</p>
          </div>
        </div>
        <div
          id="popular"
          className="max-w-sm h-96 overflow-hidden shadow-lg bg-white rounded-md mb-10 mr-5"
        >
          <img className="w-full" src={image1}></img>
          <div className="px-6 py-4">
            <div className="text-[#45413E]">TORY DESK CALENDAR</div>
            <p className="text-[#011847] font-bold text*xl mt-6">$ 410.99</p>
          </div>
        </div>
        <div
          id="popular"
          className="max-w-sm h-96 overflow-hidden shadow-lg bg-white rounded-md mb-10 mr-5"
        >
          <img className="w-full" src={image2}></img>
          <div className="px-6 py-4">
            <div className="text-[#45413E]">CH445 Wing Chair on SUITE NY</div>
            <p className="text-[#011847] font-bold text*xl mt-6">$ 330.55</p>
          </div>
        </div>
        <div
          id="popular"
          className="max-w-sm h-96 overflow-hidden shadow-lg bg-white rounded-md mb-10 mr-5"
        >
          <img className="w-full" src={image3}></img>
          <div className="px-6 py-4">
            <div className="text-[#45413E]">
              Kristina Dam Oak Table With White Marble Top
            </div>
            <p className="text-[#011847] font-bold text*xl mb-2">$ 799.55</p>
          </div>
        </div>
      </div>
      <br></br>
      <div className="">
        <button className="w-60 h-10 rounded-full border mb-10 mt-5 bg-[#262a32] hover:text-black  hover:bg-gray-600">
          <p className="float-left mr-6 ml-14 text-white">LOAD MORE</p>
          <img className="mt-1.5 ml-2" src={U}></img>
        </button>
      </div>
    </div>
  );
}
