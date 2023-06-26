import React from "react";
import discordWhite from "../assets/discordwhite.png";
import arrowDown from "../assets/arrowdown.svg";

import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import usaFlag from "../assets/usa.png";

const Footer = () => {
  return (
    <div className="w-full py-[80px] bg-[#23272a]">
      <div className="max-w-[1260px] mx-auto md:px-[40px] px-[24px] grid lg:grid-cols-12 md:grid-cols-8 grid-cols-4 gap-[20px] border-b border-[#5865f2]">
        {/* grid 1 */}
        <div className="md:col-span-3 col-span-4 row-span-2 mb-20">
          {/* language button */}
          <button className="flex items-center mt-[24px]">
            <div>
              <img src={usaFlag} alt="usaFlag" className="w-[24px] " />
            </div>
            <div className="text-white text-sm mx-2">English, USA</div>
            <div>
              <img src={arrowDown} alt="arrowDown" />
            </div>
          </button>

          {/* socials icons */}
          <div className="flex text-white mt-[24px] gap-4">
            <AiOutlineTwitter size={24} className="cursor-pointer" />
            <AiOutlineInstagram size={24} className="cursor-pointer" />
            <AiFillFacebook size={24} className="cursor-pointer" />
            <AiFillYoutube size={24} className="cursor-pointer" />
            <FaTiktok size={24} className="cursor-pointer" />
          </div>
        </div>
        {/* empty grid */}
        <div className="hidden md:block row-span-2"></div>
        {/* grid 2 */}
        <div className="col-span-2 md:col-start-5 mb-[50px]">
          <p className="text-[#5865f2] mb-[20px]">Product</p>
          <div className="text-white flex flex-col">
            <a href="/" className="pt-[8px]">
              Download
            </a>
            <a href="/" className="pt-[8px]">
              Nitro
            </a>
            <a href="/" className="pt-[8px]">
              Status
            </a>
          </div>
        </div>
        {/* grid 3 */}
        <div className="col-span-2 mb-[50px]">
          <p className="text-[#5865f2] mb-[20px]">Company</p>
          <div className="text-white flex flex-col">
            <a href="/" className="pt-[8px]">
              About
            </a>
            <a href="/" className="pt-[8px]">
              Jobs
            </a>
            <a href="/" className="pt-[8px]">
              Brand
            </a>
            <a href="/" className="pt-[8px]">
              Newsroom
            </a>
          </div>
        </div>
        {/* grid 4 */}
        <div className="col-span-2 mb-[50px]">
          <p className="text-[#5865f2] mb-[20px]">Resources</p>
          <div className="text-white flex flex-col">
            <a href="/" className="pt-[8px]">
              College
            </a>
            <a href="/" className="pt-[8px]">
              Support
            </a>
            <a href="/" className="pt-[8px]">
              Safety
            </a>
            <a href="/" className="pt-[8px]">
              Blog
            </a>
            <a href="/" className="pt-[8px]">
              Feedback
            </a>
            <a href="/" className="pt-[8px]">
              Build
            </a>
            <a href="/" className="pt-[8px]">
              StreamKit
            </a>
            <a href="/" className="pt-[8px]">
              Creators
            </a>
            <a href="/" className="pt-[8px]">
              Community
            </a>
            <a href="/" className="pt-[8px]">
              Official 3rd Party Merch
            </a>
          </div>
        </div>
        {/* grid 5 */}
        <div className="col-span-2 mb-[50px]">
          <p className="text-[#5865f2] mb-[20px]">Policies</p>
          <div className="text-white flex flex-col">
            <a href="/" className="pt-[8px]">
              Terms
            </a>
            <a href="/" className="pt-[8px]">
              Privacy
            </a>
            <a href="/" className="pt-[8px]">
              Cookies Setting
            </a>
            <a href="/" className="pt-[8px]">
              Guidelines
            </a>
            <a href="/" className="pt-[8px]">
              Acknowledgement
            </a>
            <a href="/" className="pt-[8px]">
              Licenses
            </a>
            <a href="/" className="pt-[8px]">
              Moderation
            </a>
            <a href="/" className="pt-[8px]">
              Company Information
            </a>
          </div>
        </div>
      </div>

      {/* bottom section of footer */}
      <div className="max-w-[1260px] mx-auto md:px-[40px] px-[24px] mt-8 flex justify-between">
        <div className="items-center flex">
          <img src={discordWhite} alt="discordLogo" className="w-[124px]" />
        </div>
        {/* button */}
        <button className="bg-[#5865f2] text-white px-[16px] py-[7px] rounded-[40px] text-[14px]">
          <span className="hidden md:block">Open Discord</span>
          <span className="block md:hidden">Download</span>
        </button>
      </div>
    </div>
  );
};

export default Footer;
