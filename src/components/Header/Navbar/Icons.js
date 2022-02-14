import React from 'react';
import heart from '../../../images/Heart.png';
import profileUser from '../../../images/ProfileUser.png';
import search from '../../../images/Search.png'
import bag from '../../../images/Bag.png'


export default function Icons() {
    return (
      <div style={{ width: "270px" }} className="bg-teal-500 h-20">
        <ul style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
                <li><a href='#'><img src={search}></img></a></li>
                <li><a href='#'><img src={profileUser}></img></a></li>
                <li><a href='#'><img src={heart}></img></a></li>
                <li><a href='#'><img src={bag}></img></a></li>
             </ul>
      </div>
    );
  }
  