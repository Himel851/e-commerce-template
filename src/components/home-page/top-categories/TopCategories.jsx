import Image from 'next/image'
import React from 'react'

const TopCategories = () => {
    const categoryData = [
        {
            id: 1,
            name: "Demo",
            image: "/images/category1.jpg"
        },
        {
            id: 2,
            name: "Demo2",
            image: "/images/category2.jpg"
        },
        {
            id: 3,
            name: "Demo3",
            image: "/images/category3.jpg"
        }
    ]
    return (
        <div className='container'>
            <div class="flex items-center justify-center w-full my-2 md:my-6 lg:my-6 xl:my-6">
                <div class="h-px bg-gray-300 flex-grow"></div>
                <span class="mx-4 uppercase font-medium text-[22px] xls:text-lg xms:text-lg xs:text-lg">TOP CATEGORIES</span>
                <div class="h-px bg-gray-300 flex-grow"></div>
            </div>

            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 ">
                {categoryData?.map((item, index) => (
                    <div
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

                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopCategories