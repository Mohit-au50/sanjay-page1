import React from "react";
import homeBtn from "../assets/section0/supporterBanner.svg";
import landing1 from "../assets/section0/landingImg1.svg";
import star from "../assets/section0/star.svg";
import user1 from "../assets/section0/user1.webp";
import user2 from "../assets/section0/user2.webp";
import user3 from "../assets/section0/user3.webp";
import user4 from "../assets/section0/user4.webp";

const Page0 = () => {
  return (
    <section className="bg-[#f8f7f2] w-full pt-24 lg:py-36">
      <div className="max-w-[1200px] mx-auto h-full">
        <div className="px-4 lg:px-0">
          <img src={homeBtn} alt="" className="h-full" />
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="lg:flex-1 p-4">
            <h2 className="lg:text-7xl text-5xl font-bold my-7">
              Start your side hustle today
            </h2>
            <h3 className="lg:text-xl text-base font-medium text-[#434343] lg:my-9 my-7 lg:max-w-[84%]">
              Turn your passion and knowledge into a thriving business. Help
              your audience get ahead in life
            </h3>
            <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-6">
              <button className="flex justify-center gap-x-4 font-bold lg:text-xl text-base rounded-md bg-black text-white py-4 lg:px-14">
                Start My Page <span>&#8594;</span>
              </button>
              <button className="flex justify-center gap-x-4 font-bold lg:text-xl text-base rounded-md border border-black lg:py-4 py-3 lg:px-10">
                <span>&#9632;</span> Watch Demo
              </button>
            </div>
            <div className="relative flex flex-col lg:flex-row my-7 gap-y-4 lg:gap-x-5">
              <div className="relative w-48 flex">
                <div>
                  <img src={user1} alt="" className="h-12 lg:h-14" />
                </div>
                <div className="absolute left-[38px] lg:left-[44px]">
                  <img src={user2} alt="" className="h-12 lg:h-14" />
                </div>
                <div className="absolute left-[76px] lg:left-[88px]">
                  <img src={user3} alt="" className="h-12 lg:h-14" />
                </div>
                <div className="absolute left-[114px] lg:left-[132px]">
                  <img src={user4} alt="" className="h-12 lg:h-14" />
                </div>
              </div>
              <div className="flex flex-col justify-center w-52">
                <div className="flex lg:justify-evenly gap-x-3 py-1">
                  <img src={star} alt="" className="w-5 h-5 lg:w-6 lg:h-6" />
                  <img src={star} alt="" className="w-5 h-5 lg:w-6 lg:h-6" />
                  <img src={star} alt="" className="w-5 h-5 lg:w-6 lg:h-6" />
                  <img src={star} alt="" className="w-5 h-5 lg:w-6 lg:h-6" />
                  <img src={star} alt="" className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <p className="text-lg lg:text-center">(5/5 by 1000+ users)</p>
              </div>
            </div>
          </div>

          <div className="hidden order-2 lg:block h-[500px]">
            <div className="w-full h-full flex justify-end">
              <img src={landing1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page0;
