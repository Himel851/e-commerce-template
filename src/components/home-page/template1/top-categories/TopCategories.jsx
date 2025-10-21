import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TopCategories = () => {
    const categoryData = [
        {
            id: 1,
            name: "Demo",
            slug: "demo",
            image: "/images/category1.jpg"
        },
        {
            id: 2,
            name: "Demo2",
            slug: "demo",
            image: "/images/category2.jpg"
        },
        {
            id: 3,
            name: "Demo3",
            slug: "demo",
            image: "/images/category3.jpg"
        }
    ]
    return (
        <div className='container'>
            <div className="flex items-center justify-center w-full my-2 md:my-6 lg:my-6 xl:my-6">
                <div className="h-px bg-gray-300 flex-grow"></div>
                <span className="mx-4 uppercase font-medium text-[22px] xls:text-lg xms:text-lg xs:text-lg">TOP CATEGORIES</span>
                <div className="h-px bg-gray-300 flex-grow"></div>
            </div>

            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 ">
                {categoryData?.map((item, index) => (
                    <Link
                        href={`/category/${item?.slug}`}
                        className="relative"
                        key={index}
                    >
                        {item?.image !== "" ? (
                            <div>
                                <Image
                                    src={item?.image}
                                    width={224}
                                    height={224}
                                    priority
                                    unoptimized={true}
                                    className="rounded-md object-contain"
                                    alt="image"
                                />
                            </div>
                        ) : (
                            <div>
                                <Image
                                    src=""
                                    width={224}
                                    height={224}
                                    priority
                                    className="rounded-md"
                                    alt="image"
                                />
                            </div>
                        )}

                    </Link>
                ))}
            </div>
        </div>
    )
}

export default TopCategories