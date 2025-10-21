import BreadCrumbs from '@/components/Common/template2/breadcrumb/BreadCrumbs'
import React from 'react'
import DetailsMain from './DetailsMain'

const ProductDetails2 = ({ breadCumbs }) => {
    return (
        <div>
            <div className='container'>
                <div className="bg-[#E5E7EB]">
                    <div className=" hidden lg:block">
                        <div className=" breadcrumbs text-sm !py-3">
                            <BreadCrumbs breadCumbs={breadCumbs} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white'>
                <div className='container'>
                    <DetailsMain />
                </div>
            </div>
        </div>
    )
}

export default ProductDetails2