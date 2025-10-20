"use client"

import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { FaUserCircle } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { RxHamburgerMenu } from 'react-icons/rx';


const Navbar = () => {
    const [search, setSearch] = useState("");

    return (
        <div className='bg-white text-black  sticky top-0 left-0 right-0 z-40'>
            <div className='container mx-auto '>
                <div className="navbar bg-white text-black p-3 items-center">
                    <div className="navbar-start">
                        <div className='flex md:hidden mr-3'>
                            <RxHamburgerMenu size={20} strokeWidth={0.5} />
                        </div>

                        <Link href="/">
                            <Image
                                alt="logo"
                                width={200}
                                height={70}
                                priority
                                unoptimized={true}
                                src={`/images/logo.ico`}
                            />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <div className="relative">
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    placeholder="Search for products"
                                    className="w-[450px] md:w-[700px] py-2 outline-none pl-4 border border-black placeholder:text-sm placeholder:text-black rounded-l-lg"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <div className="px-4 h-[42px] flex justify-center items-center bg-black rounded-r-lg">
                                    <svg
                                        className="h-4 w-4 fill-current text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className='flex items-center gap-6'>
                            <FaUserCircle className="text-black" size={30} />
                            <Link href='/checkout'
                                className="cursor-pointer relative"
                            >
                                <div className="absolute top-[-13px] right-[-8px] bg-black h-[20px] w-[20px] rounded-full flex justify-center items-center">
                                    <p className="text-white text-xs">2</p>
                                </div>
                                <BsCart3 className="text-black" size={22} />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar