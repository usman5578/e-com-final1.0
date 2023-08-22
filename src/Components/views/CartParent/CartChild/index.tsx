"use client";
import getStripePromise from "@/lib/stripe";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useCookies } from "react-cookie";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../../../sanity/lib/client";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}
const CartComponent = () => {
  const [cookies, setCookies, removeCookie] = useCookies();
  const [count, setCount] = useState(0);
  const products = cookies.products;
  console.log("Cart Page", products);

  const handleCheckout = async () => {
    const stripe = await getStripePromise();
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
  const handleDeleteProduct = (index: any) => {
    setTimeout(() => {
      removeCookie('products')
    }, 3000);
  };

  useEffect(() => {
    const allProducts = cookies.products || [];
    setCount(allProducts.length);
  }, [cookies]);

  return (
    <div className="py-10 ">
      {/* div No 1  */}
      <div className="py-6">
        <h1 className="text-xl font-semibold text-gray-900">Shopping Cart</h1>
      </div>

      {/* div No 2  */}

      <div className="flex flex-col lg:flex-row justify-around items-start  ">
        <div>
          {products?.map((items: any, index: number) => {
            return (
              <div key={index}>
                <div className="flex flex-col md:flex-row items-center py-10 space-y-5 max-w-[50rem] lg:space-x-32  md:space-x-5">
                  <div className="w-52 lg:w-80  ">
                    <Image
                      className="rounded-lg "
                      src={urlFor(items.images[0].asset._ref)
                        .width(1000)
                        .height(1000)
                        .url()}
                      alt="nothing"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className=" space-y-1 md:space-y-3 w-full  ">
                    <div className="flex space-x-10 items-center ">
                      <div className="text-md md:text-2xl text-gray-700 ">
                        {items.title}
                      </div>
                      <RiDeleteBin6Line
                      // onClick={() => handleDeleteProduct(index)}
                      />
                    </div>
                    <div className="text-gray-400 font-medium">
                      {items.title}
                    </div>
                    <div>Delivery Estimation</div>
                    <div className="text-orange-400 font-semibold text-md md:text-xl">
                      5 working Days
                    </div>
                    <div className=" flex font-semibold text-lg"></div>$
                    {items.price}
                    <div className=" flex -mt-10 font-semibold text-lg justify-end">
                      <div className="flex gap-2 items-center">
                        <div
                          // onClick={decrementQuantity}
                          className="select-none cursor-pointer flex justify-center items-center w-9 h-9 rounded-full bg-gray-200"
                        >
                          -
                        </div>
                        <div>{items.quantity}</div>
                        <div
                          // onClick={incrementQuanity}
                          className="select-none cursor-pointer flex justify-center items-center w-9 h-9 rounded-full border border-black"
                        >
                          +
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" py-10 w-[20rem] space-y-4 ">
          <div className="font-semibold text-xl">Order Summary</div>
          <div className="flex justify-between items-center">
            <div className="text-lg font-light">Quantity:</div>
            <div>{count} Products</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-lg font-light">Subtotal:</div>
            <div>$550</div>
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
