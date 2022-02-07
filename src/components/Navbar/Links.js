import React from 'react';
import EN from '../../images/EN.png'
import US from '../../images/US.png'
export default function Links() {
  return <div className="links">
             <ul style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
                <li><a href='#'>SERVICES</a></li>
                <li><a href='#'>COMPANY</a></li>
                <li><a href='#'>LIBRARY</a></li>
                <li><a href='#'>CONTACT US</a></li>
                <li><a href='#'><img src={EN}></img></a></li>
                <li><a href='#'><img src={US}></img></a></li>

             </ul>
     
             
        </div>;
  
}
