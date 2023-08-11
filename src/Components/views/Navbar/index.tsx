"use client";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { NavbarArray, NavbarItemType,
} from "@/Components/utils/NavbarArrayandTypes";
import Image from "next/image";
import Link from "next/link";
import CartState from "./SubComponent/CartState";
import { BsCart2 } from "react-icons/bs";



const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);
  return (
    // Main Div
    <div>
      <div className="py-6 flex  justify-between items-center space-x-12 relative">
        {/* Logo  */}
        <Link href="/" className="w-36 flex-shrink-0">
          <Image width={500} height={500} src="/logo.webp" alt="Logo" />
        </Link>
        <div className="hidden lg:flex justify-between items-center w-full">
          {/* Categories  */}
          <ul className="flex space-x-3 font-medium text-lg">
            {NavbarArray.map((item: NavbarItemType, index: number) => (
              <li
                key={index}
                className="flex items-center gap-0 relative  px-3 py-1 hover:bg-gray-100 cursor-pointer group"
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          {/* Search bar and Icon  */}
          <div className=" outline-none border flex  items-center text-gray-600 px-3 rounded-md w-80 ">
            <BiSearch />
            <input
              type="text"
              className="pl-1 pr-2 py-1 focus:border-none"
              placeholder="Search in Our Store"
            />
          </div>
          {/* Cart  */}
          <CartState />
        </div>
        {/* Mobile Navbar icons */}
        <div onClick={() => setNavbarOpen(!isNavbarOpen)}>
          {isNavbarOpen ? (
            <div className="flex z-50 lg:hidden">
              <IoMdClose size={30} />
            </div>
          ) : (
            <div className="flex lg:hidden">
              <GiHamburgerMenu size={25} />
            </div>
          )}
        </div>
      </div>
      {/* Mobile Navbar  */}
      {isNavbarOpen && <MobileNavbar />}
    </div>
  );
};

export default Navbar;

const MobileNavbar = () => {
  return (
    <div className="w-full px-6  py-4 h-screen absolute z-50 top-16 left-0  pt-16 duration-300 bg-white flex flex-col items-center justify-start space-y-8  lg:hidden">
      <div className="flex-shrink-0 w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center relative">
        <div className=" absolute top-1 right-2 rounded-full w-4 h-4 flex items-center justify-center bg-red-400 text-xs font-light">
          0
        </div>
        <BsCart2 size={24} />
      </div>

      {NavbarArray.map((items: NavbarItemType, index: number) => {
        return (
          <div className="z-10" key={index}>
            <Link className="hover:bg-gray-100" href={items.href}>
              {items.label}
            </Link>
          </div>
        );
        // <Expand key={index} items={items} />;
      })}
    </div>
  );
};
