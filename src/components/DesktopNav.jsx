import React, { useState } from "react";
import logo from "../assets/header/topmate.svg";

const DesktopNav = () => {
  const [subMenu, setSubMenu] = useState(false);
  return (
    <nav className="hidden h-full lg:flex lg:items-center lg:justify-between font-semibold px-5">
      <a href="http://" target="_blank">
        <img src={logo} alt="" className="h-10" />
      </a>

      <div className="lg:flex-1 ml-5 xl:ml-14">
        <ul className="h-full lg:flex lg:items-center lg:gap-x-7 text-lg xl:gap-x-14 font-bold">
          <li
            className="relative flex gap-x-2 xl:gap-x-4 items-center"
            onClick={() => setSubMenu((prev) => !prev)}
          >
            For Creators
            <span className="block w-2 h-2 bg-black"></span>
          </li>

          {subMenu ? (
            <>
              <div className="absolute top-[4.5rem] w-[19rem] z-20 rounded-xl bg-white border-2 border-red-300">
                <ul className="text-base font-semibold">
                  <li className="h-14 m-2 rounded-md flex items-center gap-x-4 px-5 hover:bg-gray-400">
                    <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-9 h-9 rounded-md"></div>
                    Software Engineers
                  </li>
                  <li className="h-14 m-2 rounded-md flex items-center gap-x-4 px-5 hover:bg-gray-400">
                    <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-9 h-9 rounded-md"></div>
                    Designers
                  </li>
                  <li className="h-14 m-2 rounded-md flex items-center gap-x-4 px-5 hover:bg-gray-400">
                    <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-9 h-9 rounded-md"></div>
                    Mentors
                  </li>
                  <li className="h-14 m-2 rounded-md flex items-center gap-x-4 px-5 hover:bg-gray-400">
                    <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-9 h-9 rounded-md"></div>
                    Product Managers
                  </li>
                  <li className="h-14 m-2 rounded-md flex items-center gap-x-4 px-5 hover:bg-gray-400">
                    <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-9 h-9 rounded-md"></div>
                    Creators
                  </li>
                  <li className="h-14 m-2 rounded-md flex items-center gap-x-4 px-5 hover:bg-gray-400">
                    <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-9 h-9 rounded-md"></div>
                    Data Scientists
                  </li>
                  <li className="h-14 m-2 rounded-md flex items-center gap-x-4 px-5 hover:bg-gray-400">
                    <div className="bg-gradient-to-r from-violet-500 to-violet-900 w-9 h-9 rounded-md"></div>
                    Mental Health Experts
                  </li>
                </ul>
              </div>
            </>
          ) : null}
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Podcast</a>
          </li>

          <button className="px-5 py-3.5 text-sm rounded-lg border-2 border-indigo-500">
            Earnings calculator
          </button>
        </ul>
      </div>

      <div className="flex gap-x-5">
        <button className="py-4 px-5 text-sm rounded-md border font-bold tracking-wide">
          Login
        </button>

        <button className="py-4 px-5 text-sm rounded-md text-white bg-black font-bold tracking-wide">
          Sign up free
        </button>
      </div>
    </nav>
  );
};

export default DesktopNav;
