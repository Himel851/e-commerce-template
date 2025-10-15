import React from 'react'
import Link from 'next/link'
import { SlArrowDown } from 'react-icons/sl'

const Category = () => {

    const categoryData = [
        {
            "_id": "67b9fc1e0e1b0ff578ed97e6",
            "name": "attar",
            "slug": "attar",
            "children": [
                {
                    "_id": "67b9fc39012129f59868b613",
                    "parentId": "67b9fc1e0e1b0ff578ed97e6",
                    "name": "series 240",
                    "slug": "series-240",
                    "children": []
                },
                {
                    "_id": "67b9fc3f8d5d6df599ee1eb2",
                    "parentId": "67b9fc1e0e1b0ff578ed97e6",
                    "name": "premium attar",
                    "slug": "premium-attar",
                    "children": []
                },
                {
                    "_id": "67c40530a3435f8285b4f599",
                    "parentId": "67b9fc1e0e1b0ff578ed97e6",
                    "name": "wholesale",
                    "slug": "wholesale",
                    "children": []
                },
                {
                    "_id": "6811e6774dedfe61e8973528",
                    "parentId": "67b9fc1e0e1b0ff578ed97e6",
                    "name": "attar combo",
                    "slug": "attar-combo",
                    "children": []
                }
            ]
        },
        {
            "_id": "67b9fc6a3d39cff57951641a",
            "parentId": null,
            "name": "panjabi",
            "slug": "panjabi",
            "children": [
                {
                    "_id": "67b9fc798d5d6df599ee1eba",
                    "parentId": "67b9fc6a3d39cff57951641a",
                    "name": "platinum",
                    "slug": "platinum",
                    "children": []
                },
                {
                    "_id": "67b9fc930e1b0ff578ed97f0",
                    "parentId": "67b9fc6a3d39cff57951641a",
                    "name": "⁠elegent",
                    "slug": "elegent",
                    "children": []
                },
                {
                    "_id": "67b9fc98012129f59868b619",
                    "parentId": "67b9fc6a3d39cff57951641a",
                    "name": "⁠printed",
                    "slug": "printed",
                    "children": []
                },
                {
                    "_id": "67c4bb4c7d06568264d4c1cd",
                    "parentId": "67b9fc6a3d39cff57951641a",
                    "name": "chikankar",
                    "slug": "chikankar",
                    "children": []
                }
            ]
        },

    ]

    return (
        <div className='border-t p-2 shadow flex space-x-2 border-gray-300'>
            <div className="container mx-auto">
                <ul className="flex items-center">
                    {categoryData?.map((item, index) => (
                        <li key={index}>
                            {item?.children?.length > 0 ? (
                                // Category with children - use div instead of Link to avoid nesting
                                <div className="group relative flex space-x-2 items-center px-4 py-2 cursor-pointer hover:text-black border-r border-gray-300">
                                    <p className="uppercase text-sm font-medium">{item?.name}</p>
                                    <div>
                                        <SlArrowDown size={12} />
                                    </div>

                                    <div className="absolute z-10 w-[200px] top-full left-0 hidden group-hover:block bg-gray-50 py-2">
                                        <div className="p-2 flex">
                                            <ul className="w-full">
                                                {item?.children?.map((subCat, SubIndex) => (
                                                    <li
                                                        key={SubIndex}
                                                        className={`px-4 py-2 ${SubIndex === item.children.length - 1
                                                            ? ""
                                                            : "border-b border-gray-200"
                                                            } text-black capitalize list-none text-sm cursor-pointer font-medium hover:text-black hover:duration-300 hover:translate-x-3`}
                                                    >
                                                        <Link href={`/category/${subCat?.slug}`}>
                                                            <p>{subCat?.name}</p>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                // Category without children - use Link normally
                                <Link
                                    className="group relative flex space-x-2 items-center px-4 py-2 cursor-pointer hover:text-black border-r border-gray-300"
                                    href={`/category/${item?.slug}`}
                                >
                                    <p className="uppercase text-sm font-medium">{item?.name}</p>
                                </Link>
                            )}
                        </li>
                    ))}


                </ul>
            </div>
        </div>

    )
}

export default Category