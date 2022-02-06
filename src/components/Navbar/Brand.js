import React from 'react';

export default function Brand() {
  return <div className="brand">
    <img src="../images/logo.png"></img>
    <ul style={{display: 'flex', flexDirection:'column', alignItems: 'start'}}>
       <li>OSF</li>
       <li>Academy</li>
    </ul>
  </div>;
}
