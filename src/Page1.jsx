import React from "react";
import leftImage from "./assets/left-stats.svg";
import rightImage from "./assets/right-stats.svg";

const Page1 = () => {
  return (
    <section className="bg-[#f8f7f2] w-full py-36">
      <div className="max-w-[1200px] mx-auto h-full">
        <div className="h-[465px] flex justify-between">
          <div className="left-side flex-1 h-full">
            <h2 className="text-6xl">
              Calculate your
              <br />
              <span>
                <strong>earning potential</strong>
              </span>
            </h2>
            <h4 className="text-lg w-[72%] mt-9 font-medium">
              Calculated using your LinkedIn profile and comparing based on
              similar profiles on topmate
            </h4>
            <form className="w-[62%]">
              <div className="relative mt-12 flex items-center text-xl">
                <input
                  type="text"
                  className="h-[60px] rounded-lg border-2 border-black w-full px-6"
                  placeholder="Your linkdin profile link"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10 absolute right-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="mt-5 flex text-xl font-medium">
                <p>
                  No sign up required.
                  <a href="#" className="text-green-600">
                    {" "}
                    See example
                  </a>
                </p>
              </div>
            </form>
          </div>
          <div className="right-side h-full order-2">
            <div className="imgae w-[380px] h-full bg-gradient-to-r from-green-500 to-green-900 rounded-[40px]"></div>
          </div>
        </div>

        {/* second div for grid boxes */}
        <div className="mt-[60px]">
          <div className="flex gap-x-14 h-[390px]">
            {/* left image */}
            <div>
              <img src={leftImage} alt="" className="h-full w-full" />
            </div>

            {/* right image */}
            <div>
              <img src={rightImage} alt="" className="h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page1;
