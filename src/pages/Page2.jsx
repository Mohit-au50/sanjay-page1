import React, { useEffect, useState } from "react";
import img from "../assets/section2/img.svg";
import { options } from "../data/options";
import { images } from "../data/options";

const Page2 = () => {
  const [isActive, setIsActive] = useState("1");

  const handleState = (value) => {
    setIsActive(value);
  };

  return (
    <section className="bg-[#f8f7f2] w-full py-14 lg:py-24">
      <div className="max-w-[1200px] mx-auto h-full p-4 lg:p-0">
        <div className="flex flex-col lg:gap-y-24 gap-y-7">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 order-2">
              <h1 className="text-3xl lg:text-6xl font-bold mt-14">
                Create your Topmate page in a{" "}
                <span className="text-[#DE7E47]">flash</span>
              </h1>
              <p className="text-sm lg:text-xl font-medium my-4 lg:my-12">
                Start earning $$ by the time you finish reading our website
              </p>
              <a
                href="#"
                className="text-sm lg:text-lg font-medium italic underline"
              >
                Launch your page -
              </a>
            </div>
            <div className="lg:w-1/2 flex lg:justify-end justify-center lg:order-2">
              <img src={img} alt="" className="lg:w-[84%] w-full h-full" />
            </div>
          </div>

          <div className="lg:hidden flex lg:flex-row flex-col">
            <div className="grid place-items-center overflow-hidden">
              {options.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleState(item.id)}
                  className="flex gap-x-2 w-full py-7 border-b"
                >
                  <p className="text-[#c95230] text-left">0{item.id}</p>

                  <div className="w-full origin-bottom">
                    <div className="flex justify-between items-center">
                      <h1
                        className={`text-xl lg:text-3xl
                        ${
                          item.id === isActive
                            ? "font-bold text-[#c95230]"
                            : "font-medium"
                        }`}
                      >
                        {item.heading}
                      </h1>
                      <img
                        src={item.icon}
                        alt=""
                        className="lg:w-6 w-5 lg:h-6 h-5"
                      />
                    </div>
                    <p
                      className={`mt-3 pr-7 font-medium -ml-3
                      ${item.id === isActive ? "" : "hidden"}`}
                    >
                      {item.description}
                    </p>

                    {item.id === isActive && (
                      <div className="w-full mt-5 -ml-3">
                        <img
                          src={
                            images.find((imgItem) => imgItem.id === isActive)
                              ?.image
                          }
                          alt=""
                          className="w-full h-full"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex flex-row">
            {images.map((item) => (
              <div key={item.id} className="flex justify-start">
                <img
                  src={item.image}
                  alt=""
                  className={`w-[500px] h-full ${
                    isActive !== item.id && "hidden"
                  }`}
                />
              </div>
            ))}

            <div className="grid place-items-center h-[500px] overflow-hidden flex-1 pl-14">
              {options.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleState(item.id)}
                  className="w-full flex flex-row gap-x-10 border-b py-6"
                >
                  <p className="text-[#c95230]">0{item.id}</p>

                  <div className="w-full origin-bottom">
                    <div className="flex justify-between items-center pr-5">
                      <h1
                        className={`text-xl lg:text-3xl
                        ${
                          item.id === isActive
                            ? "font-bold text-[#c95230]"
                            : "font-medium"
                        }`}
                      >
                        {item.heading}
                      </h1>
                      <img
                        src={item.icon}
                        alt=""
                        className="lg:w-6 w-5 lg:h-6 h-5"
                      />
                    </div>
                    <p
                      className={`mt-3 pr-7 font-medium
                      ${item.id === isActive ? "" : "hidden"}`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page2;
