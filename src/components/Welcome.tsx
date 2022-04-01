import React, { useContext } from "react";

const Welcome = () => {
  return (
    <div className="container">
      <div className="max-w-[809px] mx-auto w-full flex flex-col items-center sm:space-y-7 space-y-4">
        <h1 className="text-white font-display font-black text-center sm:text-[44px] lg:text-[64px] text-[28px] leading-[1.3] ">
          {" "}
          WELCOME TO THE <br /> FRAMES{" "}
          <span className="font-display text-customRed drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.95)]">
            NFT
          </span>
        </h1>

        <p className="text-center sm:text-[18px] lg:text-[22px] text-base text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <button className="font-display text-base text-white bg-yellow-red-gradient py-[12px] sm:py-[20px] px-[20px] sm:px-[30px] sm:rounded-[14px] rounded-[5px]">
          Join our discord
        </button>
      </div>
    </div>
  );
};

export default Welcome;
