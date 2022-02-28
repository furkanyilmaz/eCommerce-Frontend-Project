import React from "react";
import { useState } from "react";
import heart from "../../../images/Heart.png";
import profileUser from "../../../images/ProfileUser.png";
import search from "../../../images/Search.png";
import bag from "../../../images/Bag.png";
import "react-dropdown/style.css";

export default function Icons({ setLoginDialog }) {
  return (
    <div
      className="flex items-stretch ..."
      style={{ width: "270px" }}
      className="h-20"
    >
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <li className="py-7">
          <a href="/404">
            <img className="opacity-70 hover:opacity-100" src={search}></img>
          </a>
        </li>
        <li>
          <a
            id="login"
            className="profileLogin"
            href="#"
            onClick={() => {
              setLoginDialog(true);
            }}
          >
            <img
              className="opacity-70 hover:opacity-100"
              src={profileUser}
            ></img>
          </a>
        </li>
        <li className="w-10 h-10 flex items-center justify-center relative">
          <a href="/404">
            <img className="opacity-70 hover:opacity-100" src={heart}></img>
            <div className="text-xs text-center w-4 h-4 bg-white border-2 border-[#84BC22] rounded-full absolute top-0 right-0">
              1
            </div>
          </a>
        </li>
        <li className="w-10 h-10 flex items-center justify-center relative">
          <a href="/404">
            <img className="opacity-70 hover:opacity-100" src={bag}></img>
            <div className="text-xs text-center w-4 h-4 bg-white border-2 border-[#84BC22] rounded-full absolute top-0 right-0">
              2
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}
