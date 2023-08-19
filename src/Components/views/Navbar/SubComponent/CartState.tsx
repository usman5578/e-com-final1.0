'use client'
import { BsCart2 } from "react-icons/bs";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import Link from "next/link";



const CartState = () => {
const [cookies] = useCookies(['products'])
const [count, setCount] = useState(0)

 console.log([cookies]) 
  useEffect(()=>{
    const allProducts = cookies.products || []
    console.log("cart Products here", allProducts)
    setCount(allProducts.length)
  
  },[cookies])

  return (
    <Link href='/cart'> 
    <div className="flex-shrink-0 w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center relative">
      <div className=" absolute top-1 right-2 rounded-full w-4 h-4 flex items-center justify-center bg-red-400 text-xs font-light">
        {count}
      </div>
      <BsCart2 size={24} />
    </div>
    </Link>
  );
};

export default CartState;
