import React, { useState } from "react";
import discordLogo from "../assets/discordLogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import discordBlack from "../assets/discordBlack.png";
import { FiDownload } from "react-icons/fi";

const Navbar = () => {
  /* state for side menu */
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-[1260px] h-[80px] mx-auto md:px-[40px] px-[24px] bg-[#404eed] flex items-center justify-between">
      {/* left */}
      <div>
        <img src={discordLogo} alt="discordLogo" className="w-[124px]" />
      </div>
      {/* middle */}
      <div className="font-semibold text-white hidden lg:flex flex-1 justify-center items-center ">
        <a href="/" className="m-[10px] p-[10px]">
          Download
        </a>
        <a href="/" className="m-[10px] p-[10px]">
          Nitro
        </a>
        <a href="/" className="m-[10px] p-[10px]">
          Discover
        </a>
        <a href="/" className="m-[10px] p-[10px]">
          Safety
        </a>
        <a href="/" className="m-[10px] p-[10px]">
          Support
        </a>
        <a href="/" className="m-[10px] p-[10px]">
          Blog
        </a>
        <a href="/" className="m-[10px] p-[10px]">
          Carers
        </a>
      </div>
      {/* right */}
      <div className="flex gap-4">
        <button className="bg-white px-[16px] py-[7px] rounded-[40px] text-[14px]">
          Open Discord
        </button>
        {/* hidden menu */}
        <div
          className="flex lg:hidden items-center z-[200]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <GiHamburgerMenu size={30} className="text-white" />

          {isOpen && (
            <div className="bg-black/30 fixed w-full h-screen z-10 top-0 left-0"></div>
          )}
          {/* mobile menu */}
          <div
            className={
              isOpen
                ? "fixed top-0 right-0 w-[330px] rounded-l-lg h-screen z-10 bg-white duration-300"
                : "fixed top-0 right-[-100%] w-[330px] rounded-l-lg h-screen z-10 bg-white duration-300"
            }
          >
            {/* close icon */}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="absolute top-[24px] right-[24px] w-[40px] h-[40px] flex items-center justify-center"
            >
              <IoCloseSharp size={30} />
            </div>

            <div className="pl-[24px] pr-[24px] pt-[24px] pb-[120px]">
              {/* discord logo */}
              <img
                src={discordBlack}
                alt="discordLogo"
                className="w-[124px] py-2"
              />
              {/* border */}
              <div className="w-[100%] border border-[#ebedef] mt-[24px] mb-[16px]"></div>
              {/* menus */}
              <div className="flex flex-col font-normal">
                <a
                  href="/"
                  className="px-[8px] py-[16px] hover:bg-[#f6f6f6] hover:text-[#404eed] rounded-lg"
                >
                  Home
                </a>
                <a
                  href="/"
                  className="px-[8px] py-[16px] hover:bg-[#f6f6f6] hover:text-[#404eed] rounded-lg"
                >
                  Download
                </a>
                <a
                  href="/"
                  className="px-[8px] py-[16px] hover:bg-[#f6f6f6] hover:text-[#404eed] rounded-lg"
                >
                  Nitro
                </a>
                <a
                  href="/"
                  className="px-[8px] py-[16px] hover:bg-[#f6f6f6] hover:text-[#404eed] rounded-lg"
                >
                  Discover
                </a>
                <a
                  href="/"
                  className="px-[8px] py-[16px] hover:bg-[#f6f6f6] hover:text-[#404eed] rounded-lg"
                >
                  Safety
                </a>
                <a
                  href="/"
                  className="px-[8px] py-[16px] hover:bg-[#f6f6f6] hover:text-[#404eed] rounded-lg"
                >
                  Mod Academy
                </a>
                <a
                  href="/"
                  className="px-[8px] py-[16px] hover:bg-[#f6f6f6] hover:text-[#404eed] rounded-lg"
                >
                  Support
                </a>
                <a
                  href="/"
                  className="px-[8px] py-[16px] hover:bg-[#f6f6f6] hover:text-[#404eed] rounded-lg"
                >
                  Blog
                </a>
                <a
                  href="/"
                  className="px-[8px] py-[16px] hover:bg-[#f6f6f6] hover:text-[#404eed] rounded-lg"
                >
                  Careers
                </a>
              </div>
              {/* download */}
            </div>
            <div className="absolute left-0 right-0 bottom-0 p-[24px]">
              <button className="bg-[#586ff2] mx-auto py-3 px-8 rounded-2xl text-white text-sm flex gap-2">
                <FiDownload size={20} />
                Download from App Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
