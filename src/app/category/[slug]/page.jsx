// @ts-nocheck
"use client"

import React from 'react'

import BreadCrumbs from '@/components/Common/template1/breadcrumb/BreadCrumbs'
import ProductCard from '@/components/Common/template1/ProductCard/ProductCard';
import { useAppSelector } from '@/store/store';
import CategoryProduct1 from '@/components/categoryProduct/template1/CategoryProduct1';
import CategoryProduct2 from '@/components/categoryProduct/template2/CategoryProduct2';

const CategoryProduct = async ({ params }) => {

    const activeTemplate = useAppSelector((state) => state.template.activeTemplate);


    const allProducts = [
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
        },
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

    const { slug } = await params;

    const breadCumbs = [
        { name: "Home", url: "/" },
        {
            name: "category",
            url: "/category",
        },
        { name: `${slug}`, url: `/category/${slug}` },
    ];

    if (activeTemplate === "template1") {
        return (
            <div>
                <CategoryProduct1 breadCumbs={breadCumbs} allProducts={allProducts} />
            </div>
        );
    }

    // template2 components
    return (
        <div>
            <CategoryProduct2 breadCumbs={breadCumbs} allProducts={allProducts} />
        </div>
    )
}

export default CategoryProduct