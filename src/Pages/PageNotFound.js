import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Header/Navbar/Navbar";
import Search from "../images/Search.png";
export default function PageNotFound() {
  return (
    <>
      <Navbar />
      <div
        class="
        static
        flex flex-col
        items-center
        justify-center
        w-fw mx-auto
        h-screen
        bg-[#F1EDEA]
      "
      >
        <div className=" w-fw mx-auto flex justify-center mb-12">
          <a href="/">
            <p className="text-xs text-bold text-green-500">Home</p>
          </a>
          <p className="text-xs text-bold"> /404</p>
        </div>
        <div className="text-center items-center w-fw mx-auto flex pb-8">
          <div className="bg-[#E5E2DF] w-full pl-2">
            <hr></hr>
          </div>
          <div>
            <p className="text-[#45413E] font-bold mr-12 ml-12 text-4xl indent-1">
              404
            </p>
          </div>
          <div className="bg-[#E5E2DF] w-full pr-2">
            <hr></hr>
          </div>
        </div>
        <div class="w-11/12 h-3/5 px-40 py-16 bg-white rounded-md shadow-xl">
          <div class="flex flex-row items-center">
            <div className="bg-white">
              <h1 class="font-bold text-[#84BC22] text-9xl mr-10">Oops!</h1>
            </div>
            <div>
              <p className="mb-2 font-bold text-black md:text-xl">
                Sorry, this page could not be found
              </p>

              <p class="mb-8 text-left text-gray-500 md:text-xs">
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus.
                <br></br>
                <br></br>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </p>

              <a href="/" className="text-sm font-semibold text-[#84BC22]">
                <p className="pb-6">Go back to Homepage</p>
              </a>
              <p className="text-2xl font-bold mb-2">Search our site</p>
              <input
                className="shadow appearance-none border rounded-full w-full py-2 px-3
                leading-tight focus:outline-none focus:shadow-outline
               text-[#45413E] text-xs"
                id="username"
                type="text"
                placeholder="SEARCH"
              ></input>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
