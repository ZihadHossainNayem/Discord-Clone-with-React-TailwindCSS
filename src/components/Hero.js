import React from "react";
import { FiDownload } from "react-icons/fi";
import heroMiddle from "../assets/heroMiddle.svg";
import heroLeft from "../assets/heoLeft.svg";

const Hero = () => {
  return (
    <div>
      {/* hero bg image -absolute -middle,left */}
      <div className="absolute block h-[626px] bottom-0">
        <img
          src={heroMiddle}
          alt="heroMiddle"
          className="h-[100%] object-cover"
        />
      </div>

      <div className="absolute hidden md:block bottom-0 h-[352px] -ml-[1030px] left-[50%]">
        <img src={heroLeft} alt="heroLeft" className="h-[100%] object-cover" />
      </div>

      <div className="max-w-[1260px] mx-auto md:px-[40px] px-[24px] md:py-[120px] py-[56px] bg-[#404eed]">
        <div className="max-w-[780px] mx-auto">
          {/* content */}
          <div className="flex flex-col gap-8 relative">
            <h1 className="font-black md:text-[56px] text-[35px] text-white md:text-center">
              IMAGINE A PLACE...
            </h1>
            <p className="text-white md:text-center md:text-[18px] text-[16px]">
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </p>

            {/* buttons */}
            <div className="flex flex-col md:flex-row md:justify-center justify-start gap-8 font-medium">
              <button className="w-[300px] md:flex items-center bg-white px-8 py-4 rounded-[28px] gap-2 hidden">
                <FiDownload size={25} />
                <span>Download for Windows</span>
              </button>
              <button className="w-[300px] flex items-center bg-white px-8 py-4 rounded-[28px] gap-2 md:hidden">
                <FiDownload size={25} />
                <span>Download from App Store</span>
              </button>
              <button className="w-[300px] sm:flex bg-[#23272a] text-white px-8 py-4 rounded-[28px] hidden ">
                <span> Open Discord in your browser</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
