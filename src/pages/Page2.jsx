import React from "react";
import one from "../assets/one.svg";
import oneMob from "../assets/one-mob.svg";
import two from "../assets/two.svg";
import twoMob from "../assets/two-mob.svg";
import three from "../assets/three.svg";
import threeMob from "../assets/three-mob.svg";
import four from "../assets/four.svg";
import fourMob from "../assets/four-mob.svg";
import lotte from "../assets/lotte.svg";

const Page2 = () => {
  return (
    <section className="bg-[#183a23] w-full py-14 lg:py-24">
      <div className="max-w-[1200px] mx-auto h-full">
        <div className="text-center text-white">
          <h2 className="font-medium text-3xl lg:text-6xl">
            Built
            <span>
              <strong> for </strong>
            </span>
            you. With
            <span>
              <strong> you.</strong>
            </span>
          </h2>
          <h3 className="hidden lg:block text-lg font-medium mt-6">
            Feedback and user needs is always our top priority, Here's some
            features
            <br />
            we shipped recently for and with the help of our users.
          </h3>
        </div>

        {/* grid with images */}
        <div className="grid mt-10 lg:mt-20 lg:grid-cols-3 grid-cols-2 gap-4 p-4">
          <div className="lg:hidden">
            <img src={oneMob} alt="" className="h-full" />
          </div>
          <div className="hidden lg:block col-start-1 col-end-1 row-span-2">
            <img src={one} alt="" className="h-full" />
          </div>

          <div className="relative lg:hidden block">
            <img src={lotte} alt="" className="absolute " />
            <img src={twoMob} alt="" className="h-full" />
          </div>
          <div className="hidden lg:block">
            <img src={two} alt="" className="h-full" />
          </div>

          <div className="lg:hidden col-span-2">
            <img src={threeMob} alt="" className="h-full" />
          </div>
          <div className="relative hidden lg:block">
            <img src={lotte} alt="" className="absolute h-44 w-44" />
            <img src={three} alt="" />
          </div>

          <div className="lg:hidden col-span-2">
            <img src={fourMob} alt="" className="h-full" />
          </div>
          <div className="col-start-2 col-end-4 hidden lg:block">
            <img src={four} alt="" className="h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page2;
