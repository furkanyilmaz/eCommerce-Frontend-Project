import React from "react";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Navbar from "../components/Header/Navbar/Navbar";

export default function CategoryLandingPage() {
  return (
    <>
      <Navbar />
      <div className="w-full h-full bg-[#F1EDEA]">
        <div className=" w-fw flex items-stretch ">
          <a href="/">
            <p className="text-xs text-bold text-green-500">Home</p>
          </a>
          <p className="text-xs text-bold">/ Category</p>
        </div>
        <div className="bg-[#F1EDEA] text-center items-center  flex pb-8 pt-8">
          <div className="bg-[#E5E2DF] w-full pl-2">
            <hr></hr>
          </div>
          <div>
            <p className="text-[#45413E] font-bold mr-12 ml-12 text-4xl indent-1">
              Services
            </p>
          </div>
          <div className="bg-[#E5E2DF] w-full pr-2">
            <hr></hr>
          </div>
        </div>
      </div>
      <Featured />
      <Footer />
    </>
  );
}
