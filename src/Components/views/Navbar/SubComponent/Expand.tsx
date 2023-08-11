"use client";
import { NavbarItemType } from "@/Components/utils/NavbarArrayandTypes";
import Link from "next/link";
import { FC, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";



const Expand: FC<{ items: NavbarItemType }> = ({ items }) => {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <div>
      <li
        className={` "h-10" : "h-12"
        }  items-center py-2 px-3 duration-500  border list-none`}
      >
        <div
          onClick={() => setExpanded(!isExpanded)}
          className="flex justify-between rounded-md duration-300 hover:bg-purple-600"
        >
          <Link href={items.href}>{items.label}</Link>
          {/* {items.isDropDown ? <RiArrowDropDownLine size={25} /> : ""}
        </div>
        <div className=" flex flex-col">
          {isExpanded &&
            items.dropDownData?.map(
              (subitem: NavbarItemType, index: number) => (
                <Link key={index} className="hover:bg-gray-50 rounded-md py-1 px-5 duration-300" href={subitem.href}>{subitem.label}</Link>
              )
            )} */}
        </div>
      </li>
    </div>
  );
};

export default Expand;
