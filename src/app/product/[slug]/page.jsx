import BreadCrumbs from '@/components/Common/breadcrumb/BreadCrumbs';
import DescriptionDetails from '@/components/product-details/DescriptionDetails';
import DetailsSection from '@/components/product-details/DetailsSection';
import ImageGallery from '@/components/product-details/ImageGallery';
import RelatedProduct from '@/components/product-details/RelatedProduct';
import React from 'react'

const ProductDetailsPage = async ({ params }) => {

    const { slug } = await params;

    const breadCumbs = [
        { name: "Home", url: "/" },
        {
            name: "product",
            url: "/product",
        },
        { name: `${slug}`, url: `/${slug}` },
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
                </div>
            </div>

            <div className="bg-white text-black pb-12">
                <div className="container">
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 pt-8'>
                        <div className="border border-gray-200 p-3 ">
                            <ImageGallery />
                        </div>
                        <div className="border border-gray-200  p-4">
                            <DetailsSection />
                        </div>
                    </div>

                    <div className="py-4">
                        <DescriptionDetails />
                    </div>

                    <div className=" mt-4 pb-4">
                        <RelatedProduct />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsPage