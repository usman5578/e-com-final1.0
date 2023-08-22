'use client'
import { useCookies } from "react-cookie";


const CheckOutSuccess=()=>{
const [cookies, setCookies, removeCookies]= useCookies(['products'])
const products = cookies.products

removeCookies('products');
 
return (

    <div>Success</div>
)}

export default CheckOutSuccess

