import React from "react";
import logo from "assets/images/logo.png";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import SocialIcon from "./SocialIcon";
import catIcon from "assets/images/catIcon.png";

const Footer = () => (
  <div className="container">
    <div className="bg-darkBlack py-[30px] px-[30px] rounded-[10px] sm:py-[50px] xl:py-[110px] xl:pb-[58px] sm:px-[50px] xl:px-[100px] sm:rounded-[30px] xl:rounded-[88px]">
      <div className="grid gap-y-8 sm:grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(4,1fr)] space-x-0 sm:gap-x-6 sm:gap-y-6 sm:space-x-0 xl:space-x-10 mb-20">
        <div className="sm:mr-8">
          <img src={logo} className="mb-5 sm:w-[130px] xl:w-[180px]" alt="" />
          <p className="text-base xl:text-lg text-white opacity-[.6] font-roboto mb-5">
            Lorem Ipsum is simply dummy text of the printing and ndustry. Lorem
            Ipsum has been the
          </p>
          <div className="flex items-center space-x-2">
            <SocialIcon
              width="w-[34px]"
              height="h-[34px]"
              icon={<FaFacebookF color="black" size={18} />}
            />
            <SocialIcon
              width="w-[34px]"
              height="h-[34px]"
              icon={<FaTwitter color="black" size={18} />}
            />
            <SocialIcon
              width="w-[34px]"
              height="h-[34px]"
              icon={<img src={catIcon} className="w-[18px]" alt="" />}
            />
          </div>
        </div>
        <div className="mt-[10px]">
          <h2 className="font-vidaloka sm:text-[20px] xl:text-[28px] text-white font-normal mb-[33px]">
            Useful Links
          </h2>

          <div>
            <a
              href="/"
              className="block leading-none text-[16px] xl:text-lg text-white opacity-[.6] font-roboto mb-5"
            >
              Home
            </a>
            <a
              href="/"
              className="block leading-none text-[16px] xl:text-lg text-white opacity-[.6] font-roboto mb-5"
            >
              About
            </a>
            <a
              href="/"
              className="block leading-none text-[16px] xl:text-lg text-white opacity-[.6] font-roboto mb-5"
            >
              Story
            </a>
            <a
              href="/"
              className="block leading-none text-[16px] xl:text-lg text-white opacity-[.6] font-roboto mb-5"
            >
              Tokens
            </a>
          </div>
        </div>
        <div className="mt-[10px]">
          <h2 className="font-vidaloka sm:text-[20px] xl:text-[28px] text-white font-normal mb-[33px]">
            Help
          </h2>

          <div>
            <a
              href="/"
              className="block leading-none text-[16px] xl:text-lg text-white opacity-[.6] font-roboto mb-5"
            >
              Gameplay
            </a>

            <a
              href="/"
              className="block leading-none text-[16px] xl:text-lg text-white opacity-[.6] font-roboto mb-5"
            >
              Roadmap
            </a>
            <a
              href="/"
              className="block leading-none text-[16px] xl:text-lg text-white opacity-[.6] font-roboto mb-5"
            >
              Character
            </a>
            <a
              href="/"
              className="block leading-none text-[16px] xl:text-lg text-white opacity-[.6] font-roboto mb-5"
            >
              Team
            </a>
          </div>
        </div>
        <div className="mt-[10px]">
          <h2 className="font-vidaloka sm:text-[20px] xl:text-[28px] text-white font-normal mb-[33px]">
            Contact Us
          </h2>

          <a
            href="/"
            className="block leading-none text-[16px] xl:text-lg text-white opacity-[.6] font-roboto mb-5"
          >
            Demo@gmai.com
          </a>
          <a
            href="/"
            className="block leading-none text-[16px] xl:text-lg text-white opacity-[.6] font-roboto mb-5"
          >
            +46457-45756
          </a>
          <a
            href="/"
            className="block leading-none text-[16px] xl:text-lg text-white opacity-[.6] font-roboto mb-5"
          >
            Facebook
          </a>
          <a
            href="/"
            className="block leading-none text-[16px] xl:text-lg text-white opacity-[.6] font-roboto mb-5"
          >
            Instragram
          </a>
        </div>
      </div>

      <p className="block leading-none text-base xl:text-lg text-white opacity-[.6] font-roboto mb-5 text-center">
        Copyright © 2021
      </p>
    </div>
  </div>
);

export default Footer;
