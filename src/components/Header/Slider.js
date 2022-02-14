import React from 'react'
import banner from '../../images/banner.png'
export default function Slider() {
    return <div className="w-fw mx-auto flex flex-1 bg-white">
      <div>
      <a href='#'><img src={banner}></img></a>
      </div>
      <div>
        <ul>
          <li>
            555
          </li>
          <li>SALE</li>
        </ul>
      </div>
    </div>;
  }
  