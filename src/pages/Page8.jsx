import React, { useState } from "react";
import { faq } from "../data/faq";

const Page8 = () => {
  const [isActive, setIsActive] = useState(null);

  const handleIsActive = (value) => {
    setIsActive((prev) => (prev === value ? null : value));
  };
  return (
    <section className="bg-[#f7f7f7] w-full py-14 lg:py-36">
      <div className="max-w-[1200px] mx-auto h-full p-4 lg:p-0">
        <div className="flex flex-col lg:flex-row gap-y-10">
          <div className="lg:w-1/2">
            <h1 className=" text-3xl lg:text-6xl font-bold">
              Frequently asked questions
            </h1>
            <p className="lg:text-xl font-medium my-10">
              Can't find the answer you are looking for?
            </p>
            <a href="#" className="lg:text-xl font-bold text-green-600">
              Reach out to us
            </a>
          </div>

          <div className="flex flex-col lg:w-1/2">
            {faq.map((item) => (
              <div
                key={item.id}
                onClick={() => handleIsActive(item.id)}
                className="flex flex-col border-b py-2"
              >
                <div className="flex flex-row items-center justify-between p-4">
                  <h1 className="text-lg lg:text-xl font-bold cursor-pointer">
                    {item.heading}
                  </h1>
                  <img
                    src={item.icon}
                    alt=""
                    className={`w-5 h-5
                    ${item.id === isActive && "-rotate-45 fill-[#e4562c]"}`}
                  />
                </div>
                <p
                  className={`p-4 transition-all origin-bottom
                ${item.id === isActive ? "" : "hidden"}`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page8;
