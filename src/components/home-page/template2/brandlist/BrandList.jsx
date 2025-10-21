'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const BrandList = () => {
    // Demo JSON data
    const brands = [
        { id: 1, name: 'Apple', slug: 'apple', image: '/images/brand1.png' },
        { id: 2, name: 'Samsung', slug: 'samsung', image: '/images/brand2.png' },
        { id: 3, name: 'Nike', slug: 'nike', image: '/images/brand3.png' },
        { id: 4, name: 'Adidas', slug: 'adidas', image: '/images/brand2.png' },
        { id: 5, name: 'Sony', slug: 'sony', image: '/images/brand3.png' },
        { id: 6, name: 'Dell', slug: 'dell', image: '/images/brand1.png' },
        { id: 7, name: 'HP', slug: 'hp', image: '/images/brand3.png' },
        { id: 8, name: 'LG', slug: 'lg', image: '/images/brand2.png' },
        { id: 9, name: 'LG', slug: 'lg', image: '/images/brand3.png' },
        { id: 11, name: 'Apple', slug: 'apple', image: '/images/brand1.png' },
        { id: 21, name: 'Samsung', slug: 'samsung', image: '/images/brand2.png' },
        { id: 31, name: 'Nike', slug: 'nike', image: '/images/brand3.png' },
        { id: 41, name: 'Adidas', slug: 'adidas', image: '/images/brand2.png' },
        { id: 51, name: 'Sony', slug: 'sony', image: '/images/brand3.png' },
        { id: 61, name: 'Dell', slug: 'dell', image: '/images/brand1.png' },
        { id: 71, name: 'HP', slug: 'hp', image: '/images/brand3.png' },
        { id: 81, name: 'LG', slug: 'lg', image: '/images/brand2.png' },
        { id: 12, name: 'Apple', slug: 'apple', image: '/images/brand1.png' },
        { id: 22, name: 'Samsung', slug: 'samsung', image: '/images/brand2.png' },
        { id: 32, name: 'Nike', slug: 'nike', image: '/images/brand3.png' },
        { id: 42, name: 'Adidas', slug: 'adidas', image: '/images/brand2.png' },
        { id: 52, name: 'Sony', slug: 'sony', image: '/images/brand3.png' },
        { id: 62, name: 'Dell', slug: 'dell', image: '/images/brand1.png' },
        { id: 72, name: 'HP', slug: 'hp', image: '/images/brand3.png' },
    ];

    return (
        <div className="container section-gap pb-12">
            <h2 className="text-title text-center mb-10">Brand List</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4">
                {brands.map((brand) => (
                    <Link
                        href={`/product-by-brand/${brand.slug}`}
                        key={brand.id}
                        className="bg-white shadow-md border rounded-lg p-4 flex justify-center items-center transition-transform transform hover:scale-105"
                    >
                        <img
                            src={brand.image}
                            alt={brand.name}
                            className="w-24 h-24 object-contain"
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};


export default BrandList