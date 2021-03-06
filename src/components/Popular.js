import React, { useState } from "react";
import U from "../images/U.png";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image6 from "../images/image6.png";
import hovericon from "../images/hovericon.png";
import heart1 from "../images/heart1.png";
import add from "../images/add.png";

export default function Popular() {
  return (
    <div className="bg-[#262a32] text-center">
      <div className="flex items-center w-fw mx-auto pt-20 pb-2 justify-center">
        <div className="bg-gray-800 w-full">
          <hr></hr>
        </div>
        <div>
          <p className="text-white font-bold mr-12 ml-12 text-xl indent-1">
            <td>Popular</td>
            <td>Items</td>
          </p>
        </div>
        <div className="bg-gray-800 w-full pr-5">
          <hr></hr>
        </div>
      </div>
      <br></br>

      <div className="columns-4 text-white ml-92 w-fw mx-auto ">
        <div id="popular">
          <div className="relative max-w-sm h-96 overflow-hidden shadow-lg bg-white rounded-md mb-10 mr-5">
            <div className="absolute top-0 left-0">
              <img className="w-full" src={image1}></img>
              <div className="pt-4 px-12">
                <div className="text-[#45413E]">
                  Kristina Dam Oak Table With White Marble Top
                </div>
                <p className="text-[#011847] font-bold text*xl mt-2">
                  $ 799.55
                </p>
              </div>
            </div>
            <div
              id="forpopular"
              className="absolute top-0 left-0 bg-green-500 h-full w-full"
            >
              <div className="h-full w-full flex items-center justify-center">
                <button className="bg-white w-16 h-16 rounded-full mr-2 flex items-center justify-center">
                  <img src={add} />
                </button>
                <button className="bg-white w-16 h-16 rounded-full flex items-center justify-center">
                  <img src={heart1}></img>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="popular">
          <div className="relative max-w-sm h-96 overflow-hidden shadow-lg bg-white rounded-md mb-10 mr-5">
            <div className="absolute top-0 left-0">
              <img className="w-full" src={image2}></img>
              <div className="pt-4 px-12">
                <div className="text-[#45413E]">
                  Hay - About A Lounge Chair AAL 93
                </div>
                <p className="text-[#011847] font-bold text*xl mt-2 mb-2">
                  $ 659.55
                </p>
              </div>
            </div>
            <div
              id="forpopular"
              className="absolute top-0 left-0 bg-green-500 h-full w-full"
            >
              <div className="h-full w-full flex items-center justify-center">
                <button className="bg-white w-16 h-16 rounded-full mr-2 flex items-center justify-center">
                  <img src={add} />
                </button>
                <button className="bg-white w-16 h-16 rounded-full flex items-center justify-center">
                  <img src={heart1}></img>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="popular">
          <div className="relative max-w-sm h-96 overflow-hidden shadow-lg bg-white rounded-md mb-10 mr-5">
            <div className="absolute top-0 left-0">
              <img className="w-full" src={image3}></img>
              <div className="pt-4 px-12">
                <div className="text-[#45413E]">
                  Hay - About A Lounge Chair AAL 93
                </div>
                <p className="text-[#011847] font-bold text*xl mt-2 mb-2">
                  $659.55
                </p>
              </div>
            </div>
            <div
              id="forpopular"
              className="absolute top-0 left-0 bg-green-500 h-full w-full"
            >
              <div className="h-full w-full flex items-center justify-center">
                <button className="bg-white w-16 h-16 rounded-full mr-2 flex items-center justify-center">
                  <img src={add} />
                </button>
                <button className="bg-white w-16 h-16 rounded-full flex items-center justify-center">
                  <img src={heart1}></img>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="popular">
          <div className="relative max-w-sm h-96 overflow-hidden shadow-lg bg-white rounded-md mb-10 mr-5">
            <div className="absolute top-0 left-0">
              <img className="w-full" src={image2}></img>
              <div className="pt-4 px-12">
                <div className="text-[#45413E]">TORY DESK CALENDAR</div>
                <p className="text-[#011847] font-bold text*xl mt-2 mb-2">
                  $ 410.99
                </p>
              </div>
            </div>

            <div
              id="forpopular"
              className="absolute top-0 left-0 bg-green-500 h-full w-full"
            >
              <div className="h-full w-full flex items-center justify-center">
                <button className="bg-white w-16 h-16 rounded-full mr-2 flex items-center justify-center">
                  <img src={add} />
                </button>
                <button className="bg-white w-16 h-16 rounded-full flex items-center justify-center">
                  <img src={heart1}></img>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="popular">
          <div className="relative max-w-sm h-96 overflow-hidden shadow-lg bg-white rounded-md mb-10 mr-5">
            <div className="absolute top-0 left-0">
              <img className="w-full" src={image1}></img>
              <div className="pt-4 px-12">
                <div className="text-[#45413E]">
                  Activate Facial Mask and Charcoal Soap
                </div>
                <p className="text-[#011847] font-bold text*xl mt-2 mb-2">
                  $ 129.55
                </p>
              </div>
            </div>
            <div
              id="forpopular"
              className="absolute top-0 left-0 bg-green-500 h-full w-full"
            >
              <div className="h-full w-full flex items-center justify-center">
                <button className="bg-white w-16 h-16 rounded-full mr-2 flex items-center justify-center">
                  <img src={add} />
                </button>
                <button className="bg-white w-16 h-16 rounded-full flex items-center justify-center">
                  <img src={heart1}></img>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="popular">
          <div className="relative max-w-sm h-96 overflow-hidden shadow-lg bg-white rounded-md mb-10 mr-5">
            <div className="absolute top-0 left-0">
              <img className="w-full" src={image6}></img>
              <div className="pt-4 px-12">
                <div className="text-[#45413E]">
                  CH445 Wing Chair on SUITE NY
                </div>
                <p className="text-[#011847] font-bold text*xl mt-2 mb-2">
                  $ 330.55
                </p>
              </div>
            </div>
            <div
              id="forpopular"
              className="absolute top-0 left-0 bg-green-500 h-full w-full"
            >
              <div className="h-full w-full flex items-center justify-center">
                <button className="bg-white w-16 h-16 rounded-full mr-2 flex items-center justify-center">
                  <img src={add} />
                </button>
                <button className="bg-white w-16 h-16 rounded-full flex items-center justify-center">
                  <img src={heart1}></img>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="popular">
          <div className="relative max-w-sm h-96 overflow-hidden shadow-lg bg-white rounded-md mb-10 mr-5">
            <div className="absolute top-0 left-0">
              <img className="w-full" src={image2}></img>
              <div className="pt-4 px-12">
                <div className="text-[#45413E]">
                  Cocktail Table Walnut | YES
                </div>
                <p className="text-[#011847] font-bold text*xl mt-2">
                  $ 299.99
                </p>
              </div>
            </div>
            <div
              id="forpopular"
              className="absolute top-0 left-0 bg-green-500 h-full w-full"
            >
              <div className="h-full w-full flex items-center justify-center">
                <button className="bg-white w-16 h-16 rounded-full mr-2 flex items-center justify-center">
                  <img src={add} />
                </button>
                <button className="bg-white w-16 h-16 rounded-full flex items-center justify-center">
                  <img src={heart1}></img>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="popular">
          <div className="relative max-w-sm h-96 overflow-hidden shadow-lg bg-white rounded-md mb-10 mr-5">
            <img className="w-full h-full opacity-60" src={image2}></img>
            <div
              id="forpopular2"
              className="absolute top-0 left-0 h-full w-full"
            >
              <div className="h-full w-full px-16 text-black text-left flex items-center justify-start flex-col">
                <p className="mt-56 -ml-12 font-semibold">
                  My dragons are misbehaving again. Unbelieveable!
                </p>
                <div>
                  <img className="float-left mt-4 -ml-24" src={hovericon}></img>
                  <p className="text-xs mt-4 font-semibold">5H AGO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div>
        <button className="w-56 h-10 rounded-full border mb-24 bg-green-400 hover:text-white  hover:bg-green-700">
          <p className="float-left mr-6 ml-14 text-white">LOAD MORE</p>
          <img className="mt-1.5 ml-2" src={U}></img>
        </button>
      </div>
    </div>
  );
}
