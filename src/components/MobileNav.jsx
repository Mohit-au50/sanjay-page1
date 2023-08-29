import React, { useState } from "react";
import logo from "../assets/logo.svg";
import logoFull from "../assets/topmate.svg";

const MobileNav = () => {
  const [menu, setMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  console.log(menu);
  return (
    <nav className="lg:hidden h-full flex items-center justify-between px-5">
      <a href="http://" target="_blank">
        <img src={logo} alt="" className="w-7 h-7 sm:hidden" />
        <img src={logoFull} alt="" className="h-10 hidden sm:block" />
      </a>
      <div className="flex gap-x-5">
        <button className="py-2 px-4 text-sm rounded-md text-white bg-black font-bold tracking-wide">
          Sign up free
        </button>
        <button
          className="w-10 h-10 sm:h-12 sm:w-12 bg-green-500 rounded-md"
          onClick={() => setMenu((prev) => !prev)}
        >
          Me
        </button>
      </div>

      {menu ? (
        <>
          <div className="absolute top-24 left-4 right-4 h-auto z-20 rounded-xl bg-white border-2 border-red-300">
            <ul className="h-full flex flex-col justify-center items-centerfont-bold">
              <li className="h-14 m-2 rounded-md flex items-center gap-x-5 text-2xl font-medium px-5 hover:bg-gray-400">
                <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-9 h-9 rounded-md"></div>
                Login
              </li>
              <li className="h-14 m-2 rounded-md flex items-center gap-x-5 text-2xl font-medium px-5 hover:bg-gray-400">
                <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-9 h-9 rounded-md"></div>
                Podcast
              </li>
              <li className="h-14 m-2 rounded-md flex items-center gap-x-5 text-2xl font-medium px-5 hover:bg-gray-400">
                <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-9 h-9 rounded-md"></div>
                Pricing
              </li>
              <li className="h-14 m-2 rounded-md flex items-center gap-x-5 text-2xl font-medium px-5 hover:bg-gray-400">
                <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-9 h-9 rounded-md"></div>
                <strong className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-500 to-violet-500">
                  Earnings calculator
                </strong>
              </li>
              <li
                onClick={() => setSubMenu((prev) => !prev)}
                className="h-14 m-2 rounded-md flex items-center justify-between text-2xl font-medium px-5 hover:bg-gray-400"
              >
                <div className="flex gap-x-5">
                  <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-9 h-9 rounded-md"></div>
                  For Creators
                </div>
                <div className="w-5 h-5 bg-black"></div>
              </li>
            </ul>
            {subMenu ? (
              <>
                <div className="absolute w-full mt-4 z-20 rounded-xl bg-white border-2 border-red-300">
                  <ul>
                    <li className="h-14 m-2 rounded-md flex items-center gap-x-5 text-2xl font-medium px-5 hover:bg-gray-400">
                      <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-9 h-9 rounded-md"></div>
                      Software Engineers
                    </li>
                    <li className="h-14 m-2 rounded-md flex items-center gap-x-5 text-2xl font-medium px-5 hover:bg-gray-400">
                      <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-9 h-9 rounded-md"></div>
                      Designers
                    </li>
                    <li className="h-14 m-2 rounded-md flex items-center gap-x-5 text-2xl font-medium px-5 hover:bg-gray-400">
                      <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-9 h-9 rounded-md"></div>
                      Mentors
                    </li>
                    <li className="h-14 m-2 rounded-md flex items-center gap-x-5 text-2xl font-medium px-5 hover:bg-gray-400">
                      <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-9 h-9 rounded-md"></div>
                      Product Managers
                    </li>
                    <li className="h-14 m-2 rounded-md flex items-center gap-x-5 text-2xl font-medium px-5 hover:bg-gray-400">
                      <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-9 h-9 rounded-md"></div>
                      Creators
                    </li>
                    <li className="h-14 m-2 rounded-md flex items-center gap-x-5 text-2xl font-medium px-5 hover:bg-gray-400">
                      <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-9 h-9 rounded-md"></div>
                      Data Scientists
                    </li>
                    <li className="h-14 m-2 rounded-md flex items-center gap-x-5 text-2xl font-medium px-5 hover:bg-gray-400">
                      <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-9 h-9 rounded-md"></div>
                      Mental Health Experts
                    </li>
                  </ul>
                </div>
              </>
            ) : null}
          </div>
        </>
      ) : null}
    </nav>
  );
};

export default MobileNav;
