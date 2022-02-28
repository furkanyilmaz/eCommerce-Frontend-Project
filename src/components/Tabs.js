import React from "react";

export default function Tabs() {
  return (
    <div>
      <div className="bg-white-500 h-full flex justify-center">
        <div className="w-fw mx-auto flex justify-between items-center">
          <div className="flex flex-1 items-center h-full">
            <ul className="flex flex-1 items-center justify-between space-x-0 h-full">
              <li
                id="desclist"
                style={{ width: "80%" }}
                className="h-full flex items-center"
              >
                <a
                  href="##"
                  className="
          mt-8
          h-full w-full
          hover:bg-[#262a32]
          hover:text-white
          hover: rounded-xl
          font-medium  
          text-center 
          inline-flex items-center 
          justify-center"
                >
                  <p className="mb-8">Description</p>
                </a>
              </li>
              <li
                id="addlist"
                style={{ width: "80%" }}
                className="h-full flex items-center"
              >
                <a
                  href="##"
                  className="
            mt-8
          h-full w-full
          hover:bg-[#262a32]
          hover:text-white 
          hover: rounded-xl
          font-medium
          text-center 
          inline-flex items-center 
          justify-center"
                >
                  <p className="mb-8">Additional Information</p>
                </a>
              </li>
              <li
                id="revlist"
                style={{ width: "80%" }}
                className="h-full flex items-center"
              >
                <a
                  href="##"
                  className="
            mt-8
          h-full w-full
          hover:bg-[#262a32]
          hover:text-white
          hover: rounded-xl 
          font-medium  
          text-center 
          inline-flex items-center 
          justify-center"
                >
                  <p className="mb-8">Reviews(3)</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex text-left w-fw mx-auto text-white bg-[#262a32] rounded-md h-full">
        <div id="desc" className=" flex flex-row text-left ">
          <p className="ml-16">
            Description Aenean commodo ligula eget dolor. Aenean massa. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit. Aenean commodo ligula eget dolor. Aenean massa.
          </p>
          <p className="ml-16">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem.
          </p>
        </div>
        <div id="additional" className=" flex flex-row text-left">
          <p className="ml-16">
            Additional Aenean commodo ligula eget dolor. Aenean massa. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit. Aenean commodo ligula eget dolor. Aenean massa.
          </p>
          <p className="ml-16">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem.
          </p>
        </div>
        {/* <div id="reviews" className=" flex flex-row text-left">
          <p className="ml-16">
            Reviews Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit. Aenean commodo ligula eget dolor. Aenean massa.
          </p>
          <p className="ml-16">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem.
          </p>
        </div> */}
      </div>
    </div>
  );
}
