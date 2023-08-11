import React from 'react'
import BASE_PATH_FORAPI from '@/Components/shared/BasePath';
import ProductCarousel from '.';


async function fetchAllProductsData(){
    let res = await fetch(`${BASE_PATH_FORAPI}/api/products`)
  
    if(!res.ok){
      throw new Error("Failed to fetch")
    }
    return res.json();
  }

const ProductCarouselServer = async () => {
    let productData = await fetchAllProductsData()

  return (
    <ProductCarousel ProductData={productData.response}/>
  )
}

export default ProductCarouselServer