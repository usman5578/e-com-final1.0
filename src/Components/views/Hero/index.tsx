import { heroGirlImg } from "@/Components/assets";
import Image from "next/image";
import { BsCart2 } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="flex justify-between items-center pt-14">
      {/* Right Side  */}
      <div className="space-y-5 max-w-[35rem] mt-5">
        <button
          aria-label="redirect to sale page"
          className="px-6 py-2 rounded-md bg-primaryWhite text-purple-900 font-medium"
        >
          Sale 70%
        </button>
        <h1 className="text-4xl md:text-6xl text-gray-800 font-bold">
          An Industrial Take on Streetwear
        </h1>
        <p className="text-gray-700 py-5">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <button
          aria-label="redirect to sale page"
          className="rounded-sm ring-1 ring-slate-700 text-lg bg-gray-900 py-3 px-5 text-white font-semibold flex items-center justify-center"
        >
          <BsCart2 className="mr-2" /> Start Shopping
        </button>
        <div className="flex justify-between  pt-20 ">
            <div className="w-16 md:w-28">
            <Image width={110} height={110} src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured1.66abddd4.png&w=128&q=75"} alt="Bazaar"/>
            </div>
            <div className=" w-16 md:w-28">
            <Image width={110} height={110} src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured2.247cd605.png&w=128&q=75"} alt="Bustle"/> 
            </div>
            <div className=" w-14 md:w-28"> 
            <Image width={110} height={110} src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured3.6076521d.png&w=128&q=75"}  alt="Versace"/>
            </div>
           <div className="w-16 md:w-28">
            <Image width={110} height={110} src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured4.0489f1fc.png&w=128&q=75"} alt="InStyle"/>
            </div> 
        </div>
      </div>
      {/* Right Side  */}
      <div className="hidden lg:flex  shrink-0 lg:h-[30rem] lg:w-[30rem] xl:h-[35rem] xl:w-[35rem] bg-primaryWhite rounded-full bg-[#FFECE3] max-w-[35rem]">
        <Image className="-mt-5" src={heroGirlImg} alt="Image" />
      </div>
    </div>
  );
};

export default Hero;
