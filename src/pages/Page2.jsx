import React from "react";
import one from "./assets/one.svg";
import two from "./assets/two.svg";
import three from "./assets/three.svg";
import four from "./assets/four.svg";
import lotte from "./assets/lotte.svg";

const Page2 = () => {
  return (
    <section className="bg-[#183a23] w-full py-24">
      <div className="max-w-[1200px] mx-auto h-full">
        <div className="text-center text-white">
          <h2 className="font-medium text-6xl">
            Built
            <span>
              <strong> for </strong>
            </span>
            you. With
            <span>
              <strong> you.</strong>
            </span>
          </h2>
          <h3 className="text-lg font-medium mt-6">
            Feedback and user needs is always our top priority, Here's some
            features
            <br />
            we shipped recently for and with the help of our users.
          </h3>
        </div>

        {/* grid with images */}
        <div className="grid mt-20 grid-cols-3 gap-4">
          <div className="col-start-1 col-end-1 row-span-2">
            <img src={one} alt="" className="h-full" />
          </div>
          <div>
            <img src={two} alt="" className="h-full" />
          </div>
          <div className="relative">
            <img src={lotte} alt="" className="absolute h-44 w-44" />
            <img src={three} alt="" />
          </div>
          <div className="col-start-2 col-end-4">
            <img src={four} alt="" className="h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page2;
