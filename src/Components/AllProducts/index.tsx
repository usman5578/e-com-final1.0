import Image from "next/image";
import { ProductType } from "../utils/ProductDataTypes";
import Card from "../views/Card";
import Link from "next/link";
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../../sanity/lib/client'

interface propsType {
  response: Array<ProductType>;
}
const builder=imageUrlBuilder(client)
function urlFor(source:any){
    return builder.image(source)
}


export default async function AllProductsCompo({
  ProductData,
}: {
  ProductData: any;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {ProductData?.map((items: any, index: number) => (
        <div key={index}>
          {/* <Card  singleProductData={items}/> */}
          <Link href={`../Catalog/${items._id}`}>
            <div className="w-[18rem] xl:w-[24rem] py-10 hover:scale-110 lg:hover:scale-125 duration-300 space-y-3">
              <div className="relative w-full ">
                <div className="absolute inset-0 z-10 " />
                <Image
                  width={500}
                  height={500}
                  src={urlFor(items.image[0])
                    .width(1000)
                    .height(1000)
                    .url()}
                  alt={items.image[0].alt}
                />
              </div>
              <div className="space-y-2 text-gray-600 font-semibold text-lg">
                <h6>{items.productName}</h6>
                {/* <p> <PortableText className='font-normal text-sm' content={singleProductData.description}/> </p> */}
                <p>${items.price}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
