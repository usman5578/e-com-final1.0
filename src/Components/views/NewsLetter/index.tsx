import React from "react";

const NewsLetter = () => {
  return (
    <div className=" text-center space-y-4 flex-col text-gray-800 border-4 h-[80vh] flex items-center justify-center">
      <h6 className="text-xl md:text-4xl font-bold ">Subscribe Our Newsletter</h6>
      <p className="max-w-[16rem] text-lg font-medium">Get the latest information and promo offers directly</p>
      <div className="flex flex-wrap items-center justify-center space-x-4 gap-5]">
        <input className="border mt-2 md:mt-0 border-gray-300 py-1 px-4 " type="text" placeholder="Input Email Adress"/>
        <button className="text-white bg-gray-900 border border-gray-300 mt-2 md:mt-0  px-4 py-1">Get Started</button>
      </div>
    </div>

  );
};

export default NewsLetter;
