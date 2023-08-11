import BASE_PATH_FORAPI from "@/Components/shared/BasePath";
import { FC } from "react"
import { client } from "../../../../sanity/lib/client";
import Card from "@/Components/views/Card";
import AllProductsCompo from "@/Components/AllProducts";


// async function fetchAllProductsData(){
//   let res = await fetch(`${BASE_PATH_FORAPI}/api/products`)

//   if(!res.ok){
//     throw new Error("Failed to fetch")
//   }
//   return res.json();
// }

async function getata() {
  const res = await client.fetch("*[_type=='products' && productTypes[1] == 'Female']")
  console.log(res)
  return res
}

const Female:FC<{params:{ftype:string}}> = async({params}) => {
  // let res = await fetchAllProductsData()
  let res = await getata()
  console.log(res)
  
  return (
    <div className="">
        <AllProductsCompo  ProductData={res}/>
      </div>
  )
}

export default Female