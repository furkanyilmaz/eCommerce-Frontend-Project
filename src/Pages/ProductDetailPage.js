import React from "react";
import Popular from "../components/Popular";
import Footer from "../components/Footer";
import Navbar from "../components/Header/Navbar/Navbar";
import Tabs from "../components/Tabs";
import BenefitContents from "../components/BenefitContents";
import Product1 from "../images/product1.jpg";

import f from "../images/f.png";
import g from "../images/g+.png";
import t from "../images/t.png";
import p from "../images/p.png";

export default function ProductDetailPage() {
  return (
    <>
      <Navbar />
      <div
        class="
        mt-20
        relative
        flex flex-col
        items-center
        justify-center
        w-fw mx-auto
        h-screen
        bg-[#F1EDEA]
      "
      >
        <div className=" w-fw mx-auto flex justify-center pb-20">
          <a href="/">
            <p className="text-xs text-bold text-green-500">Home</p>
          </a>
          <p className="text-xs text-bold">/ Product</p>
        </div>
        <div className="text-center items-center w-fw mx-auto flex pb-8">
          <div className="bg-[#E5E2DF] w-full pl-2">
            <hr></hr>
          </div>
          <div>
            <p className="text-[#45413E] font-bold mr-12 ml-12 text-4xl indent-1">
              Product Name
            </p>
          </div>
          <div className="bg-[#E5E2DF] w-full pr-2">
            <hr></hr>
          </div>
        </div>
        <div className="px-40 py-16 bg-white rounded-md shadow-xl">
          <div className="flex flex-row items-center">
            <div className="flex-1 w-full h-full">
              <img className="ml-16 w-full" src={Product1}></img>
            </div>
            <div className="flex-col pl-64 flex-1">
              <p className="mb-2 font-bold text-black md:text-6xl text-center">
                $ 299,99
              </p>
              <div id="buttons" className="mt-4">
                <div>
                  <button className="w-24 h-10 rounded-full border mr-4">
                    <p> Dark Grey</p>
                  </button>
                </div>
                <div className="mt-4">
                  <button className="w-20 h-10 rounded-full border mr-4">
                    <p> - 2 + </p>
                  </button>
                  <button className="w-30 h-10 rounded-full border bg-[#84BC22] hover:text-white hover:bg-gray-600">
                    <p className="mr-4 ml-4 text-white">ADD TO CARD</p>
                  </button>
                </div>
              </div>
              <p class="mb-8 text-left text-gray-500 md:text-xs mt-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore Beatae vitae dicta sunt explicabo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
                <br></br>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?
              </p>

              <div className="flex flex-row mt-8">
                <p className="mr-8 text-xs opacity-50">Share</p>
                <div className="mr-4">
                  <a
                    href="https://www.facebook.com/OSFDigital/"
                    target="_blank"
                  >
                    <img
                      className="opacity-50 w-2 hover:opacity-100"
                      src={f}
                    ></img>
                  </a>
                </div>
                <div className="mr-4">
                  <a href="#">
                    <img className="opacity-50 hover:opacity-100" src={g}></img>
                  </a>
                </div>
                <div className="">
                  <a href="https://twitter.com/osfdigital" target="_blank">
                    <img className="opacity-50 hover:opacity-100" src={t}></img>
                  </a>
                </div>
                <div className="ml-4">
                  <a href="#">
                    <img className="opacity-50 hover:opacity-100" src={p}></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tabs />
      <Popular />
      <BenefitContents />
      <Footer />
    </>
  );
}
