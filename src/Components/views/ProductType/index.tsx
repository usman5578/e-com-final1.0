import Image from "next/image";
import React from "react";

const ProductType = () => {
  return (
    <div className="mt-24 py-4 px-2">
      <div className="text-center space-y-3">
          <p className="text-blue-800 font-bold text-s">PROMOTIONS</p>
          <h3 className="text-4xl font-bold text-gray-800">Our Promotions Events</h3>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-5 px-6 py-10 text-gray-800">
        <div className=" flex flex-col items-center justify-center md:flex-row md:justify-between  md:max-h-[14rem] col-auto md:col-span-2 px-4 bg-cat1">
          <div className=" max-w-[14rem] flex flex-col justify-center">
            <h4 className="font-bold text-3xl">GET UP TO 60%</h4>
            <p className="text-lg ">For the summer season</p>
          </div>
          <div className="w-72 flex items-end">
            <Image   width={1000} height={1000} alt="Summer Season Sale" src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent1.6f776995.png&w=384&q=75"} />
          </div>
        </div>
        <div className="w-full lg:order-last  py-6 col-auto md:col-span-2 text-white  flex flex-col justify-center items-center bg-cat3">
          <h3 className=" -mt-1 font-bold text-4xl mb-4">GET 30% Off</h3>
          <p>USE PROMO CODE</p>
          <button className="py-1 px-5 tracking-wider text-base font-medium  md:px-10 bg-gray-600 md:text-lg md:font-semibold rounded-lg md:tracking-widest"  aria-label="Redirect to dine week sale">DINEWEEKENDSALE</button>
        </div>
        <div className="w-full h-full row-span-1  md:row-span-2 bg-cat2 text-lg">
          <div className="px-4 py-4">
            <p>Flex Sweatshirt</p>
            <p > <del>$100.00</del> &nbsp;&nbsp;&nbsp; <b className="no-underline ">$75.00</b> </p>
          </div>
          <div className="w-64">
            <Image width={1000} height={1000} alt="Sweaters" src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent2.b5f201ac.png&w=384&q=75"}/>
          </div>
        </div>
        <div className="w-full h-full row-span-1 md:row-span-2 bg-cat4">
        <div className="px-4 py-4">
            <p>Flex Push Button Bomber</p>
            <p > <del>$225.00</del> &nbsp;&nbsp;&nbsp; <b className="no-underline ">$190.00</b> </p>
          </div>
          <div className="w-64">
            <Image width={1000} height={1000} alt="Sweaters" src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent3.798fa92b.png&w=384&q=75"}/>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default ProductType;
