import React from "react";
import f from "../images/f.png"
import g from "../images/g+.png"
import t from "../images/t.png"
import p from "../images/p.png"

export default function Footer() {
  return <div className="bg-white h-s6">


<div className="columns-3">
      <div className="ml-80 float-left">
                      <br></br>
                    <p className='col-sm'>&copy;Copyright {new Date().getFullYear()} All Rights Reserved.</p> 
                      
                      <br></br>
                      <br></br>
                      <h5 className='font-bold'>CONTACT</h5>
                      <br></br>
                            Headquarters:
                            <br></br>
                              5600, Blvd. des Galeries, Bur 530
                              <br></br> 
                              Québec, Québec G2K 2H6 
                              <br></br>
                              <br></br>
                              <a href="#">contact@osf-global.com</a> 
                              <br></br>
                              <br></br>
                              <a href="#">+1 (888) 548-4344</a>
                     
      </div>
      <div className="ml-80 float-left grid grid-rows-6 grid-flow-col gap-4">
                      
                      <br></br>
                      <h5 className='font-bold'>CATEGORIES</h5>
                      <a href="#">Alcohol</a>
                      <a href="#">Art</a>
                      <a href="#">Books</a>
                      <a href="#">Drink</a>
                      <a href="#">Electronics</a>
                      <a href="#">Home</a>
                      <a href="#">Jewerly</a>
                      <a href="#">Kids & Baby</a>
                      <a href="#">Men's Fashion</a>
                      <a href="#">Mobile</a>
                      <a href="#">Motorcycles</a>
                      <a href="#">Movies</a>
                      <a href="#">Music</a>
                      <a href="#">Sport</a>
                      <a href="#">Toys</a>
                      <a href="#">Travel</a>
                      <a href="#">Woman's Fashion</a>
                      <br></br>
                              
      </div>

     
                <div className="ml-80 float-left grid grid-rows-6 grid-flow-col gap-4">
                  
                      
                      <br></br>
                      <br></br>
                      <h5 className='font-bold'>ABOUT</h5>
                      <a href="#">About us</a>
                      <a href="#">Delivery</a>
                      <a href="#">Testimonials</a>
                      <a href="#">contact</a>

                      <ul className="" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
                        <li className="mr-5">  <a href="#"><img src={f}></img></a></li>
                        <li className="mr-5">  <a href="#"><img src={g}></img></a></li>
                        <li className="mr-5">  <a href="#"><img src={t}></img></a></li>
                        <li className="mr-5">  <a href="#"><img src={p}></img></a></li>
                        
                      </ul>
                      
                      
                </div>
      </div>
  </div>;
}
