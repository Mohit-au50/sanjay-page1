import React from "react";
import img1 from "../assets/section3/service1.svg";
import img1Mob from "../assets/section3/service1Mob.svg";
import img2 from "../assets/section3/service2.svg";
import img2Mob from "../assets/section3/service2Mob.svg";
import img3 from "../assets/section3/service3.svg";
import img3Mob from "../assets/section3/service3Mob.svg";
import img4 from "../assets/section3/service4.svg";
import img4Mob from "../assets/section3/service4Mob.svg";
import img5 from "../assets/section3/service5.svg";
import img5Mob from "../assets/section3/service5Mob.svg";

const Page3 = () => {
  return (
    <section className="bg-black w-full py-14 lg:py-28">
      <div className="max-w-[1200px] mx-auto h-full p-4 lg:p-0">
        <h1 className="text-3xl lg:text-6xl font-medium text-center text-white">
          Creators <strong>earn more</strong> on topmate
        </h1>

        <div className="lg:hidden flex flex-col gap-y-4 mt-16">
          <div className="flex gap-x-4">
            <div className="w-1/2">
              <img src={img1Mob} alt="" className="w-full h-full" />
            </div>
            <div className="w-1/2">
              <img src={img2Mob} alt="" className="w-full h-full" />
            </div>
          </div>
          <div>
            <img src={img3Mob} alt="" className="h-full w-full" />
          </div>
          <div>
            <img src={img4Mob} alt="" className="w-full h-full" />
          </div>
          <div>
            <img src={img5Mob} alt="" className="w-full h-full" />
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-3 gap-x-5 mt-16">
          <div className="flex h-[300px] col-span-2 justify-between gap-x-5 pb-2">
            <div className="h-full">
              <img src={img1} alt="" className="w-full h-full" />
            </div>
            <div className="h-full">
              <img src={img2} alt="" className="w-full h-full" />
            </div>
          </div>
          <div className="row-span-2">
            <img src={img3} alt="" className="h-full w-full" />
          </div>

          <div className="h-[300px] flex justify-between gap-x-5 col-span-2">
            <div className="h-[300px]">
              <img src={img4} alt="" className="w-full h-full" />
            </div>
            <div className="h-[300px]">
              <img src={img5} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page3;
