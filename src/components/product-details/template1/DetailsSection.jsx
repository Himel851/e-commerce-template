"use client";
import Image from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";

export default function DetailsSection() {
    return (
        <div className="w-full bg-white rounded-lg shadow-sm  p-4">
            {/* Product Name */}
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                Product Name Here
            </h1>

            {/* Brand and SKU */}
            <div className="text-sm text-gray-600 mb-3">
                <p className="mt-3">
                    <span className="font-semibold">Brand :</span>
                    <span className="pl-2">Example Brand</span>
                </p>

                <p className="mt-3">
                    <span className="font-semibold">SKU :</span>
                    <span className="pl-2">SKU-12345</span>
                </p>

            </div>

            {/* Price Section */}
            <div className="flex items-center gap-3 mb-4">
                <p className="text-gray-500 line-through">৳ 1500</p>
                <p className="text-2xl font-bold text-red-600">৳ 1200</p>
                <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded">
                    20% OFF
                </span>
            </div>

            {/* Variations */}
            <div className="mb-5">
                <p className="text-sm font-semibold text-gray-800 mb-2">Available Variants:</p>
                <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:border-primary">
                        Small
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:border-primary">
                        Medium
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:border-primary">
                        Large
                    </button>
                </div>
            </div>

            {/* Color Options */}
            <div className="mb-5">
                <p className="text-sm font-semibold text-gray-800 mb-2">Select Color:</p>
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-gray-300 cursor-pointer"></div>
                    <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-gray-300 cursor-pointer"></div>
                    <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-gray-300 cursor-pointer"></div>
                </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-3 mb-6">
                <p className="text-sm font-semibold text-gray-800">Quantity:</p>
                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                    <button className="px-3 py-1 text-gray-700 hover:bg-gray-100">-</button>
                    <span className="px-4 text-gray-800">1</span>
                    <button className="px-3 py-1 text-gray-700 hover:bg-gray-100">+</button>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
                <button className="w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-primary/90 transition">
                    Add to Cart
                </button>
                <button className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600 transition">
                    Buy Now
                </button>
            </div>

            {/* Wishlist and Stock Info */}
            <div className="flex justify-between items-center mt-5">
                <button className="flex items-center gap-2 text-gray-600 hover:text-primary">
                    <IoMdHeartEmpty size={20} /> Add to Wishlist
                </button>
                <p className="text-sm text-green-600 font-medium">In Stock</p>
            </div>

            {/* Product Short Description */}
            <div className="mt-6 border-t pt-4">
                <p className="text-sm text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                    posuere vel lacus eget malesuada. Phasellus tincidunt mi sed magna
                    varius, at egestas eros varius.
                </p>
            </div>

            {/* Delivery Info */}
            <div className="mt-6 border-t pt-4 text-sm text-gray-700 space-y-1">
                <p>🚚 Delivery within 2–3 business days.</p>
                <p>🏪 Cash on Delivery available.</p>
                <p>🔁 7 Days Return & Refund Policy.</p>
            </div>
        </div>
    );
}
