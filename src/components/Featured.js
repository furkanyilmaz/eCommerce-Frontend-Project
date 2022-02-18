import React from "react";
import banner from "../images/banner.png"

export default function Featured() {
  return <div className="bg-grey-blue h-s4 text-white text-center">
      <div>
        <h1 className="text-center text-3xl mb-2">Featured Products</h1>
        <p className="text-center">
              Unde omnis iste natus error sit voluptatem</p>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-20 ml-40 mr-40">
          <div className="">
                  <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                      <img class="w-full" src={banner}></img>
                          <div class="px-6 py-4">
                              <div class="text-black text-base">Kristina Dam Oak Table With White Marble Top</div>
                              <p class="text-black font-bold text*xl mb-2">
                              $ 799.55
                              </p>
                          </div>
                   </div>
          </div>

          <div className="">
                  <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                      <img class="w-full" src={banner}></img>
                          <div class="px-6 py-4">
                              <div class="text-black text-base">Kristina Dam Oak Table With White Marble Top</div>
                              <p class="text-black font-bold text*xl mb-2">
                              $ 799.55
                              </p>
                          </div>
                   </div>
          </div>

          <div className="">
                  <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                      <img class="w-full" src={banner}></img>
                          <div class="px-6 py-4">
                              <div class="text-black text-base">Kristina Dam Oak Table With White Marble Top</div>
                              <p class="text-black font-bold text*xl mb-2">
                              $ 799.55
                              </p>
                          </div>
                   </div>
          </div>

          <div className="">
                  <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                      <img class="w-full" src={banner}></img>
                          <div class="px-6 py-4">
                              <div class="text-black text-base">Kristina Dam Oak Table With White Marble Top</div>
                              <p class="text-black font-bold text*xl mb-2">
                              $ 799.55
                              </p>
                          </div>
                   </div>
          </div>
          </div>
  </div>;
}
