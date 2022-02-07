import React from 'react';
import logo from '../../images/logo.png';


export default function Brand() {
  return <div className="brand">
            <a href="App.js"><img src={logo} alt="osfdigital" /></a>
                <ul style={{display: 'flex', flexDirection:'column', alignItems: 'start'}}>
                    <li>OSF</li>
                    <li>Academy</li>
                </ul>
         </div>;
}
