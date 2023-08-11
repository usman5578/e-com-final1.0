import Unique from '@/Components/Unique'
import BASE_PATH_FORAPI from '@/Components/shared/BasePath'
import Footer from '@/Components/views/Footer'
import Hero from '@/Components/views/Hero'
import NewsLetter from '@/Components/views/NewsLetter'
import ProductCarousel from '@/Components/views/ProductCarousel'
import ProductCarouselServer from '@/Components/views/ProductCarousel/ProductCarouselServer'
import ProductType from '@/Components/views/ProductType'



export default function Home() {

  return (
    <>
    <Hero/>
    <ProductType/>
    <ProductCarouselServer/>
    <Unique/>
    <NewsLetter/>
    <Footer/>
    </>
  )
}