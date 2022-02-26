import React from "react";
import f from "../images/f.png";
import g from "../images/g+.png";
import t from "../images/t.png";
import p from "../images/p.png";

export default function Footer() {
  return (
    <div className="w-fw mx-auto flex space-x-32 font-lato">
      <div className="mr-2">
        <br></br>
        <p className="col-sm">
          &copy;Copyright {new Date().getFullYear()} All Rights Reserved.
        </p>
        <br></br>
        <br></br>
        <h1 className="font-bold text-[#333333]">CONTACT</h1>
        <br></br>
        <div className="text-[#45413E]">
          Headquarters
          <br></br>
          5600, Blvd. des Galeries, Bur 530
          <br></br>
          Québec, Québec G2K 2H6
          <br></br>
          <br></br>
        </div>
        <a
          className="text-[#45413E]"
          href="https://osf.digital/"
          target="_blank"
        >
          contact@osf-global.com
        </a>
        <br></br>
        <br></br>
        <a href="tel:+1 (888) 548-4344" className="text-[#45413E]">
          +1 (888) 548-4344
        </a>
      </div>

      <div className="pr-2">
        <div>
          <br></br>
          <h1 className="font-bold text-[#333333]">CATEGORIES</h1>
          <br></br>
        </div>
        <div className="flex flex-row space-x-20 opacity-70 text-[#45413E]">
          <div>
            <ul className="space-y-4">
              <li>
                <a href="#">Alcohol</a>
              </li>
              <li>
                <a href="#">Art</a>
              </li>
              <li>
                <a href="#">Books</a>
              </li>
              <li>
                <a href="#">Drinks</a>
              </li>
              <li>
                <a href="#">Electronics</a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-4">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Jewelry</a>
              </li>
              <li>
                <a href="#">Kids & Baby</a>
              </li>
              <li>
                <a href="#">Men's Fashion</a>
              </li>
              <li>
                <a href="#">Mobile</a>
              </li>
              <li>
                <a href="#">Motorcycles</a>
              </li>
              <li>
                <a href="#">Movies</a>
              </li>
              <li>
                <a href="#">Music</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4">
              <li>
                <a href="#">Sport</a>
              </li>
              <li>
                <a href="#">Toys</a>
              </li>
              <li>
                <a href="#">Travel</a>
              </li>
              <li>
                <a href="#">Women's Fashion</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div>
          <br></br>
          <h1 className="font-bold text-[#333333]">ABOUT</h1>
          <br></br>
        </div>
        <div className="text-[#45413E]">
          <ul className="space-y-4 opacity-70">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Delivery</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row mt-8">
        <div className="mr-4">
          <a href="https://www.facebook.com/OSFDigital/" target="_blank">
            <img className="opacity-50 w-2 hover:opacity-100" src={f}></img>
          </a>
        </div>
        <div className="mr-4">
          <a href="#">
            <img className="opacity-50 hover:opacity-100" src={g}></img>
          </a>
        </div>
        <div className="">
          <a href="https://twitter.com/osfdigital" target="_blank">
            <img className="opacity-50 hover:opacity-100" src={t}></img>
          </a>
        </div>
        <div className="ml-4">
          <a href="#">
            <img className="opacity-50 hover:opacity-100" src={p}></img>
          </a>
        </div>
      </div>
    </div>
  );
}
