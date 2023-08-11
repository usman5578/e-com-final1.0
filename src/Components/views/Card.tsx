'use client'
import React,{FC} from 'react'
import { ProductType } from '../utils/ProductDataTypes'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../../sanity/lib/client'
import PortableText from 'react-portable-text'
import Link from 'next/link'


const builder=imageUrlBuilder(client)
function urlFor(source:any){
    return builder.image(source)
}

const Card:FC<{singleProductData:ProductType}> = ({singleProductData}) => {
console.log(singleProductData);
  return (
    <Link href={`../Catalog/${singleProductData._id}`}>
    <div className='max-w-sm min-w-[28rem] hover:scale-110 duration-300 space-y-3'>
        <div className='relative w-full '>
          <div className='absolute inset-0 z-10 '/>
        <Image  width={500} height={500} src={urlFor(singleProductData.image[0]).width(1000).height(1000).url()} alt={singleProductData.image[0].alt}/>
        </div>   
        <div className='space-y-2 text-gray-600 font-semibold text-lg'>
          <h6>{singleProductData.productName}</h6>
          {/* <p> <PortableText className='font-normal text-sm' content={singleProductData.description}/> </p> */}
          <p>${singleProductData.price}</p>
        </div>   
    </div>
    </Link>
  )
}

export default Card