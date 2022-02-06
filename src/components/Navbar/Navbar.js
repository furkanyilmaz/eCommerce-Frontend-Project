import React from 'react';
import Brand from './Brand';
import Items from './Items';
import Links from './Links';

export default function Navbar() {
  return <div className="navbar">
 <Brand/>
 <Links/>
 <Items/>
</div>;
}
