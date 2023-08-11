import Image from "next/image";

const Unique = () => {
  return (
    <div className="px-1 text-gray-700">
      <div className="text-3xl md:text-5xl flex flex-row justify-start md:justify-end font-bold ">
        <h6 className="max-w-xs">
          Unique and Authentic Vintage Designer Jewellery
        </h6>
      </div>
      <div className="flex flex-col lg:flex-row justify-between py-5">
        {/* Left Side  */}
        <div className="relative basis-1/2 gap-10 grid grid-cols-2 grid-rows-2 ">
          <div className="absolute inset-0  text-gray-200 -z-10">
            <h6 className="text-7xl lg:text-[7.3rem] font-bold leading-[6rem]">
              Different From Others
            </h6>
          </div>
          <div className="max-w-[13rem] space-y-2">
            <h6 className="font-semibold text-xl">
              Using Good Quality Materials
            </h6>
            <p className="text-md leading-5">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className="max-w-[13rem] space-y-2">
            <h6 className="font-semibold text-xl">100% Handmade Products</h6>
            <p className="text-md leading-5">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className="max-w-[13rem] space-y-2">
            <h6 className="font-semibold text-xl">Modern Fashion Design</h6>
            <p className="text-md leading-5">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>

          <div className="max-w-[13rem] space-y-2">
            <h6 className="font-semibold text-xl">Discount for Bulk Orders</h6>
            <p className="text-md leading-5">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className=" mt-10 lg:mt-0 flex flex-col lg:flex-row basis-1/2 space-x-6">
          <div>
            <Image
              width={1000}
              height={1000}
              alt="Image"
              src={
                "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature.1118a2f3.png&w=384&q=75"
              }
            />
          </div>
          <div className="mt-10 lg:mt-20 ">
            <p className="max-w-[68rem] mb-5 text-justify ">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <button
          aria-label="redirect to sale page"
          className="rounded-sm ring-1 ring-slate-700 text-lg bg-gray-900 py-3 px-5 text-white font-semibold flex items-center justify-center"
        >
           See All Products
        </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unique;
