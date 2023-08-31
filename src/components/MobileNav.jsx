import React, { useState } from "react";
import logo from "../assets/logo.svg";
import logoFull from "../assets/topmate.svg";

const MobileNav = () => {
  const [menu, setMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  console.log(menu);
  return (
    <nav className="lg:hidden h-full flex items-center justify-between px-5 relative">
      <a href="http://" target="_blank">
        <img src={logo} alt="" className="w-7 h-7 sm:hidden" />
        <img src={logoFull} alt="" className="h-10 hidden sm:block" />
      </a>
      <div className="flex gap-x-5">
        <button className="py-3 px-4 text-sm rounded-md text-white bg-black font-bold tracking-wide">
          Sign up free
        </button>
        <button
          className="w-10 h-10 sm:h-12 sm:w-12 bg-green-500 rounded-md"
          onClick={() => setMenu((prev) => !prev)}
        >
          Me
        </button>
      </div>

      <div className="absolute w-full h-screen top-20 left-0 z-50">
        {menu ? (
          <>
            <div className="absolute top-4 left-4 right-4 rounded-xl bg-white p-1">
              <ul className="h-full flex flex-col justify-center items-centerfont-bold">
                <li className="m-[2px] py-3 px-4 rounded-md flex items-center gap-x-3 text-lg font-medium  hover:bg-gray-400">
                  <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-7 h-7 rounded-md"></div>
                  Login
                </li>
                <li className="m-[2px] py-3 px-4 rounded-md flex items-center gap-x-3 text-lg font-medium  hover:bg-gray-400">
                  <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-7 h-7 rounded-md"></div>
                  Podcast
                </li>
                <li className="m-[2px] py-3 px-4 rounded-md flex items-center gap-x-3 text-lg font-medium  hover:bg-gray-400">
                  <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-7 h-7 rounded-md"></div>
                  Pricing
                </li>
                <li className="m-[2px] py-3 px-4 rounded-md flex items-center gap-x-3 text-lg font-medium  hover:bg-gray-400">
                  <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-7 h-7 rounded-md"></div>
                  <strong className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-500 to-violet-500">
                    Earnings calculator
                  </strong>
                </li>
                <li
                  onClick={() => setSubMenu((prev) => !prev)}
                  className="m-[2px] py-3 px-4 rounded-md flex items-center justify-between text-lg font-medium  hover:bg-gray-400"
                >
                  <div className="flex gap-x-3">
                    <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-7 h-7 rounded-md"></div>
                    For Creators
                  </div>
                  <div className="w-5 h-5 bg-black"></div>
                </li>
              </ul>
              {subMenu ? (
                <>
                  <div className="absolute left-0 z-50 w-full h-auto mt-4 rounded-xl bg-white">
                    <ul>
                      <li className="m-[2px] py-3 px-4 rounded-md flex items-center gap-x-3 text-lg font-medium  hover:bg-gray-400">
                        <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-7 h-7 rounded-md"></div>
                        Software Engineers
                      </li>
                      <li className="m-[2px] py-3 px-4 rounded-md flex items-center gap-x-3 text-lg font-medium  hover:bg-gray-400">
                        <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-7 h-7 rounded-md"></div>
                        Designers
                      </li>
                      <li className="m-[2px] py-3 px-4 rounded-md flex items-center gap-x-3 text-lg font-medium  hover:bg-gray-400">
                        <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-7 h-7 rounded-md"></div>
                        Mentors
                      </li>
                      <li className="m-[2px] py-3 px-4 rounded-md flex items-center gap-x-3 text-lg font-medium  hover:bg-gray-400">
                        <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-7 h-7 rounded-md"></div>
                        Product Managers
                      </li>
                      <li className="m-[2px] py-3 px-4 rounded-md flex items-center gap-x-3 text-lg font-medium  hover:bg-gray-400">
                        <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-7 h-7 rounded-md"></div>
                        Creators
                      </li>
                      <li className="m-[2px] py-3 px-4 rounded-md flex items-center gap-x-3 text-lg font-medium  hover:bg-gray-400">
                        <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-7 h-7 rounded-md"></div>
                        Data Scientists
                      </li>
                      <li className="m-[2px] py-3 px-4 rounded-md flex items-center gap-x-3 text-lg font-medium  hover:bg-gray-400">
                        <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-7 h-7 rounded-md"></div>
                        Mental Health Experts
                      </li>
                    </ul>
                  </div>
                </>
              ) : null}
            </div>
          </>
        ) : null}
      </div>
    </nav>
  );
};

export default MobileNav;
