import React from 'react'
import EyeShape from '../images/EyeShape.png'

export default function LoginDialog() {
  return (
    <div className='bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0'>

<div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
        <h1 className='text-center font-bold'>Sign In</h1>
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        E-mail
      </label>
      <input class="shadow appearance-none border rounded-full py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"></input>
    </div>
    <div class="mb-6">
      <label class="float-left block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <a class="inline-block align-baseline font-bold text-sm text-[#84BC22]" href="#">
        <p className='text-xs'>forgot Password</p>
      </a>
      <input class="shadow appearance-none border rounded-full py-2 px-10 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password">
          {/* <a href='#'><img src={EyeShape}></img></a> */}
      </input>
      
      
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-[#84BC22] hover:[#84BC22] text-white py-2 px-16 rounded-full focus:outline-none focus:shadow-outline ml-10" type="button">
        LOGIN
      </button> 
    </div>
        <a href='#'>
             <p class="text-center text-gray-500 text-xs mt-6">
                                 I don’t have an account
             </p>
        </a>
  </form>
  
</div>


    </div>
  )
}
