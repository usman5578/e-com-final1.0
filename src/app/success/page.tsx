"use client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const CheckOutSuccess = () => {
  const [cookies, setCookies, removeCookies] = useCookies(["products"]);
  const products = cookies.products;
  removeCookies("products");
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(redirectTimer);
  }, []);
  return <div>Success</div>;
};

export default CheckOutSuccess;
