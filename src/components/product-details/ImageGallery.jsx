"use client";

import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ImageGallery = () => {
    return (
        <div className="">
            {/* ✅ Desktop zoom image (Static) */}
            <div className="cursor-crosshair hidden lg:flex items-center justify-center">
                <Image
                    src="/images/product1.jpg"
                    alt="Main Product"
                    width={500}
                    height={500}
                    className="object-contain"
                />
            </div>

            {/* ✅ Mobile image view (Static) */}
            <div className="flex lg:hidden justify-center cursor-pointer">
                <Image
                    src="/images/product1.jpg"
                    alt="Main Product"
                    width={450}
                    height={450}
                    priority
                    unoptimized
                    className="object-contain"
                />
            </div>

            {/* ✅ Thumbnail Gallery */}
            <div className="mt-3 relative">
                <div className="grid grid-cols-5 gap-3">
                    <div className="border border-orange-500 cursor-pointer">
                        <Image
                            width={500}
                            height={500}
                            src="/images/product2.jpg"
                            alt="thumb 1"
                            unoptimized
                        />
                    </div>
                    <div className="border cursor-pointer">
                        <Image
                            width={500}
                            height={500}
                            src="/images/product3.jpg"
                            alt="thumb 2"
                            unoptimized
                        />
                    </div>
                    <div className="border cursor-pointer">
                        <Image
                            width={500}
                            height={500}
                            src="/images/product4.jpg"
                            alt="thumb 3"
                            unoptimized
                        />
                    </div>
                    <div className="border cursor-pointer">
                        <Image
                            width={500}
                            height={500}
                            src="/images/product5.jpg"
                            alt="thumb 4"
                            unoptimized
                        />
                    </div>
                    <div className="border cursor-pointer">
                        <Image
                            width={500}
                            height={500}
                            src="/images/product6.jpg"
                            alt="thumb 5"
                            unoptimized
                        />
                    </div>
                </div>

                {/* ✅ Navigation Buttons */}
                <button className="absolute top-10 left-0 bg-gray-100 pl-2 pr-1 py-2">
                    <IoIosArrowBack className="text-black" />
                </button>

                <button className="absolute top-10 right-0 bg-gray-100 pr-2 pl-1 py-2">
                    <IoIosArrowForward className="text-black" />
                </button>
            </div>
        </div>
    );
};

export default ImageGallery;
