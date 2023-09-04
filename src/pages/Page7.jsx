import React from "react";
import image from "../assets/section7/img.svg";

const Page7 = () => {
  return (
    <section className="bg-white w-full py-14 lg:py-36">
      <div className="max-w-[1200px] mx-auto h-full p-4 lg:p-0 flex flex-col lg:gap-x-5 lg:flex-row gap-y-5">
        <div className="order-2 lg:w-1/2">
          <button className="lg:font-bold font-medium text-xs lg:text-base px-6 py-3 bg-[#dbd1fc] rounded-full">
            For Organization
          </button>
          <h2 className="lg:text-6xl text-3xl font-bold lg:mt-5 my-4">
            Build your business on top of Topmate
          </h2>
          <h3 className="lg:text-xl text-sm font-medium text-[#434343] my-5 lg:mt-5">
            Use our white-label solution to create your own marketplace.
            Everything that's best for your business, now powered by the best in
            business
          </h3>
          <button className="lg:mt-8 my-4 font-bold lg:text-xl text-lg rounded-lg bg-black text-white py-3 px-6 lg:px-5">
            Request Access
          </button>
        </div>

        <div className="lg:w-1/2 lg:order-2">
          <img src={image} alt="" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Page7;
