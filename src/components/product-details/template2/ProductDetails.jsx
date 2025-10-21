"use client"

import React, { useState } from 'react'
import DesktopImageSection from './DesktopImageSection'
import { FaWhatsapp } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import MobileImageSection from './MobileImageSection';


const ProductDetails = () => {
    const [openIndex, setOpenIndex] = useState([]);

    const handleAccordionClick = (index) => {
        if (openIndex.includes(index)) {
            setOpenIndex(openIndex.filter((i) => i !== index)); // Close if clicked again
        } else {
            setOpenIndex([...openIndex, index]); // Open the clicked accordion
        }
    };
    return (
        <div>
            <div className="grid grid-cols-12 gap-4 py-4">
                <div className="col-span-12 lg:col-span-6">
                    <div className="hidden lg:block">
                        <DesktopImageSection />
                    </div>
                    <div className="block lg:hidden">
                        <MobileImageSection />
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 md:pr-12 ">
                    {/* Title */}
                    <div className="">
                        <h2 className="text-xl md:text-3xl font-bold md:leading-8 text-primary">
                            Cutout Waist Long Sleeve Jersey Gown
                        </h2>

                        {/* Price Section */}
                        <div className="flex items-center gap-2 mt-4">
                            <div>
                                <h2>
                                    <span className="text-orange-500 font-bold text-2xl">TK 2,400</span>
                                    <span className="text-[#666666] text-xl line-through font-medium ml-2">
                                        TK 2,650
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Short Description */}
                    <div className="text-black mt-2 hidden lg:block">
                        <p>
                            This elegant gown features a modern cutout design at the waist, crafted
                            from premium jersey fabric for a perfect fit and comfort.
                        </p>
                    </div>

                    {/* Variant Section */}
                    <div className="mt-4">
                        <div className="mb-2">
                            <p className="uppercase font-semibold text-black text-sm">Color</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <button className="px-4 py-2 text-xs text-white bg-primary">Red</button>
                                <button className="px-4 py-2 text-xs border border-black">Black</button>
                                <button className="px-4 py-2 text-xs border border-black">Blue</button>
                            </div>
                        </div>

                        <div className="mb-2">
                            <p className="uppercase font-semibold text-black text-sm">Size</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <button className="px-4 py-2 text-xs text-white bg-primary">M</button>
                                <button className="px-4 py-2 text-xs border border-black">L</button>
                                <button className="px-4 py-2 text-xs border border-black">XL</button>
                            </div>
                        </div>
                    </div>

                    {/* Quantity + Add to Cart */}
                    <div className="flex gap-2 mt-6 md:w-[421px]">
                        <div className="flex border border-gray-300 rounded items-center">
                            <button className="w-16 text-gray-500 px-3 py-2 border-r border-gray-300">
                                -
                            </button>
                            <input
                                className="w-16 text-center border-none outline-none bg-transparent"
                                value="1"
                                readOnly
                            />
                            <button className="w-16 text-gray-500 px-3 py-2 border-l border-gray-300">
                                +
                            </button>
                        </div>

                        <button className="px-4 py-3 w-full hover:bg-primary bg-white hover:text-white border border-black text-black font-medium flex-grow text-[12px] uppercase">
                            Add to Cart
                        </button>
                    </div>

                    {/* Wishlist + Buy Now */}
                    <div className="flex gap-2 mt-3 w-full md:w-[421px]">
                        <button className="bg-primary text-white text-[10px] md:text-sm py-1 px-4">
                            <i className="text-lg ri-heart-3-line"></i>
                        </button>

                        <button className="px-4 py-4 border bg-primary text-white font-medium w-full text-[12px] hover:bg-primary hover:text-white uppercase">
                            Buy Now
                        </button>
                    </div>

                    {/* Social Buttons */}
                    <div className="mt-3 md:w-[421px] flex gap-2">
                        <a
                            href="#"
                            className="px-4 py-4 border bg-[#25D366] text-white font-medium w-full text-sm uppercase flex items-center justify-center gap-4"
                        >
                            <FaWhatsapp size={20} /> WhatsApp
                        </a>

                        <a
                            href="#"
                            className="px-4 py-4 border bg-[#2196F3] text-white font-medium w-full text-sm uppercase flex items-center justify-center gap-4"
                        >
                            <RiMessengerLine size={20} /> Messenger
                        </a>
                    </div>

                    {/* Stock Status & SKU */}
                    <div className="mt-6 flex flex-wrap gap-8">
                        <p className="text-medium uppercase font-normal text-[#767676]">
                            Status :
                            <span className="pl-2 text-green-500 font-bold">In Stock</span>
                        </p>
                        <p>|</p>
                        <p className="text-medium uppercase font-medium text-[#767676]">
                            SKU : PRD-00123
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-3 base-container">
                {/* Accordion 1 - Short Description (Only visible on mobile) */}
                <div className="collapse collapse-plus border-[#99989883] border-b rounded-none group lg:hidden">
                    <input
                        type="checkbox"
                        checked={openIndex.includes(0)}
                        onChange={() => handleAccordionClick(0)}
                    />
                    <div className="collapse-title text-[#666666] text-sm font-normal uppercase group-hover:text-primary">
                        Short Description
                    </div>
                    {openIndex.includes(0) && (
                        <div className="collapse-content">
                            {/* <div
                                className="text-black"
                                dangerouslySetInnerHTML={{ __html: info?.shortDescription }}
                            ></div> */}
                        </div>
                    )}
                </div>


                {/* Accordion 2 */}
                <div className="collapse collapse-plus border-[#99989883] border-y rounded-none group">
                    <input
                        type="checkbox"
                        checked={openIndex.includes(1)}
                        onChange={() => handleAccordionClick(1)}
                    />
                    <div className="collapse-title text-[#666666] text-sm font-normal uppercase group-hover:text-primary">
                        Description
                    </div>
                    {openIndex.includes(1) && (
                        <div className="collapse-content">
                            {/* <div
                                className="text-black"
                                dangerouslySetInnerHTML={{ __html: info?.description }}
                            ></div> */}
                        </div>
                    )}
                </div>


                {/* Accordion 3 */}
                <div className="collapse collapse-plus border-[#99989883] border-b rounded-none group">
                    <input
                        type="checkbox"
                        checked={openIndex.includes(2)}
                        onChange={() => handleAccordionClick(2)}
                    />
                    <div className="collapse-title text-[#666666] text-sm font-normal uppercase group-hover:text-primary">
                        Reviews
                    </div>
                    {openIndex.includes(2) && (
                        <div className="collapse-content">
                            <p></p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductDetails