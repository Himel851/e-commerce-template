import React from 'react'
import Link from 'next/link'

import ProductCard from '@/components/Common/template2/ProductCard/ProductCard'

const CategoryProducts = () => {
    const categoryProducts = [
        {
            "categoryName": "Men's Fashion",
            "slug": "mens-fashion",
            "products": [
                {
                    "_id": "p001",
                    "name": "Classic Cotton T-Shirt",
                    "slug": "classic-cotton-tshirt",
                    "sku": "BS1001",
                    "galleryImage": [
                        "/images/product1.jpg",
                        "/images/product2.jpg",
                    ],
                    "price": 850,
                    "discountPrice": 750,
                    "stock": 20,
                    "status": "active"
                },
                {
                    "_id": "p002",
                    "name": "Denim Jeans",
                    "slug": "denim-jeans",
                    "sku": "BS1002",
                    "galleryImage": [
                        "/images/product3.jpg",
                        "/images/product4.jpg",
                    ],
                    "price": 1950,
                    "discountPrice": 1750,
                    "stock": 0,
                    "status": "active"
                },
                {
                    "_id": "p003",
                    "name": "Formal Shirt",
                    "slug": "formal-shirt",
                    "sku": "BS1003",
                    "galleryImage": [
                        "/images/product5.jpg",
                        "/images/product6.jpg",
                    ],
                    "price": 1450,
                    "discountPrice": 1200,
                    "stock": 10,
                    "status": "active"
                },
                {
                    "_id": "p004",
                    "name": "Leather Belt",
                    "slug": "leather-belt",
                    "sku": "BS1004",
                    "galleryImage": [
                        "/images/product7.jpg",
                        "/images/product8.jpg",
                    ],
                    "price": 950,
                    "discountPrice": 850,
                    "stock": 25,
                    "status": "active"
                },
                {
                    "_id": "p005",
                    "name": "Sports Cap",
                    "slug": "sports-cap",
                    "sku": "BS1005",
                    "galleryImage": [
                        "/images/product9.jpg",
                        "/images/product10.jpg",
                    ],
                    "price": 550,
                    "discountPrice": 450,
                    "stock": 0,
                    "status": "active"
                }
            ]
        },
        {
            "categoryName": "Accessories",
            "slug": "accessories",
            "products": [
                {
                    "_id": "p004",
                    "name": "Leather Belt",
                    "slug": "leather-belt",
                    "sku": "BS1004",
                    "galleryImage": [
                        "/images/product7.jpg",
                        "/images/product8.jpg",
                    ],
                    "price": 950,
                    "discountPrice": 850,
                    "stock": 25,
                    "status": "active"
                },
                {
                    "_id": "p005",
                    "name": "Sports Cap",
                    "slug": "sports-cap",
                    "sku": "BS1005",
                    "galleryImage": [
                        "/images/product9.jpg",
                        "/images/product10.jpg",
                    ],
                    "price": 550,
                    "discountPrice": 450,
                    "stock": 0,
                    "status": "active"
                }
            ]
        },
        {
            "categoryName": "Natural Foods",
            "slug": "natural-foods",
            "products": [
                {
                    "_id": "p001",
                    "name": "Classic Cotton T-Shirt",
                    "slug": "classic-cotton-tshirt",
                    "sku": "BS1001",
                    "galleryImage": [
                        "/images/product1.jpg",
                        "/images/product2.jpg",
                    ],
                    "price": 850,
                    "discountPrice": 750,
                    "stock": 20,
                    "status": "active"
                },
                {
                    "_id": "p002",
                    "name": "Denim Jeans",
                    "slug": "denim-jeans",
                    "sku": "BS1002",
                    "galleryImage": [
                        "/images/product3.jpg",
                        "/images/product4.jpg",
                    ],
                    "price": 1950,
                    "discountPrice": 1750,
                    "stock": 0,
                    "status": "active"
                },
                {
                    "_id": "p004",
                    "name": "Leather Belt",
                    "slug": "leather-belt",
                    "sku": "BS1004",
                    "galleryImage": [
                        "/images/product7.jpg",
                        "/images/product8.jpg",
                    ],
                    "price": 950,
                    "discountPrice": 850,
                    "stock": 25,
                    "status": "active"
                },
                {
                    "_id": "p005",
                    "name": "Sports Cap",
                    "slug": "sports-cap",
                    "sku": "BS1005",
                    "galleryImage": [
                        "/images/product9.jpg",
                        "/images/product10.jpg",
                    ],
                    "price": 550,
                    "discountPrice": 450,
                    "stock": 0,
                    "status": "active"
                }
            ]
        }
    ]

    return (
        <div className='container'>
            {categoryProducts?.map((item, index) => (
                <div key={index} className="py-4 bg-white">
                    <div className="flex justify-between items-center bg-primary  shadow p-4">
                        <p className="text-title !text-white ">
                            {item?.categoryName}
                        </p>
                        <Link href={`/category/${item?.slug}`} className="text-base text-white font-semibold border-b border-primary">
                            See All
                        </Link>
                    </div>


                    <div className="py-6 mx-[1px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
                        {item?.products?.map((it, ind) => (
                            <div key={ind}>
                                <ProductCard productDetails={it} />
                            </div>
                        ))}
                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default CategoryProducts