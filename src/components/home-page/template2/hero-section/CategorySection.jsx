"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import BannerSection from "./BannerSection";
import Image from "next/image";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

// 🔹 Local mock data (previous JSON)
const allCategories = [
  {
    id: 1,
    name: "Electronics",
    slug: "electronics",
    imageForCategoryProduct: "/images/product1.jpg",
    children: [
      {
        id: 11,
        name: "Mobile Phones",
        slug: "mobile-phones",
        imageForCategoryProduct: "/images/product1.jpg",
        children: [
          {
            id: 111,
            name: "Smartphones",
            slug: "smartphones",
            imageForCategoryProduct: "/images/product1.jpg",
          },
          {
            id: 112,
            name: "Feature Phones",
            slug: "feature-phones",
            imageForCategoryProduct: "/images/product1.jpg",
          },
        ],
      },
      {
        id: 12,
        name: "Laptops",
        slug: "laptops",
        imageForCategoryProduct: "/images/product1.jpg",
      },
      {
        id: 13,
        name: "Cameras",
        slug: "cameras",
        imageForCategoryProduct: "/images/product1.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Fashion",
    slug: "fashion",
    imageForCategoryProduct: "/images/product2.jpg",
    children: [
      {
        id: 21,
        name: "Men’s Wear",
        slug: "mens-wear",
        imageForCategoryProduct: "/images/product1.jpg",
      },
      {
        id: 22,
        name: "Women’s Wear",
        slug: "womens-wear",
        imageForCategoryProduct: "/images/product1.jpg",
      },
      {
        id: 23,
        name: "Accessories",
        slug: "accessories",
        imageForCategoryProduct: "/images/product1.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Home Appliances",
    slug: "home-appliances",
    imageForCategoryProduct: "/images/product3.jpg",
    children: [
      {
        id: 31,
        name: "Refrigerators",
        slug: "refrigerators",
        imageForCategoryProduct: "/images/product1.jpg",
      },
      {
        id: 32,
        name: "Air Conditioners",
        slug: "air-conditioners",
        imageForCategoryProduct: "/images/product1.jpg",
      },
      {
        id: 33,
        name: "Microwave Ovens",
        slug: "microwave-ovens",
       imageForCategoryProduct: "/images/product1.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Shirt",
    slug: "shirt",
    imageForCategoryProduct: "/images/product4.jpg",
  },
  {
    id: 4,
    name: "Pant",
    slug: "pant",
    imageForCategoryProduct: "/images/product5.jpg",
  },
  {
    id: 5,
    name: "Sharee",
    slug: "sharee",
    imageForCategoryProduct: "/images/product6.jpg",
  },
  {
    id: 6,
    name: "Jamdani",
    slug: "jamdani",
    imageForCategoryProduct: "/images/product7.jpg",
  },
  {
    id: 7,
    name: "T Shirt",
    slug: "t-shirt",
    imageForCategoryProduct: "/images/product8.jpg",
  },
  {
    id: 8,
    name: "Art Pads",
    slug: "art-pads",
    imageForCategoryProduct: "/images/product9.jpg",
  },
  {
    id: 9,
    name: "Jamdani",
    slug: "jamdani",
    imageForCategoryProduct: "/images/product10.jpg",
  },
  {
    id: 10,
    name: "T Shirt",
    slug: "t-shirt",
    imageForCategoryProduct: "/images/product3.jpg",
  },
  {
    id: 11,
    name: "Art Pads",
    slug: "art-pads",
    imageForCategoryProduct: "/images/product5.jpg",
  },
];

const CategorySection = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [childrenData, setChildrenData] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      setChildrenData([]);
      setHoveredCategory(null);
    }
  }, [isHovered]);

  const handleMouseEnterCategory = (category) => {
    setHoveredCategory(category?.name);
    if (category?.children) {
      setChildrenData(category?.children);
    } else {
      setChildrenData([]);
    }
    setIsHovered(true);
  };

  const handleMouseLeaveGrid = () => {
    setIsHovered(false);
    setHoveredCategory(null);
    setChildrenData([]);
  };

  return (
    <div className="base-container">

      <div
        className="grid grid-cols-12 relative"
        onMouseLeave={handleMouseLeaveGrid}
      >
        {/* Sidebar Section */}
        <div className="hidden lg:block lg:col-span-3 2xl:col-span-2 h-[460px] bg-white">
          <SimpleBar style={{ maxHeight: 460 }} autoHide={false} forceVisible="y">
            {allCategories?.map((category, index) => (
              <Link
                href={`/category/${category?.slug}`}
                key={index}
                className="p-3 group hover:bg-[#c2b6b631] border border-t-0 border-gray-300 flex gap-3 cursor-pointer"
                onMouseEnter={() => handleMouseEnterCategory(category)}
              >
                <Image
                  src={category?.imageForCategoryProduct}
                  alt={category?.name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-5 h-5"
                />
                <h3 className="text-sm text-black uppercase font-medium group-hover:ml-2 transition-all duration-300">
                  {category?.name}
                </h3>
              </Link>
            ))}
          </SimpleBar>
        </div>

        {/* Right Section */}
        <div className="col-span-12 lg:col-span-9 2xl:col-span-10 bg-white">
          {childrenData?.length > 0 && isHovered ? (
            <div className="bg-white h-[460px] overflow-y-auto custom-scrollbar px-6 py-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {childrenData?.map((child, idx) => (
                  <Link
                    href={`/category/${child?.slug}`}
                    key={idx}
                    className="group block p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex flex-col items-center text-center">
                      <Image
                        src={child?.imageForCategoryProduct}
                        alt={child?.name}
                        width={80}
                        height={80}
                        className="w-20 h-20 object-contain mb-3 transition-transform group-hover:scale-110"
                      />
                      <h3 className="text-sm text-black uppercase font-medium group-hover:text-primary transition-colors duration-300">
                        {child?.name}
                      </h3>
                    </div>

                    
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <BannerSection />
          )}
        </div>
      </div>
    </div>
  );
};



export default CategorySection