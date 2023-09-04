import React from "react";
import logo from "../assets/footer/footer-logo.svg";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#141414] py-12 lg:py-24">
      <div className="container mx-auto flex flex-col text-white p-4 lg:p-0">
        <div className="flex lg:flex-row flex-col lg:justify-between">
          <div className="lg:w-2/3 mb-7 lg:mb-0">
            <div>
              <img src={logo} alt="" className="w-[80%]" />
            </div>
          </div>
          <div className="lg:w-1/3 flex lg:flex-row lg:gap-x-24 gap-x-10 lg:mb-10 mb-5">
            <div className="flex flex-col">
              <a className="lg:py-3 py-2 text-sm font-medium" href="#">
                About
              </a>
              <a className="lg:py-3 py-2 text-sm font-medium" href="#">
                Contact Us
              </a>
              <a className="lg:py-3 py-2 text-sm font-medium" href="#">
                Terms Of Service
              </a>
              <a className="lg:py-3 py-2 text-sm font-medium" href="#">
                Privacy
              </a>
            </div>
            <div className="flex flex-col">
              <a className="lg:py-3 py-2 text-sm font-medium" href="#">
                Pricing
              </a>
              <a className="lg:py-3 py-2 text-sm font-medium" href="#">
                Blog
              </a>
              <a className="lg:py-3 py-2 text-sm font-medium" href="#">
                Creator report 2022
              </a>
              <a className="lg:py-3 py-2 text-sm font-medium" href="#">
                Carousel Maker
              </a>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col lg:justify-between">
          <div className="order-2 flex text-center w-full lg:text-start flex-col lg:w-2/3 text-sm font-medium">
            <p>548 Market St PMB 30073, San Francisco</p>
            <p className="my-3">© 2023 Topmate</p>
          </div>

          <div className="flex lg:flex-row gap-x-8 items-center lg:w-1/3 justify-center lg:justify-start my-7 lg:order-2">
            <div className="w-8 h-8 bg-white">
              <a className="py-3 text-sm font-medium" href="#"></a>
            </div>
            <div className="w-8 h-8 bg-white">
              <a className="py-3 text-sm font-medium" href="#"></a>
            </div>
            <div className="w-8 h-8 bg-white">
              <a className="py-3 text-sm font-medium" href="#"></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
