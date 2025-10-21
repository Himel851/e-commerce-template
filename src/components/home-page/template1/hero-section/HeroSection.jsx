'use client'

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from 'next/image';

const HeroSection = () => {

    const sliderImgs = [
        {
            id: 1,
            image: "/images/banner.jpg",
        },
        
        {
            id: 2,
            image: "/images/banner2.jpg",
        }
    ]
    return (
        <div>
            <Swiper
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[Autoplay, Pagination]}
            >
                {sliderImgs?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="h-auto">
                            <Image
                                width={200}
                                height={200}
                                src={item?.image}
                                className="object-contain h-auto w-full"
                                alt={`slider-${index + 1}`}
                                priority={true}
                                quality={100}
                                unoptimized={true}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HeroSection