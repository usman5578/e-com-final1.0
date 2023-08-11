"use client";

import { FC } from "react";
import { ProductType } from "../utils/ProductDataTypes";
import ProductDetailsCard from "./ProductDetailsCard";
// import ContextWrapper from "@/global/context";

const ContextProductDetailCard: FC<{ data: ProductType }> = ({ data }) => {
  return (
    <div>
      {/* <ContextWrapper> */}
        <ProductDetailsCard data={data} />
      {/* </ContextWrapper> */}
    </div>
  );
};

export default ContextProductDetailCard;
