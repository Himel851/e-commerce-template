"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

const DesktopImageSection = () => {
    const imageGallery = [
        "/images/product1.jpg",
        "/images/product2.jpg",
        "/images/product3.jpg",
        "/images/product4.jpg",
        "/images/product5.jpg",
    ];

    return (
        <div className="flex gap-4">
            {/* Left Thumbnail Section - Vertical Slider */}
            <div className="w-1/5 h-[450px] relative mt-8">
                {/* Up Arrow */}
                <button
                    type="button"
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20 flex justify-center items-center text-white bg-black/70 hover:bg-black w-8 h-8 rounded-full shadow cursor-pointer"
                    aria-label="Previous thumbnails"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                    </svg>
                </button>

                {/* Thumbnail Swiper */}
                <Swiper
                    direction={"vertical"}
                    spaceBetween={10}
                    slidesPerView={5}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation]}
                    className="h-full"
                >
                    {imageGallery.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="h-[70px] w-full cursor-pointer border-2 border-transparent">
                                <Image
                                    src={image}
                                    alt={`product-${index}`}
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Down Arrow */}
                <button
                    type="button"
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex justify-center items-center text-white bg-black/70 hover:bg-black w-8 h-8 rounded-full shadow cursor-pointer"
                    aria-label="Next thumbnails"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                </button>
            </div>

            {/* Right Main Image Section */}
            <div className="w-4/5 mr-12 h-[450px]">
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#000",
                        "--swiper-pagination-color": "#000",
                        height: "450px",
                    }}
                    spaceBetween={10}
                    navigation={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2 h-full"
                >
                    {imageGallery.map((image, index) => (
                        <SwiperSlide key={index} className="h-full">
                            <div className="w-full h-full flex items-center justify-center">
                                <Image
                                    src={image}
                                    alt={`product-${index}`}
                                    width={450}
                                    height={450}
                                    quality={100}
                                    className="max-h-[450px] max-w-full cursor-pointer object-contain"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};


export default DesktopImageSection