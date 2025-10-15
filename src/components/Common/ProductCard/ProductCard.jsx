'use client';

import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ productDetails }) => {
  // Check if product is out of stock
  const isOutOfStock = productDetails?.stock === 0;

  return (
    <div className="group relative border border-black rounded-t cursor-pointer">
      {/* Image Section */}
      <div className="relative overflow-hidden group">
        <Link href={`/product/${productDetails?.slug}`}>
          {/* Primary Image */}
          <Image
            width={500}
            height={500}
            src={productDetails?.galleryImage[0]}
            alt="product"
            priority
            id="product_view"
            className="rounded w-full h-full transform transition-transform duration-[1400ms]"
          />

          {/* black Image on Hover */}
          {productDetails?.galleryImage?.length > 1 && (
            <Image
              width={500}
              height={500}
              src={productDetails?.galleryImage[1]}
              alt="product hover"
              priority
              id="product_hover_view"
              className="absolute top-0 left-0 w-full h-full rounded opacity-0 group-hover:opacity-100 transform transition-transform duration-[1400ms] group-hover:scale-[1.3]"
            />
          )}

          {/* Out of Stock Overlay */}
          {isOutOfStock && (
            <div className="absolute inset-0 bg-gray-500/50 flex items-center justify-center">
              <span className="bg-gray-600/90 text-white px-4 py-2 text-sm font-medium">
                OUT OF STOCK
              </span>
            </div>
          )}
        </Link>
      </div>

      {/* Discount Badge */}
      <button className="absolute top-2 left-2 rounded-full bg-black text-white text-xs px-3 py-1">
        10%
      </button>

      {/* Product Details */}
      <div className="mt-3 p-2">
        <p className="text-[#333] font-medium line-clamp-1 text-[15px] text-center">
          Product Name
        </p>
        <div className="flex items-center justify-center space-x-2 mt-2">
          <p className="text-sm line-through">1000৳</p>
          <p className="text-black font-bold text-sm">800৳</p>
        </div>
      </div>

      {/* Buy Now / Product Details Button */}
      <div className="w-full">
        {isOutOfStock ? (
          <button className="bg-gray-600 text-white w-full py-2 text-sm capitalize font-semibold text-center hover:bg-gray-700 transition-colors block cursor-pointer">
            Product Details
          </button>
        ) : (
          <button
            className="bg-black text-white w-full py-2 text-sm capitalize font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
            id="product_view"
          >
            Buy Now
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
