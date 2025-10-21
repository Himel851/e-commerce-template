'use client'

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from 'next/image';

const BannerSection = () => {

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
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{ delay: 3000 }}
              loop={true}
              pagination={true}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
                {sliderImgs?.map((item, index) => (
                    <SwiperSlide key={index}>
                         <div className="w-full h-full">
                          <Image
                            src={item?.image}
                            alt="banner"
                            height={0}
                            width={0}
                            // @ts-ignore
                            sizes={100}
                            className="w-full h-[180px] md:h-[460px] object-cover"
                          />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}


export default BannerSection