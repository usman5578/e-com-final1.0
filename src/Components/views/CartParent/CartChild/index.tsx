"use client";
import getStripePromise from "@/lib/stripe";
import Image from "next/image";
import React, { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useCookies } from "react-cookie";

const CartComponent =  () => {
  const [cookies, setCookies] = useCookies();
  const products = cookies.products 
  console.log("Product from cookies",products);
  

  

  const handleCheckout = async () => {
    const stripe = await getStripePromise();
    console.log("inside stripe Product", products)
    const response = await fetch("/api/stripe-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(products),
    });

    const data = await response.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
  };
  return (
    <div className="py-10 ">
      
      {/* div No 1  */}
      <div className="py-6">
        <h1 className="text-xl font-semibold text-gray-900">Shopping Cart</h1>
      </div>
      {/* div No 2  */}

      <div className="flex  justify-around items-start  ">
        <div>
          <div className="flex flex-col md:flex-row items-center py-10 space-y-5 max-w-[50rem] lg:space-x-32  md:space-x-5">
            <div className="w-52 lg:w-80  ">
              <Image
                className="rounded-lg "
                src="/femaleproduct1.png"
                alt="nothing"
                width={1000}
                height={1000}
              />
            </div>
            <div className=" space-y-1 md:space-y-3 w-full  ">
              <div className="flex space-x-10 items-center ">
                <h2 className="text-md md:text-2xl text-gray-700 ">
                  Brushed Raglan Sweatshirt
                </h2>
                <RiDeleteBin6Line />
              </div>
              <p className="text-gray-400 font-medium">Dress</p>
              <h3>Delivery Estimation</h3>
              <h3 className="text-orange-400 font-semibold text-md md:text-xl">
                5 working Days
              </h3>
              <h3 className="font-semibold text-lg">$95</h3>
            </div>
          </div>
        </div>
        <div className=" py-10 w-[20rem] space-y-4 ">
          <h6 className="font-semibold text-xl">Order Summary</h6>
          <div className="flex justify-between items-center">
            <p className="text-lg font-light">Quantity:</p>
            <p>3 Products</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-lg font-light">Subtotal:</p>
            <p>$550</p>
          </div>
          <button
            onClick={handleCheckout}
            className="text-white bg-gray-900  mt-2 md:mt-0 w-full px-4 py-2"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
