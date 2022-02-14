import React from 'react'
import logo from '../../../images/logo.png';

export default function Brand() {
  return (
    <div
        style={{width: "270px"}}
        className="bg-emerald-500 h-20 flex items-center"
        >
        <div className="w-16 h-16 bg-light-green">
        <a href="App.js"><img src={logo} alt="osfdigital" /></a>
        </div>
        <div>
        <ul style={{display: 'flex', flexDirection:'column', alignItems: 'start'}}>
                    <a href='App.js'target="_blank"><li style={{color:'#011847'}}><h2>O S F</h2></li></a>
                    <a href='App.js'><li style={{color:'#84BC22'}}>Academy</li></a>
                </ul>
        </div>
    </div>
  )
}
