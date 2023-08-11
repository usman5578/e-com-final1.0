'use client'
import CartComponent from "@/Components/views/CartParent/CartChild";
import ContextWrapper from "@/global/context";
import React from "react";

const Cart = () => {
  return (
    <ContextWrapper>
      <CartComponent />
    </ContextWrapper>
  );
};
export default Cart;
