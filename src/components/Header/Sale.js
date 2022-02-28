import React from "react";

export default function Sale() {
  return (
    <div class="max-w-sm rounded mt-4 h-full">
      <div class="mb-2 h-72 rounded border bg-[#84BC22] text-white w-60 ml-16 ">
        <p className="font-bold text-8xl text-center mt-6">55%</p>
        <p className="text-center mt-12 text-xl">SUMMER</p>
        <p className="text-center text-xl">SALES</p>
      </div>
      <div class="px-6 py-4">
        <div class="text-black text-base">
          <p className=" ml-12 text-xl text-center">Follow us on Facebook</p>
          <p className="text-center text-xs ml-12">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </p>
        </div>
        <div class="px-6 pt-6 ml-16">
          <button
            id="facebook"
            class="w-40 h-10 rounded-full border border-[#3a5b96] hover:bg-[#3b5998] text-[#3a5b96] hover:text-white"
          >
            <a
              className="flex items-center justify-center"
              href="https://www.facebook.com/OSFDigital/"
              target={"_blank"}
            >
              <svg id="fbimage" viewBox="0 0 24 24">
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z"
                />
              </svg>
              <p className="ml-2 text-center">FOLLOW</p>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
