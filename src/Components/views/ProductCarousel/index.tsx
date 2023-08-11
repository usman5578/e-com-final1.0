"use client"
import { ProductType } from '@/Components/utils/ProductDataTypes'
import React, { FC } from 'react'
import Card from '../Card'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

const ProductCarousel: FC<{ProductData:ProductType[]}> = ({ProductData}) => {
    let initialX: number;
    let isDragging = false;
    let tabBox: any;

    const isBrowser = () => typeof window !== "undefined";

    if (isBrowser()) {
        tabBox = document.querySelector(".scrollGrab");
    }

    // Desktop functions
    function mouseMoves(e: any) {
        if (!isDragging) return;
        if (tabBox) {
            tabBox.scrollLeft -= e.movementX;
        }
    };
    function mouseDown() {
        
        isDragging = true;
    }
    function mouseUp() {
        isDragging = false
    }

    // mobile functions
    function mouseMovesForMobile(e: any) {
        if (!isDragging) return;
        if (tabBox) {
            var currentX = e.touches[0].clientX;
            var movementX = currentX - initialX;
            tabBox.scrollLeft -= movementX / 6;
        }
    };
    function mouseDownForMobile(e: any) {
        isDragging = true;
        initialX = e.touches[0].clientX;
    };


    return (
      <>
      <div className="text-center space-y-4">
          <p className="text-blue-800 font-bold text-s">PROMOTIONS</p>
          <h3 className="text-4xl font-bold text-gray-800">Our Promotions Events</h3>
      </div>
        <div
            onMouseMove={mouseMoves}
            onMouseDown={mouseDown}
            onMouseUp={mouseUp}
            className="select-none flex gap-4 overflow-y-hidden py-5 overflow-x-hidden scrollGrab"
            onTouchMove={mouseMovesForMobile}
            onTouchStart={mouseDownForMobile}
            onTouchEnd={mouseUp}
            >
            {ProductData.map((item: ProductType, index: number) => (
              <Card key={index + 4} singleProductData={item} />
              ))}
        </div>
              </>
    )
}

export default ProductCarousel
// const ProductCarousel: FC<{ProductData:ProductType[]}> = ({ProductData}) => {
//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1100,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: false,
//           centerMode:true,
//         },
//       },
//       {
//         breakpoint: 800,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: false,
//           centerMode:true,
//         },
//       },
//     //   {
//     //     breakpoint: 480,
//     //     settings: {
//     //       slidesToShow: 1,
//     //       slidesToScroll: 1,
//     //     },
//     //   },
//     //   // You can unslick at a given breakpoint now by adding:
//     //   // settings: "unslick"
//     //   // instead of a settings object
//     ],
//   };
//   return (

//     <div >
//       <Slider {...settings} className=' '>

//       {ProductData.map((items:ProductType, index:number)=>(
//         <Card  singleProductData={items}/>))}
//       </Slider>
//     </div>
//   )
// }

// export default ProductCarousel