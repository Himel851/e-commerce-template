"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopCategories = () => {
    const categoryData = [
        {
            id: 1,
            name: "Demo",
            slug: "demo",
            image: "/images/category1.jpg",
        },
        {
            id: 2,
            name: "Demo2",
            slug: "demo2",
            image: "/images/category2.jpg",
        },
        {
            id: 3,
            name: "Demo3",
            slug: "demo3",
            image: "/images/category3.jpg",
        },
    ];

    return (
        <div className="container my-4 md:my-6 lg:my-8">
            {/* ✅ Section Title */}
            <div className="flex items-center justify-center w-full mb-4">
                <div className="bg-gray-300 flex-grow"></div>
                <span className="mx-4 uppercase font-semibold text-[20px] text-gray-800">
                    Top Categories
                </span>
                <div className="bg-gray-300 flex-grow"></div>
            </div>

            {/* ✅ Category Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4">
                {categoryData?.map((item, index) => (
                    <Link
                        href={`/category/${item?.slug}`}
                        className="group relative hover:bg-black rounded-lg transition duration-300 ease-in-out"
                        key={index}
                    >
                        {/* ✅ Category Image */}
                        <div className="overflow-hidden rounded-md">
                            <Image
                                src={item?.image}
                                alt={item?.name || "category image"}
                                width={224}
                                height={224}
                                sizes="100"
                                priority
                                className="object-contain rounded-md group-hover:scale-105 transition-transform duration-300 ease-in-out"
                            />
                        </div>

                        {/* ✅ Category Name */}
                        <div className="w-full text-center my-3">
                            <p className="text-black group-hover:text-white px-3 capitalize text-xs font-semibold transition-colors duration-300">
                                {item?.name}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};


export default TopCategories