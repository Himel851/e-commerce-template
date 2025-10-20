"use client";

import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { useRouter } from "next/navigation";

const BigscreenUserCompo = () => {
  const router = useRouter();

  const [token, setToken] = useState(false);
  const [name, setName] = useState("Himel");

  const handleLogout = () => {
    setToken(false);
    // localStorage.removeItem("token");
    // router.push("/");
  };

  return (
    <div className="relative">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="">
          {token ? (
            <div className="w-10 rounded-full border border-gray-300 flex justify-center items-center bg-white">
              <svg
                className="fill-current text-black h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
              </svg>
            </div>
          ) : (
            <div className="cursor-pointer">
              <FiUser className="text-black text-xl" />
            </div>
          )}
        </div>

        {/* Dropdown content */}
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-52"
        >
          {token ? (
            <>
              <li>
                <button
                  className="bg-green-500 text-white hover:bg-green-600 font-semibold text-sm"
                  onClick={() => router.push("/users/profile")}
                >
                  My Profile
                </button>
              </li>
              <li>
                <button
                  className="bg-gray-900 text-white hover:bg-gray-800 font-semibold text-sm"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <button
                  className="bg-green-500 text-white hover:bg-green-600 font-semibold text-sm"
                  onClick={() => router.push("/users/login")}
                >
                  Login / Sign Up
                </button>
              </li>
              {/* Optional: Uncomment for reseller option */}
              {/* <li>
                <button
                  className="bg-gray-900 text-white hover:bg-gray-800 font-semibold text-sm"
                  onClick={() => router.push("/affiliate-marketer/apply")}
                >
                  Sign Up for Reseller
                </button>
              </li> */}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default BigscreenUserCompo;
