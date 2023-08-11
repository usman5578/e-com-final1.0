import { client } from "../../../../sanity/lib/client"
import {FC} from 'react'
import AllProductsCompo from "@/Components/AllProducts";

async function getata() {
    const res = await client.fetch("*[_type=='products' && productTypes[1] == 'Male']")
    console.log(res)
    return res
  }
  
  const Female:FC<{params:{ftype:string}}> = async({params}) => {

    let res = await getata()
    console.log(res)
    
    return (
      <div className="">
          <AllProductsCompo  ProductData={res}/>
        </div>
    )
  }
  
  export default Female