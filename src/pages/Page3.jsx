import React from "react";
import final from "./assets/final.svg";

const Page3 = () => {
  return (
    <section className="bg-white w-full py-36">
      <div className="max-w-[1200px] mx-auto h-full flex">
        <div className="w-1/2">
          <button className="font-bold px-6 py-3 bg-[#dbd1fc] rounded-full">
            For Organization
          </button>
          <h2 className="text-6xl font-bold mt-5">
            Build your business on top of Topmate
          </h2>
          <h3 className="text-xl font-medium text-[#434343] mt-5">
            Use our white-label solution to create your own marketplace.
            Everything that's best for your business, now powered by the best in
            business
          </h3>
          <button className="mt-8 font-medium text-xl rounded-lg bg-black text-white py-3 px-5">
            Request Access
          </button>
        </div>
        <div className="w-1/2 h-[500px] flex justify-end">
          <img src={final} alt="" className="h-full" />
        </div>
      </div>
    </section>
  );
};

export default Page3;
