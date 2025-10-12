"use client";

import React from "react";
import Image from "next/image";
import { FaFacebook, FaWhatsapp, FaYoutube, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-black">
            <div className="container bg-black px-4 pt-14 pb-20">
                {/* Payment Banner */}
                <div className="mb-4">
                    {/* <Image
                        src={PaymentGatewayImage}
                        height={64}
                        width={1600}
                        priority
                        alt="payment-gateway-logo"
                        className="h-full w-full object-contain"
                    /> */}
                </div>

                {/* Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
                    {/* Need Help Section */}
                    <div>
                        <p className="text-secondary font-semibold">Need Help?</p>

                        <div className="mt-4 text-white">
                            <div className="text-sm">
                                Call us: <span className="font-semibold">+880 1234-567890</span>
                            </div>
                            <div className="text-sm">
                                Email us:{" "}
                                <span className="font-semibold underline">
                                    info@demo.com.bd
                                </span>
                            </div>
                            <div className="text-sm">
                                Shop Address:{" "}
                                <span className="font-semibold underline">
                                    House #12, Road #5, Dhanmondi, Dhaka - 1205
                                </span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-2 items-center mt-5">
                            <div className="bg-secondary h-7 w-7 rounded-full flex justify-center items-center cursor-pointer">
                                <FaFacebook className="text-white" />
                            </div>
                            <div className="bg-secondary h-7 w-7 rounded-full flex justify-center items-center cursor-pointer">
                                <FaYoutube className="text-white" />
                            </div>
                            <div className="bg-secondary h-7 w-7 rounded-full flex justify-center items-center cursor-pointer">
                                <FaWhatsapp className="text-white" />
                            </div>
                            <div className="bg-secondary h-7 w-7 rounded-full flex justify-center items-center cursor-pointer">
                                <FaInstagram className="text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Customer Account Section */}
                    <div>
                        <p className="text-secondary font-semibold">Customers Account</p>

                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link
                                    href="/users/login"
                                    className="text-sm font-semibold text-white hover:text-secondary duration-300"
                                >
                                    Sign in
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/users/register"
                                    className="text-sm font-semibold text-white hover:text-secondary duration-300"
                                >
                                    Create New Account
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/users/profile"
                                    className="text-sm font-semibold text-white hover:text-secondary duration-300"
                                >
                                    My Orders
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/affiliate-marketer/apply"
                                    className="text-sm font-semibold text-white hover:text-secondary duration-300"
                                >
                                    Join as an Affiliate Partner
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://docs.google.com/forms"
                                    target="_blank"
                                    className="text-sm font-semibold text-white hover:text-secondary duration-300"
                                >
                                    Complain Box
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Related Pages */}
                    <div>
                        <p className="text-secondary font-semibold">Related Pages</p>

                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link href="/refund-and-returned">
                                    <p className="text-sm font-semibold text-white hover:text-secondary duration-300">
                                        Refund & Returned
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-us">
                                    <p className="text-sm font-semibold text-white hover:text-secondary duration-300">
                                        About Us
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy">
                                    <p className="text-sm font-semibold text-white hover:text-secondary duration-300">
                                        Privacy Policy
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-and-conditions">
                                    <p className="text-sm font-semibold text-white hover:text-secondary duration-300">
                                        Terms & Conditions
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/showroom-list">
                                    <p className="text-sm font-semibold text-white hover:text-secondary duration-300">
                                        Our Showrooms
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center max-w-7xl mx-auto border-t-2 border-gray-700 py-4">
                <p className="text-white text-[12px]">
                    Demo SIGN &copy; 2024 POWERED BY
                    <span
                        onClick={() => window.open("http://storex.com.bd/", "_blank")}
                        className="text-green-600 font-semibold text-[14px] cursor-pointer"
                    >
                        {" "}
                        ABC
                    </span>
                </p>
            </div>
        </div>
    );
}
