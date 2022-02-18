import React from "react";
import Delivery from "../images/Delivery.png"
import Triangular from "../images/Triangular.png"
import Clipboard from "../images/Clipboard.png"

export default function Cards() {
  return <div className="bg-brownish h-s5 text-white">
    <div className="columns-3">
    <div className="ml-20 m-10 mr-40">
      <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
        <li> <img src={Delivery}></img></li>
        <li>
        <h1>FOCUS</h1>
        <p>
        Our unwavering focus on superior service delivery and building </p>
        </li>
      </ul>
    </div>
    <div className="m-40 m-30">
    <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
        <li> <img src={Triangular}></img></li>
        <li>
        <h1>METHOD</h1>
        <p>
        A standardized methodology designed to deliver measurable busin </p>
        </li>
      </ul>

    </div>
    <div className="ml-40 m-10 mr-20">
    <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
        <li> <img src={Clipboard}></img></li>
        <li>
        <h1>KNOWLEDGE</h1>
        <p>
        A highly skilled, proactive workforce that reliably improves ea </p>
        </li>
      </ul>
    </div>
    </div>
  </div>;
}
