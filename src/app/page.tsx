import Unique from '@/Components/Unique'
import BASE_PATH_FORAPI from '@/Components/shared/BasePath'
import Footer from '@/Components/views/Footer'
import Hero from '@/Components/views/Hero'
import NewsLetter from '@/Components/views/NewsLetter'
import ProductCarousel from '@/Components/views/ProductCarousel'
import ProductType from '@/Components/views/ProductType'


async function fetchAllProductsData(){
  let res = await fetch(`${BASE_PATH_FORAPI}/api/products`)

  if(!res.ok){
    throw new Error("Failed to fetch")
  }
  return res.json();
}

export default async function Home() {
  let {response} = await fetchAllProductsData();
  return (
    <>
    <Hero/>
    <ProductType/>
    {/* <ProductCarousel ProductData={response}/>
    <Unique/>
    <NewsLetter/>
    <Footer/> */}
    </>
  )
}