import React, { useEffect, useState } from "react";
import { testimonials } from "../data/testimonials";

const Page4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 2;
  const startIndex = currentIndex * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <section className="bg-[#f6cfcf] w-full py-14 lg:py-24">
      <div className="max-w-[1200px] mx-auto h-full p-4 lg:p-0">
        <h1 className="text-3xl lg:text-6xl font-bold text-[#5b0000] text-center">
          People love using topmate
          <span className="lg:hidden">😇</span>
        </h1>

        <div className="hidden lg:grid place-items-center gap-x-5 gap-y-7 grid-cols-3 mt-16">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl h-[290px] lg:h-[300px] lg:w-[380px] w-[290px] flex flex-col justify-between p-5"
            >
              <div className="p-4 flex flex-col">
                <img src={item.icon} alt="" className="w-8 h-8 mb-4" />
                <p className="text-xl">{item.description}</p>
              </div>
              <div className="flex flex-row gap-x-4">
                <img src={item.userImg} alt="" className="rounded-full" />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:hidden grid place-items-center gap-y-5 mt-16">
          {testimonials.slice(startIndex, endIndex).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl h-[290px] lg:h-[300px] lg:w-[380px] w-[290px] flex flex-col justify-between p-7"
            >
              <div className="flex flex-col">
                <img src={item.icon} alt="" className="w-8 h-8 mb-4" />
                <p>{item.description}</p>
              </div>
              <div className="flex flex-row gap-x-4">
                <img src={item.userImg} alt="" className="rounded-full" />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:hidden my-5 flex justify-center gap-x-4 mb-4">
          {Array.from({
            length: Math.ceil(testimonials.length / itemsPerPage),
          }).map((i, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-black" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page4;
