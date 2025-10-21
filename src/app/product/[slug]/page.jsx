// @ts-nocheck
"use client"

import BreadCrumbs from '@/components/Common/template1/breadcrumb/BreadCrumbs';
import DescriptionDetails from '@/components/product-details/template1/DescriptionDetails';
import DetailsSection from '@/components/product-details/template1/DetailsSection';
import ImageGallery from '@/components/product-details/template1/ImageGallery';
import ProductDetails1 from '@/components/product-details/template1/ProductDetails1';
import RelatedProduct from '@/components/product-details/template1/RelatedProduct';
import ProductDetails2 from '@/components/product-details/template2/ProductDetails2';
import { useAppSelector } from '@/store/store';
import React from 'react'

const ProductDetailsPage = async ({ params }) => {
    const activeTemplate = useAppSelector((state) => state.template.activeTemplate);


    const { slug } = await params;

    const breadCumbs = [
        { name: "Home", url: "/" },
        {
            name: "product",
            url: "/product",
        },
        { name: `${slug}`, url: `/${slug}` },
    ];



    if (activeTemplate === "template1") {
        return (
            <div>
                <ProductDetails1 breadCumbs={breadCumbs} />
            </div>
        );
    }


    // template2 components
    return (
        <div>
            <ProductDetails2 breadCumbs={breadCumbs} />
        </div>
    )
}

export default ProductDetailsPage