import React, { useState } from "react";
import { dataChip } from "../data/data";
import { productsChip } from "../data/products";
import { healthChip } from "../data/health";
import { studyChip } from "../data/study";
import { techChip } from "../data/tech";
import { youChip } from "../data/you";

const Page1 = () => {
  const [value, setValue] = useState("select");
  const [data, setData] = useState(true);
  const [products, setProducts] = useState(false);
  const [mentalHealth, setMentalHealth] = useState(false);
  const [studyAbroad, setStudyAbroad] = useState(false);
  const [tech, setTech] = useState(false);
  const [you, setYou] = useState(false);
  const [model, setModel] = useState(false);

  const handleState = (setState) => {
    setData(false);
    setProducts(false);
    setMentalHealth(false);
    setStudyAbroad(false);
    setTech(false);
    setYou(false);
    setState(true);
    setModel(false);
  };

  return (
    <section className="bg-white w-full py-14 lg:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto h-full p-4 lg:p-0">
        <h1 className="text-3xl lg:text-6xl font-medium text-center">
          Designed for people
          <strong> making impact</strong>
        </h1>

        <div className="relative lg:hidden my-10">
          <div
            className="bg-[#141414] text-white rounded w-full h-12 text-lg font-medium grid place-items-center"
            onClick={() => setModel(true)}
          >
            {value}
          </div>
          {model && (
            <div className="h-36 rounded absolute top-0 z-10 overflow-y-scroll">
              <button
                onClick={() => {
                  handleState(setData);
                  setValue("Data");
                }}
                className={`w-full h-12 rounded font-medium text-lg
            ${data ? "bg-[#141414] text-white" : "bg-[#f0f0f0]"}`}
              >
                Data
              </button>
              <button
                onClick={() => {
                  handleState(setProducts);
                  setValue("Products");
                }}
                className={`h-12 w-full font-medium text-lg
            ${products ? "bg-[#141414] text-white" : "bg-[#f0f0f0]"}`}
              >
                Products
              </button>
              <button
                onClick={() => {
                  handleState(setMentalHealth);
                  setValue("Mental Health");
                }}
                className={`h-12 w-full font-medium text-lg
            ${mentalHealth ? "bg-[#141414] text-white" : "bg-[#f0f0f0]"}`}
              >
                Mental Health
              </button>
              <button
                onClick={() => {
                  handleState(setStudyAbroad);
                  setValue("Study Abroad");
                }}
                className={`h-12 w-full font-medium text-lg
            ${studyAbroad ? "bg-[#141414] text-white" : "bg-[#f0f0f0]"}`}
              >
                Study Abroad
              </button>
              <button
                onClick={() => {
                  handleState(setTech);
                  setValue("Tech");
                }}
                className={`h-12 w-full font-medium text-lg
            ${tech ? "bg-[#141414] text-white" : "bg-[#f0f0f0]"}`}
              >
                Tech
              </button>
              <button
                onClick={() => {
                  handleState(setYou);
                  setValue("You 🙌🏻");
                }}
                className={`h-12 w-full font-medium text-lg
            ${you ? "bg-[#141414] text-white" : "bg-[#f0f0f0]"}`}
              >
                You 🙌🏻
              </button>
            </div>
          )}
        </div>

        <div className="hidden lg:flex gap-x-5 lg:justify-center my-10 h-10 lg:h-14">
          <button
            onClick={() => handleState(setData)}
            className={`lg:px-10 px-4 rounded-full font-medium text-lg
            ${data ? "bg-[#141414] text-white" : "bg-[#f0f0f0]"}`}
          >
            Data
          </button>
          <button
            onClick={() => handleState(setProducts)}
            className={`lg:px-10 px-4 rounded-full font-medium text-lg
            ${products ? "bg-[#141414] text-white" : "bg-[#f0f0f0]"}`}
          >
            Products
          </button>
          <button
            onClick={() => handleState(setMentalHealth)}
            className={`lg:px-10 px-4 rounded-full font-medium text-lg
            ${mentalHealth ? "bg-[#141414] text-white" : "bg-[#f0f0f0]"}`}
          >
            Mental Health
          </button>
          <button
            onClick={() => handleState(setStudyAbroad)}
            className={`lg:px-10 px-4 py-3 rounded-full font-medium text-lg
            ${studyAbroad ? "bg-[#141414] text-white" : "bg-[#f0f0f0]"}`}
          >
            Study Abroad
          </button>
          <button
            onClick={() => handleState(setTech)}
            className={`lg:px-10 px-4 py-3 rounded-full font-medium text-lg
            ${tech ? "bg-[#141414] text-white" : "bg-[#f0f0f0]"}`}
          >
            Tech
          </button>
          <button
            onClick={() => handleState(setYou)}
            className={`lg:px-10 px-4 py-3 rounded-full font-medium text-lg
            ${you ? "bg-[#141414] text-white" : "bg-[#f0f0f0]"}`}
          >
            You 🙌🏻
          </button>
        </div>

        <div className="flex flex-col items-center gap-y-9 lg:flex:row lg:gap-x-9 justify-center lg:my-14">
          {data && (
            <>
              {dataChip.map((item, index) => (
                <div
                  key={index}
                  className="relative h-[320px] w-[240px] px-7 rounded-xl overflow-hidden shadow-lg"
                >
                  <div
                    className="absolute top-0 left-0 h-28 w-full"
                    style={{ background: `${item.bg}` }}
                  ></div>
                  <div className="h-[120px] w-[120px] mx-auto absolute left-1/2 -translate-x-1/2 top-12">
                    <img src={item.image} alt="" className="rounded-full" />
                  </div>
                  <div className="relative top-[170px] text-center">
                    <h1 className="text-2xl font-bold my-2">{item.name}</h1>
                    <p>{item.about}</p>
                  </div>
                </div>
              ))}
            </>
          )}

          {products && (
            <>
              {productsChip.map((item, index) => (
                <div
                  key={index}
                  className="relative h-[320px] w-[240px] px-7 rounded-xl overflow-hidden shadow-lg"
                >
                  <div
                    className="absolute top-0 left-0 h-28 w-full"
                    style={{ background: `${item.bg}` }}
                  ></div>
                  <div className="h-[120px] w-[120px] mx-auto absolute left-1/2 -translate-x-1/2 top-12">
                    <img src={item.image} alt="" className="rounded-full" />
                  </div>
                  <div className="relative top-[170px] text-center">
                    <h1 className="text-2xl font-bold my-2">{item.name}</h1>
                    <p>{item.about}</p>
                  </div>
                </div>
              ))}
            </>
          )}

          {mentalHealth && (
            <>
              {healthChip.map((item, index) => (
                <div
                  key={index}
                  className="relative h-[320px] w-[240px] px-7 rounded-xl overflow-hidden shadow-lg"
                >
                  <div
                    className="absolute top-0 left-0 h-28 w-full"
                    style={{ background: `${item.bg}` }}
                  ></div>
                  <div className="h-[120px] w-[120px] mx-auto absolute left-1/2 -translate-x-1/2 top-12">
                    <img src={item.image} alt="" className="rounded-full" />
                  </div>
                  <div className="relative top-[170px] text-center">
                    <h1 className="text-2xl font-bold my-2">{item.name}</h1>
                    <p>{item.about}</p>
                  </div>
                </div>
              ))}
            </>
          )}

          {studyAbroad && (
            <>
              {studyChip.map((item, index) => (
                <div
                  key={index}
                  className="relative h-[320px] w-[240px] px-7 rounded-xl overflow-hidden shadow-lg"
                >
                  <div
                    className="absolute top-0 left-0 h-28 w-full"
                    style={{ background: `${item.bg}` }}
                  ></div>
                  <div className="h-[120px] w-[120px] mx-auto absolute left-1/2 -translate-x-1/2 top-12">
                    <img src={item.image} alt="" className="rounded-full" />
                  </div>
                  <div className="relative top-[170px] text-center">
                    <h1 className="text-2xl font-bold my-2">{item.name}</h1>
                    <p>{item.about}</p>
                  </div>
                </div>
              ))}
            </>
          )}

          {tech && (
            <>
              {techChip.map((item, index) => (
                <div
                  key={index}
                  className="relative h-[320px] w-[240px] px-7 rounded-xl overflow-hidden shadow-lg"
                >
                  <div
                    className="absolute top-0 left-0 h-28 w-full"
                    style={{ background: `${item.bg}` }}
                  ></div>
                  <div className="h-[120px] w-[120px] mx-auto absolute left-1/2 -translate-x-1/2 top-12">
                    <img src={item.image} alt="" className="rounded-full" />
                  </div>
                  <div className="relative top-[170px] text-center">
                    <h1 className="text-2xl font-bold my-2">{item.name}</h1>
                    <p>{item.about}</p>
                  </div>
                </div>
              ))}
            </>
          )}

          {you && (
            <>
              {youChip.map((item, index) => (
                <div
                  key={index}
                  className="relative h-[320px] w-[240px] px-7 rounded-xl overflow-hidden shadow-lg"
                >
                  <div
                    className="absolute top-0 left-0 h-28 w-full"
                    style={{ background: `${item.bg}` }}
                  ></div>
                  <div className="h-[120px] w-[120px] mx-auto absolute left-1/2 -translate-x-1/2 top-12">
                    <img src={item.image} alt="" className="rounded-full" />
                  </div>
                  <div className="relative top-[170px] text-center">
                    <h1 className="text-2xl font-bold my-2">{item.name}</h1>
                    <p>{item.about}</p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Page1;
