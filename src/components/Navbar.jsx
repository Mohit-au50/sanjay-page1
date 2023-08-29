import React from "react";
import logo from "../assets/logo.svg";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className="bg-yellow-400 h-20">
      <div className="container mx-auto h-full bg-red-300 sm:bg-green-300 px-7 flex items-center justify-between">
        <a href="http://" target="_blank">
          <img src={logo} alt="" className="w-10 h-10" />
        </a>

        <div className="flex gap-x-5">
          {/* signup button */}
          <button className="py-3 px-5 text-xl rounded-md text-white bg-black font-bold tracking-wide">
            Sign up free
          </button>

          {/* Mobile menu */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
