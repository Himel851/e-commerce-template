import BreadCrumbs from '@/components/Common/template2/breadcrumb/BreadCrumbs'
import ProductCard from '@/components/Common/template2/ProductCard/ProductCard'
import React from 'react'

const CategoryProduct2 = ({ breadCumbs, allProducts }) => {
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

export default CategoryProduct2