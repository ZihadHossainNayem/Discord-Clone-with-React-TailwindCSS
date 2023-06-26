import React from "react";

import studyGroup from "../assets/studyGroup.svg";
import content2 from "../assets/content2.svg";
import content3 from "../assets/content3.svg";
import content4 from "../assets/content4.svg";
import content5bg from "../assets/content5bg.svg";

import { FiDownload } from "react-icons/fi";

const Content = () => {
  return (
    <>
      {/* 1st section */}
      <div className="w-full py-4">
        <div className="max-w-[1260px] mx-auto md:px-[40px] px-[24px] md:grid md:grid-cols-12">
          {/* left grid */}
          <div className="col-span-7 mx-auto md:my-20 my-10">
            <img src={studyGroup} alt="studyGroup" />
          </div>
          {/* right grid */}
          <div className="col-span-4 col-start-9 mx-auto md:my-20 my-10 flex flex-col justify-center">
            <h1 className="font-extrabold md:text-[44px] text-[20px] text-[#23272a]">
              Create an invite-only place where you belong
            </h1>
            <p className="mt-[24px] text-[#23272a]">
              Discord servers are organized into topic-based channels where you
              can collaborate, share, and just talk about your day without
              clogging up a group chat.
            </p>
          </div>
        </div>
      </div>

      {/* 2nd section */}
      <div className="w-full bg-[#f6f6f6] py-4">
        <div className="max-w-[1260px] mx-auto md:px-[40px] px-[24px] md:grid md:grid-cols-12">
          {/* right grid */}
          <div className="col-span-7 col-start-6 order-2 mx-auto md:my-20 my-10 ">
            <img src={content2} alt="studyGroup" />
          </div>

          {/* left grid */}
          <div className="col-span-4  order-1 mx-auto md:my-20 my-10 flex flex-col justify-center">
            <h1 className="font-extrabold md:text-[44px] text-[20px] text-[#23272a]">
              Where hanging out is easy
            </h1>
            <p className="mt-[24px] text-[#23272a]">
              Grab a seat in a voice channel when you're free. Friends in your
              server can see you're around and instantly pop in to talk without
              having to call.
            </p>
          </div>
        </div>
      </div>

      {/* 3rd section */}
      <div className="w-full py-4">
        <div className="max-w-[1260px] mx-auto md:px-[40px] px-[24px] md:grid md:grid-cols-12">
          {/* left grid */}
          <div className="col-span-7 mx-auto md:my-20 my-10">
            <img src={content3} alt="content3" />
          </div>
          {/* right grid */}
          <div className="col-span-4 col-start-9 mx-auto md:my-20 my-10 flex flex-col justify-center">
            <h1 className="font-extrabold md:text-[44px] text-[20px] text-[#23272a]">
              From few to a fandom
            </h1>
            <p className="mt-[24px] text-[#23272a]">
              Get any community running with moderation tools and custom member
              access. Give members special powers, set up private channels, and
              more.
            </p>
          </div>
        </div>
      </div>

      {/* 4th section */}
      <div className="w-full bg-[#f6f6f6] md:py-28 py-12">
        <div className="max-w-[1260px] mx-auto md:px-[40px] px-[24px]">
          <h1 className="font-black md:text-[56px] text-[24px] text-[#23272a] md:text-center">
            RELIABLE TECH FOR STAYING CLOSE
          </h1>
          <p className="text-[#23272a] md:text-center md:text-[18px] text-[16px] mt-4">
            Low-latency voice and video feels like you’re in the same room. Wave
            hello over video, watch friends stream their games, or gather up and
            have a drawing session with screen share.
          </p>
          <div className="py-4">
            <img
              src={content4}
              alt="content4"
              className="object-cover w-full"
            />
          </div>
          {/* 5th section */}
          <div className="pb-12">
            <div className="flex justify-center">
              <div className="py-8 w-[680px] relative">
                <h1 className="font-bold md:text-[32px] text-[24px] text-[#23272a] text-center">
                  Ready to start your journey?
                </h1>
                <img
                  src={content5bg}
                  alt="bg"
                  className="absolute top-0 left-20 md:block hidden"
                />
              </div>
            </div>
            {/* download button */}
            <div className="flex justify-center">
              <button className="flex items-center justify-center gap-2 bg-[#5865f2] px-8 py-4 rounded-[28px]">
                <FiDownload size={25} className="text-white" />
                <span className="text-white">Download for Windows</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
