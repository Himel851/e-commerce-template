import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

const MobileImageSection = () => {

  const imageGallery = [
    "/images/product1.jpg",
    "/images/product2.jpg",
    "/images/product3.jpg",
    "/images/product4.jpg",
    "/images/product5.jpg",
  ];

  return (
    <div>
      {/* 🔹 Main Swiper */}
      <Swiper
        spaceBetween={10}
        navigation={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mainSwiper"
      >
        {imageGallery.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-auto aspect-[1/1]">
              <Image
                src={image}
                alt={`product-${index}`}
                layout="responsive"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔹 Thumbnail Swiper */}
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="thumbnailSwiper mt-4"
      >
        {imageGallery.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="cursor-pointer border-2 border-gray-200">
              <Image
                src={image}
                alt={`product-thumbnail-${index}`}
                layout="intrinsic"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔹 Modal (Static Preview) */}
      {/* <div className="fixed inset-0 z-[99] bg-black bg-opacity-75 flex items-center justify-center">
        <button className="absolute top-4 right-4 text-white text-3xl">
          &times;
        </button>

        <div className="relative">
          <Image
            src={imageGallery[0]}
            alt="current-product"
            width={800}
            height={600}
            className="object-contain"
          />

          <button className="absolute text-3xl h-12 w-12 rounded-full shadow left-0 top-1/2 transform -translate-y-1/2 bg-white text-black flex items-center justify-center">
            &#8249;
          </button>

          <button className="absolute text-3xl h-12 w-12 rounded-full shadow right-0 top-1/2 transform -translate-y-1/2 bg-white text-black flex items-center justify-center">
            &#8250;
          </button>
        </div>
      </div> */}
    </div>
  )
}

export default MobileImageSection