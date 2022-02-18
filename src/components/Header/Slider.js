import React from 'react'
import banner from '../../images/banner.png'
import facebook from '../../images/facebook.png'


export default function Slider() {
    return <div className="w-fw mx-auto flex flex-1 bg-white">
      <div className='mr-20 mt-16'>
      <a href='#'><img src={banner}></img></a>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
          
  <div class="px-6 py-4">
    <div class="font-bold text-8xl mb-2">%55</div>
    <p class="text-gray-700 text-2xl">
    Follow us on Facebook
    </p>
    <p class="text-gray-700 text-base ">
    Sed ut perspiciatis unde omnis iste natus error sit  voluptatem
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <button class="inline-block w-40 h-10 rounded-full border border-[#3a5b96] "> 
    <a href='www.facebook.com'>
      
    <img className='float-left ml-8 mt-1' src={facebook}></img>
    <p className='mr-6 text-[#3a5b96]'>FOLLOW</p> </a></button>
    
  </div>
</div>
    </div>;
  }
  