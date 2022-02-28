import React, { useState } from "react";
import { Component } from "react";
import Modal from "react-responsive-modal";
export default function LoginDialog({ closeLoginDialog }) {
  return (
    <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 z-20">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <button
              className="ml-96 pr-8 w-8"
              onClick={() => {
                closeLoginDialog(false);
              }}
            >
              X
            </button>
            <p className="text-center font-bold">Sign In</p>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              E-mail
            </label>
            <input
              className="shadow border rounded-full py-2 px-4 w-96 text-gray-700  focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
            ></input>
          </div>
          <div className="mb-6">
            <label
              className="float-left block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>

            <a
              className="inline-block align-baseline font-bold text-sm text-[#84BC22]"
              href="/404"
            >
              <p className="text-xs pl-52">forgot Password</p>
            </a>
            <input
              className="shadow border rounded-full py-2 px-4 w-96 text-gray-700 mb-3 focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
            >
              {/* <a href='#'><img src={EyeShape}></img></a> */}
            </input>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#84BC22] hover:[#84BC22] text-white py-2 px-16 rounded-full focus:outline-none focus:shadow-outline ml-28"
              type="button"
            >
              <a href="/">LOGIN</a>
            </button>
          </div>
          <a href="/">
            <p className="text-center text-gray-500 text-xs mt-6 ml-4">
              I don’t have an account
            </p>
          </a>
        </form>
      </div>
    </div>
  );
}
