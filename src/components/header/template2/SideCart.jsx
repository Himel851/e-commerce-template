"use client";

import Image from "next/image";
import React from "react";

const SideCart = () => {
  return (
    <div className="p-4">
      <div className="mt-4">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="grid grid-cols-12 gap-4 mt-4 shadow p-2 rounded-md">
            <div className="col-span-12">
              <div className="flex flex-row gap-4">
                {/* Product Image */}
                <div className="w-[4rem] h-16">
                  <Image
                    width={64}
                    height={64}
                    src="/image/product/placeholder_600x.webp"
                    alt="product"
                    className="w-full h-full rounded object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="w-full">
                  <p className="text-[12px] font-medium text-[#4c4b4b] line-clamp-1">
                    Sample Product Name
                  </p>

                  {/* Variation List */}
                  <div className="flex flex-wrap gap-2 my-1">
                    <span className="text-[11px] bg-gray-100 border border-gray-300 px-2 py-[2px] rounded text-gray-700">
                      Size: M
                    </span>
                    <span className="text-[11px] bg-gray-100 border border-gray-300 px-2 py-[2px] rounded text-gray-700">
                      Color: Black
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">Tk 1200</p>
                    <p className="text-[12px] line-through text-red-400 font-semibold">
                      Tk 1500
                    </p>
                  </div>

                  {/* Quantity and Delete */}
                  <div className="flex justify-between mt-1">
                    <div className="flex items-center gap-2">
                      <p className="text-[12px]">Qty</p>
                      <div className="flex items-center">
                        <p className="text-sm rounded border border-[#c3c1c1] px-2 cursor-pointer">
                          -
                        </p>
                        <p className="px-2 text-sm">2</p>
                        <p className="text-sm rounded border border-[#c3c1c1] px-2 cursor-pointer">
                          +
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer text-red-400">
                      <i className="ri-delete-bin-5-line text-lg"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideCart;
