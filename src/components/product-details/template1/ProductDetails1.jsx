import BreadCrumbs from '@/components/Common/template1/breadcrumb/BreadCrumbs'
import React from 'react'
import ImageGallery from './ImageGallery'
import DetailsSection from './DetailsSection'
import DescriptionDetails from './DescriptionDetails'
import RelatedProduct from './RelatedProduct'

const ProductDetails1 = ({ breadCumbs }) => {
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

export default ProductDetails1