import React from 'react'


import ProductCard from '@/components/Common/ProductCard/ProductCard';

const CategoryProduct = async ({ params }) => {

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

    return (
        <div>
            <div className='bg-[#E5E7EB]'>
                <div className="container">
                    <div className=" hidden lg:block">
                        <div className=" breadcrumbs text-sm !py-3">
                            <BreadCrumbs breadCumbs={breadCumbs} />
                        </div>
                    </div>

                    {/* <div className="max-w-7xl sm:max-w-[45rem]  xls:max-w-[25rem] xms:max-w-[21rem] xs:max-w-[18rem] mx-auto">
          <ProductSectionSlug params={params} />
        </div> */}
                </div>
            </div>

            <div className="my-4 container">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5  gap-6 ">
                    {allProducts?.map((item, index) => (
                        <div key={index}>
                            <ProductCard productDetails={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryProduct