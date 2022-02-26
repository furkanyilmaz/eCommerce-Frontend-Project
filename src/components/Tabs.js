import React from "react";

export default function Tabs() {
  return (
    <div className="bg-white-500 h-full flex justify-center">
      <div className="w-fw mx-auto flex justify-between items-center">
        <div className="flex flex-1 items-center h-full">
          <ul className="flex flex-1 items-center justify-between space-x-0 h-full">
            <li style={{ width: "80%" }} className="h-full flex items-center">
              <a
                href="#"
                className="
          mt-8
          h-full w-full
          hover:bg-[#262a32]
          hover:text-white
          hover: rounded-xl
          font-medium  
          text-center 
          inline-flex items-center 
          justify-center"
              >
                <p className="mb-8">COMPANY</p>
              </a>
            </li>
            <li style={{ width: "80%" }} className="h-full flex items-center">
              <a
                href="#"
                className="
            mt-8
          h-full w-full
          hover:bg-[#262a32]
          hover:text-white 
          hover: rounded-xl
          font-medium
          text-center 
          inline-flex items-center 
          justify-center"
              >
                <p className="mb-8">LIBRARY</p>
              </a>
            </li>
            <li style={{ width: "80%" }} className="h-full flex items-center">
              <a
                href="#"
                className="
            mt-8
          h-full w-full
          hover:bg-[#262a32]
          hover:text-white
          hover: rounded-xl 
          font-medium  
          text-center 
          inline-flex items-center 
          justify-center"
              >
                <p className="mb-8">CONTACT US</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
