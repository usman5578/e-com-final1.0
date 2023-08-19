import React from 'react'
import { Instagram, Twitter } from "lucide-react";
import { Facebook } from "lucide-react";
import Image from 'next/image';
import logo from "../../../../public/logo.webp";

const Footer = () => {
  return (
   
   
    <div className=" flex flex-col justify-center lg:flex-row lg:justify-between space-y-10 pb-20 ">
      {/* {1St Column} */}
      
      <div className="flex  flex-col max-w-[32rem]">
        <Image src={logo} alt="logo" />
        <p className='pt-10 pb-10'>
          Small, artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </p>
        <div className=" flex  gap-4" >
            <div className="w-10 h-10 justify-center bg-gray-100 border-0 rounded-lg shadow-md">
            <Twitter className="m-2" size={25}/>
            </div>
            <div className="w-10 h-10 justify-center bg-gray-100 border-0 rounded-lg shadow-md">
            <Facebook className="m-2" size={20}/> 
            </div>
            <div className="w-10 h-10 justify-center bg-gray-100 border-0 rounded-lg shadow-md">
            <Instagram className="m-2" size={20}/>
            </div>
            </div>
      </div>
      {/* 2nd Column  */}
      <div className="flex flex-col max-w-[16rem]">
        <h2 className="text-3xl ">Company</h2>
        <a href="">About</a>
        <a href="">Term of Use</a>
        <a href="">Privacy Policy</a>
        <a href="">How It works</a>
        <a href="">Contact Us</a>
      </div>
      {/* third Column  */}
      <div className="flex flex-col max-w-[16rem]">
        <h2 className="text-3xl mb-6">Support</h2>
        <a href="" >Support Carrer</a>
        <a href="" >24h service</a>
        <a href="" >Quick Chat</a>
      </div>
      {/* forth Column  */}
      <div className="flex flex-col max-w-[16rem]">
        <h2 className="text-3xl mb-6">Contact</h2>
        <a href="" >WhatsApp</a>
        <a href="" >24h service</a>
      </div>
    

    </div>

  )
}

export default Footer