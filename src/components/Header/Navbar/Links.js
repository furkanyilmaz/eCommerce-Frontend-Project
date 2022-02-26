import React from "react";
import EN from "../../../images/EN.png";
import US from "../../../images/US.png";
import _ from "../../../images/_.png";
import image2 from "../../../images/image2.png";
import "flowbite";

export default function Links() {
  return (
    <div className="flex flex-1 items-center h-full">
      <ul className="flex flex-1 items-center justify-between space-x-0 h-full ">
        <li
          id="services"
          style={{ width: "60%" }}
          className="h-full flex items-center hover:border-b-2 hover:border-[#84BC22]"
        >
          <a
            href="/404"
            className="
          h-20
           w-full
         hover:bg-[#262a32]
         hover:border-b-2 hover:border-[#84BC22]
          hover:text-white 
          font-medium rounded-none  
          text-center 
          inline-flex items-center 
          justify-center"
          >
            <p className="mr-6">SERVICES</p>
            <img src={_}></img>
          </a>

          <div
            id="forhover"
            className="bg-[#262a32] w-full absolute top-20 left-0 right-0 z-10 p-8"
          >
            <div className="flex items-center justify-between pr-4 text-white w-fw mx-auto">
              <div>
                <div>
                  <br></br>
                  <h1 className="font-bold">PRODUCT CATEGORIES</h1>
                  <br></br>
                </div>
                <div className="flex flex-row space-x-40">
                  <div>
                    <ul className="space-y-4">
                      <li>
                        <a href="/404">Accessories</a>
                      </li>
                      <li>
                        <a href="/404">Alcohol</a>
                      </li>
                      <li>
                        <a href="/404">Art</a>
                      </li>
                      <li>
                        <a href="/404">Books</a>
                      </li>
                      <li>
                        <a href="/404">Drink</a>
                      </li>
                      <li>
                        <a href="/404">Electronics</a>
                      </li>
                      <li>
                        <a href="/404">Flowers & Plants</a>
                      </li>
                      <li>
                        <a href="/404">Food</a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <ul className="space-y-4">
                      <li>
                        <a href="/404">Gadgets</a>
                      </li>
                      <li>
                        <a href="/404">Garden</a>
                      </li>
                      <li>
                        <a href="/404">Grocery</a>
                      </li>
                      <li>
                        <a href="/404">Home</a>
                      </li>
                      <li>
                        <a href="/404">Jewelry</a>
                      </li>
                      <li>
                        <a href="/404">Kids & Baby</a>
                      </li>
                      <li>
                        <a href="/404">Men's Fashion</a>
                      </li>
                      <li>
                        <a href="/404">Mobile</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-4">
                      <li>
                        <a href="/404">Motorcycles</a>
                      </li>
                      <li>
                        <a href="/404">Movies</a>
                      </li>
                      <li>
                        <a href="/404">Music</a>
                      </li>
                      <li>
                        <a href="/404">Office</a>
                      </li>
                      <li>
                        <a href="/404">Pets</a>
                      </li>
                      <li>
                        <a href="/404">Romantic</a>
                      </li>
                      <li>
                        <a href="/404">Sport</a>
                      </li>
                      <li>
                        <a href="/404">Toys</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <br></br>
                  <h1 className="font-bold">SALE</h1>
                  <br></br>
                </div>
                <div>
                  <ul className="space-y-4">
                    <li>
                      <a href="/404">Accessories</a>
                    </li>
                    <li>
                      <a href="/404">Alcohol</a>
                    </li>
                    <li>
                      <a href="/404">Art</a>
                    </li>
                    <li>
                      <a href="/404">Books</a>
                    </li>
                    <li>
                      <a href="/404">Drink</a>
                    </li>
                    <li>
                      <a href="/404">Electronics</a>
                    </li>
                    <li>
                      <a href="/404">Flowers & Plants</a>
                    </li>
                    <li>
                      <a href="/404">Food</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-60 h-80">
                <img className="w-60 h-80" src={image2}></img>
              </div>
            </div>
          </div>
        </li>
        <li style={{ width: "60%" }} className="h-full flex items-center">
          <a
            href="/404"
            className="
          h-full w-full
          hover:bg-[#262a32]
          hover:text-white 
          font-medium rounded-none  
          text-center 
          inline-flex items-center 
          justify-center"
          >
            <p>COMPANY</p>
          </a>
        </li>
        <li style={{ width: "60%" }} className="h-full flex items-center">
          <a
            href="/404"
            className="
          h-full w-full
          hover:bg-[#262a32]
          hover:text-white 
          font-medium rounded-none  
          text-center 
          inline-flex items-center 
          justify-center"
          >
            <p>LIBRARY</p>
          </a>
        </li>
        <li style={{ width: "60%" }} className="h-full flex items-center">
          <a
            href="/404"
            className="
          h-full w-full
          hover:bg-[#262a32]
          hover:text-white 
          font-medium  rounded-none  
          text-center 
          inline-flex items-center 
          justify-center"
          >
            <p>CONTACT US</p>
          </a>
        </li>

        <li style={{ width: "40%" }}>
          <button
            id="dropdown1"
            data-dropdown-toggle="dropdownButton1"
            className="opacity-50 hover:opacity-100 ml-8 flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
          >
            EN
            <svg
              class="ml-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>

          <div
            id="dropdownButton1"
            className="hidden z-10 w-22 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul class="py-1" aria-labelledby="dropdown1">
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                >
                  EN
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                >
                  TR
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li style={{ width: "40%" }}>
          <button
            id="dropdown2"
            data-dropdown-toggle="dropdownButton2"
            className="opacity-50 hover:opacity-100 ml-2 flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
          >
            $ US
            <svg
              class="ml-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>

          <div
            id="dropdownButton2"
            className="hidden z-10 w-22 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul class="py-1" aria-labelledby="dropdown2">
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                >
                  $ US
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                >
                  £ UK
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
