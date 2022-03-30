import React from "react";
import logo from "assets/images/logo.png";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import SocialIcon from "./SocialIcon";
import catIcon from "assets/images/catIcon.png";

const Footer = () => (
  <div className="container">
    <div className="bg-darkBlack py-[110px] pb-[58px] px-[100px] rounded-[88px]">
      <div className="grid grid-cols-[repeat(4,1fr)] space-x-10 mb-20">
        <div>
          <img src={logo} className="mb-5" alt="" />
          <p className="text-lg text-white opacity-[.6] font-roboto mb-5">
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
          <h2 className="font-vidaloka text-[28px] text-white font-normal mb-[33px]">
            Useful Links
          </h2>

          <div>
            <a
              href="#"
              className="block leading-none text-lg text-white opacity-[.6] font-roboto mb-5"
            >
              Home
            </a>
            <a
              href="#"
              className="block leading-none text-lg text-white opacity-[.6] font-roboto mb-5"
            >
              About
            </a>
            <a
              href="#"
              className="block leading-none text-lg text-white opacity-[.6] font-roboto mb-5"
            >
              Story
            </a>
            <a
              href="#"
              className="block leading-none text-lg text-white opacity-[.6] font-roboto mb-5"
            >
              Tokens
            </a>
          </div>
        </div>
        <div className="mt-[10px]">
          <h2 className="font-vidaloka text-[28px] text-white font-normal mb-[33px]">
            Help
          </h2>

          <div>
            <a
              href="#"
              className="block leading-none text-lg text-white opacity-[.6] font-roboto mb-5"
            >
              Gameplay
            </a>

            <a
              href="#"
              className="block leading-none text-lg text-white opacity-[.6] font-roboto mb-5"
            >
              Roadmap
            </a>
            <a
              href="#"
              className="block leading-none text-lg text-white opacity-[.6] font-roboto mb-5"
            >
              Character
            </a>
            <a
              href="#"
              className="block leading-none text-lg text-white opacity-[.6] font-roboto mb-5"
            >
              Team
            </a>
          </div>
        </div>
        <div className="mt-[10px]">
          <h2 className="font-vidaloka text-[28px] text-white font-normal mb-[33px]">
            Contact Us
          </h2>

          <a
            href="#"
            className="block leading-none text-lg text-white opacity-[.6] font-roboto mb-5"
          >
            Demo@gmai.com
          </a>
          <a
            href="#"
            className="block leading-none text-lg text-white opacity-[.6] font-roboto mb-5"
          >
            +46457-45756
          </a>
          <a
            href="#"
            className="block leading-none text-lg text-white opacity-[.6] font-roboto mb-5"
          >
            Facebook
          </a>
          <a
            href="#"
            className="block leading-none text-lg text-white opacity-[.6] font-roboto mb-5"
          >
            Instragram
          </a>
        </div>
      </div>

      <p className="block leading-none text-lg text-white opacity-[.6] font-roboto mb-5 text-center">
        Copyright © 2021
      </p>
    </div>
  </div>
);

export default Footer;
