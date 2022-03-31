import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import NFTInFrame from "./NFTInFrame";
import SocialIcon from "./SocialIcon";

function TeamCard({
  title,
  designation,
  img,
  links,
}: {
  img: any;
  links?: any;
  title: string;
  designation: string;
}) {
  return (
    <div className="flex-1 bg-black px-[22px] py-[22px] sm:px-[36px] sm:py-[40px] rounded-[10px] text-white">
      <img
        src={img}
        className="w-full mb-4 sm:mb-9 lg:w-[80%] lg:mx-auto"
        alt=""
      />

      <div className="mb-[10px]">
        <h1 className="text-[16px] sm:text-[20px] font-[700] font-display text-center text-white mb-2">
          {title}
        </h1>
        <p className="text-center text-white text-[14px] sm:text-[15px] opacity-[.5] ">
          {designation}
        </p>
      </div>

      <div className="flex items-center space-x-3 justify-center">
        {links.map(
          (
            { icon, link, target }: { icon: any; link: string; target: string },
            index: { index: number }
          ) => (
            <SocialIcon icon={icon} link={link} target={target} />
          )
        )}
      </div>
    </div>
  );
}

export default TeamCard;
