import React from "react";
import logo from "../../../images/logo.png";

export default function Brand() {
  return (
    <div style={{ width: "270px" }} className="h-20 flex items-center ">
      <div className="w-16 h-16">
        <a href="/">
          <img src={logo} alt="osfdigital" />
        </a>
      </div>
      <div>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <a href="/">
            <li style={{ color: "#011847" }}>
              <p className="font-bold text-2xl">O S F</p>
            </li>
          </a>
          <a href="/">
            <li style={{ color: "#84BC22" }}>Academy</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
