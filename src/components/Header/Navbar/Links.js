import React from 'react';
import EN from '../../../images/EN.png'
import US from '../../../images/US.png'



export default function Links() {
    return <div className="bg-white flex-1 h-20">
        <ul className='flex items-stretch flex space-x-0'  
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
          <li className="py-4"><a href="#"><p className='
          ml-0 mr-0 mt-0 mb-0
          hover:bg-[#262a32]
          hover:text-white 
          focus:ring-4 
          focus:ring-blue-300 
          font-medium rounded-none h-14 w-28
          text-sm px-6 py-2.5 text-center 
          inline-flex items-center 
          dark:bg-blue-600 dark:hover:bg-blue-700 
          dark:focus:ring-blue-800'>SERVICES</p></a></li>
          <li className="py-4"><a href="#"><p className='
          ml-0 mr-0 mt-0 mb-0
          hover:bg-[#262a32]
          hover:text-white  
          focus:ring-4 
          focus:ring-blue-300 
          font-medium rounded-none h-14 w-28
          text-sm px-5 py-2.5 text-center 
          inline-flex items-center 
          dark:bg-blue-600 dark:hover:bg-blue-700 
          dark:focus:ring-blue-800'>COMPANY</p></a></li>
          <li className="py-4"><a href="#"><p className='
          ml-0 mr-0 mt-0 mb-0
          hover:bg-[#262a32]
          hover:text-white  
          focus:ring-4 
          focus:ring-blue-300 
          font-medium rounded-none h-14 w-28
          text-sm px-7 py-2.5 text-center 
          inline-flex items-center 
          dark:bg-blue-600 dark:hover:bg-blue-700 
          dark:focus:ring-blue-800'>LIBRARY</p></a></li>
          <li className="py-4"><a href="#"><p className='
          ml-0 mr-0 mt-0 mb-0
          hover:bg-[#262a32]
          hover:text-white  
          focus:ring-4 
          focus:ring-blue-300 
          font-medium rounded-none h-14 w-28
          text-sm px-3 py-2.5 text-center 
          inline-flex items-center 
          dark:bg-blue-600 dark:hover:bg-blue-700 
          dark:focus:ring-blue-800'>CONTACT US</p></a></li>

          <li><a href='#'><img src={EN}></img></a></li>
          <li><a href='#'><img src={US}></img></a></li>
        </ul>
    </div>;
  }
  