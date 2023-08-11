import AllProductsCompo from "@/Components/AllProducts";
import BASE_PATH_FORAPI from "@/Components/shared/BasePath"
import { client } from "../../../sanity/lib/client";


async function getata() {
  const res = await client.fetch("*[_type=='products']")
  // console.log(res)
  return res
}

const Products = async () => {
    const ProductData = await getata();

  return (
    <div>
        <AllProductsCompo ProductData={ProductData}/>
    </div>
  )
}

export default Products