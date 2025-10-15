import React from 'react'

const CheckoutPage = () => {
    return (
        <div className='container border-2 border-gray-200 rounded-lg mt-6 mb-6'>
            <div className="relative mt-4">
                <p className="text-center text-lg xls:text-base xms:text-base xs:text-base font-semibold text-black ">
                    অর্ডার করতে সঠিক তথ্য দিয়ে নিচের ফরম পূরন করুন{" "}
                </p>
                <div className="absolute top-2  w-[50%] transform translate-x-1/2  h-full bg-transparent border-b-4 border-dashed  border-black pointer-events-none"></div>
            </div>

            <div className="grid grid-cols-12 gap-5 mt-5 md:mt-10 ">
                <div className=" col-span-12 lg:col-span-6">
                    <div className="mt-0 md:px-4 pb-2 rounded-md pt-1 sm:mt-2 xls:mt-2 xms:mt-2 xs:mt-2">
                        <div className="relative">
                            <p className="text-left font-semibold text-lg text-black">বিলিং ডিটেইল</p>
                            <div className="absolute top-2 left-0 w-[25%] h-full bg-transparent border-b-4 border-dashed border-gray-300 pointer-events-none"></div>
                        </div>

                        {/* Name */}
                        <div className="pt-4">
                            <label className="text-sm font-bold">
                                আপনার নাম লিখুন <span className="text-red-600">*</span>
                            </label>
                            <div className="w-full pt-2">
                                <input
                                    className="bg-white w-full pl-2 h-[40px] rounded-md outline-none text-sm text-black placeholder:text-xs placeholder-gray-400 border border-gray-400 transition-all focus:border-secondary"
                                    placeholder="সম্পূর্ণ নামটি লিখুন"
                                    type="text"
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="pt-2">
                            <label className="text-sm font-bold">
                                আপনার মোবাইল নাম্বারটি লিখুন <span className="text-red-600">*</span>
                            </label>
                            <div className="w-full pt-2">
                                <input
                                    className="bg-white w-full pl-2 h-[40px] rounded-md outline-none text-sm text-black placeholder:text-xs placeholder-gray-400 border border-gray-400 transition-all focus:border-secondary"
                                    placeholder="১১ ডিজিটের মোবাইল নাম্বারটি লিখুন"
                                    type="text"
                                    name="phone"
                                />
                            </div>
                        </div>

                        {/* District & Thana */}
                        <div className="grid grid-cols-2 xls:grid-cols-1 xms:grid-cols-1 xs:grid-cols-1 gap-4 pt-2">
                            <div>
                                <label className="text-sm font-bold">
                                    জেলা সিলেক্ট করুন <span className="text-red-600">*</span>
                                </label>
                                <div className="relative">
                                    <select className="bg-gray-50 h-[40px] mt-2 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5 appearance-none focus:border-secondary outline-none">
                                        <option>Select</option>
                                        <option>ঢাকা</option>
                                        <option>চট্টগ্রাম</option>
                                        <option>রাজশাহী</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                        <svg
                                            className="h-4 w-4 text-gray-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-bold">
                                    থানা সিলেক্ট করুন <span className="text-red-600">*</span>
                                </label>
                                <div className="relative">
                                    <select className="bg-gray-50 mt-2 h-[40px] border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5 appearance-none focus:border-secondary outline-none">
                                        <option>Select</option>
                                        <option>ধানমন্ডি</option>
                                        <option>গুলশান</option>
                                        <option>মতিঝিল</option>
                                    </select>
                                    <div className="absolute top-[12px] right-0 flex items-center px-2 pointer-events-none">
                                        <svg
                                            className="h-4 w-4 text-gray-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="pt-2">
                            <label className="text-sm font-bold">
                                সম্পূর্ণ ঠিকানা <span className="text-red-600">*</span>
                            </label>
                            <div className="w-full pt-2">
                                <input
                                    className="bg-white w-full pl-2 h-[40px] rounded-md outline-none text-sm text-black placeholder:text-xs placeholder-gray-400 border border-gray-400 transition-all focus:border-secondary"
                                    placeholder="রোড নাম/নাম্বার, বাড়ি নাম/নামার, ফ্লাট নাম্বার"
                                    type="text"
                                />
                            </div>
                        </div>

                        {/* Note */}
                        <div className="pt-2">
                            <label className="text-sm font-bold">নির্দেশনা</label>
                            <div className="w-full pt-2">
                                <textarea
                                    className="bg-white w-full pl-2 pt-2 rounded-md outline-none text-sm text-black placeholder:text-xs placeholder-gray-400 border border-gray-400 transition-all focus:border-secondary"
                                    placeholder="আপনার স্পেশাল কোন রিকোয়ারমেন্ট থাকলে এখানে লিখুন"
                                ></textarea>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='col-span-12 lg:col-span-6'>
                    <div className="bg-white py-3 px-6 rounded-md">
                        <p className="text-lg font-semibold text-black">প্রোডাক্ট ডিটেইল</p>

                        <div className="flex justify-between items-center border-dashed border-b-2 border-gray-300 pt-4">
                            <p className="text-xs font-bold text-black">প্রোডাক্ট নাম</p>
                            <p className="text-black font-bold tracking-wider text-xs">বিক্রয় মূল্য</p>
                        </div>

                        <div className="mt-2 space-y-3 h-auto">
                            <div className="grid grid-cols-12 shadow-md p-1 mt-1">
                                <div className="col-span-10">
                                    <div className="flex space-x-2 items-center">
                                        <div className="h-[60px] w-[60px]">
                                            <img
                                                src="/images/product1.jpg"
                                                alt="product"
                                                className="w-full h-full rounded"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-sm">Product Name</p>
                                            <div className="flex flex-wrap items-center text-sm text-gray-500 gap-x-3 gap-y-1 mt-1">
                                                <span className="bg-gray-100 px-2 py-1 rounded text-xs border border-gray-300">
                                                    Color: <span className="font-medium">Red</span>
                                                </span>
                                            </div>

                                            <div className="flex items-center space-x-2 mt-2">
                                                <p className="font-semibold text-sm">Qty:</p>
                                                <div className="flex items-center border border-gray-300 rounded-sm">
                                                    <button className="p-2 border-r border-gray-300">
                                                        <svg
                                                            className="h-3 w-3 fill-current text-gray-400"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M5 11V13H19V11H5Z"></path>
                                                        </svg>
                                                    </button>
                                                    <input
                                                        type="text"
                                                        className="w-[40px] pl-3 outline-none"
                                                        value="1"
                                                        readOnly
                                                    />
                                                    <button className="p-2 border-l border-gray-300">
                                                        <svg
                                                            className="h-3 w-3 fill-current text-gray-400"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-2 grid justify-end">
                                    <p className="font-bold text-sm">TK. 1200</p>
                                    <div>
                                        <button className="underline font-semibold capitalize pt-5 text-sm">
                                            remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center py-2 border-t-2 border-dashed border-gray-300">
                                <p className="text-sm font-bold text-black">সাব-টোটাল (+)</p>
                                <p className="font-bold text-black text-sm">TK. 1200</p>
                            </div>

                            <div className="flex justify-between items-center py-2 border-t-2 border-dashed border-gray-300">
                                <p className="text-sm font-bold text-black">প্রমো-কোড ব্যাবহারে ছাড় পেয়েছেন (-)</p>
                                <p className="font-bold text-black text-sm">TK. 100</p>
                            </div>

                            <div className="flex justify-between items-center py-2 border-t-2 border-b-2 border-dashed border-gray-300">
                                <p className="text-sm font-bold text-black">ডেলিভারি চার্জ (+)</p>
                                <div>
                                    <div className="flex items-center">
                                        <label htmlFor="inside" className="flex items-center cursor-pointer">
                                            <div className="bg-white rounded-full w-4 h-4 flex justify-center items-center relative">
                                                <input
                                                    type="radio"
                                                    id="inside"
                                                    name="deliveryOption"
                                                    className="appearance-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full"
                                                />
                                                <div className="check-icon hidden border-4 border-primary rounded-full w-full h-full"></div>
                                            </div>
                                            <span className="ml-2 font-semibold text-sm">ঢাকা সিটির ভিতরে</span>
                                            <span className="font-bold text-primary text-sm ml-2">TK. 60</span>
                                        </label>
                                    </div>
                                    <div className="flex items-center pt-2">
                                        <label htmlFor="outside" className="flex items-center cursor-pointer">
                                            <div className="bg-white rounded-full w-4 h-4 flex justify-center items-center relative">
                                                <input
                                                    type="radio"
                                                    id="outside"
                                                    name="deliveryOption"
                                                    className="appearance-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full"
                                                />
                                                <div className="check-icon hidden border-4 border-secondary rounded-full w-full h-full"></div>
                                            </div>
                                            <span className="ml-2 font-semibold text-sm">ঢাকা সিটির বাহিরে</span>
                                            <span className="font-bold text-secondary text-sm ml-2">TK. 120</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center py-2 border-t-2 border-dashed border-gray-300">
                                <p className="text-sm font-bold text-black">টোটাল</p>
                                <p className="font-bold text-black text-sm">TK. 1260</p>
                            </div>

                            <div className="flex items-center">
                                <label htmlFor="cash" className="flex items-center cursor-pointer">
                                    <div className="bg-white rounded-full w-4 h-4 flex justify-center items-center relative">
                                        <input
                                            type="radio"
                                            id="cash"
                                            name="paymentOption"
                                            className="appearance-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full"
                                        />
                                        <div className="check-icon hidden border-4 border-secondary rounded-full w-full h-full"></div>
                                    </div>
                                    <span className="ml-2 font-semibold text-sm">Cash on delivery</span>
                                    <div className="h-[30px] w-[30px] ml-1">
                                        <img src="/images/cash.png" alt="cash-logo" />
                                    </div>
                                </label>
                            </div>

                            <div className="bg-gray-200 rounded-md py-3">
                                <span className="font-extrabold text-black text-sm pl-3">
                                    পণ্য হাতে পেয়ে সম্পূর্ণ মূল্য পরিশোধ করতে হবে
                                </span>
                            </div>

                            {/* <div className="bg-gray-200 rounded-md py-3 mt-5">
                        <span className="font-extrabold text-black text-sm pl-3">
                            বিকাশ, নগদ অথবা ব্যাংকের মাধ্যমে পেমেন্ট করুন ।
                        </span>
                    </div> */}

                            <div className="w-full bg-black flex items-center justify-center py-3 mt-5 cursor-pointer">
                                <button className="flex items-center space-x-2">
                                    <div className="text-white font-bold text-sm">
                                        অর্ডারটি কনফর্ম করুন TK. 1260
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CheckoutPage