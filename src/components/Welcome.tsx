import React, { useContext } from "react";

const Welcome = () => {
  return (
    <div className="container">
      <div className="max-w-[809px] mx-auto w-full flex flex-col items-center space-y-7">
        <h1 className="text-white font-display font-black text-center text-[64px] leading-[1.3] ">
          {" "}
          WELCOME TO THE <br /> FRAMES{" "}
          <span className="font-display text-customRed drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.95)]">
            NFT
          </span>
        </h1>

        <p className="text-center text-[22px] text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <button className="font-display text-base text-white bg-yellow-red-gradient py-[30px] px-[46px] rounded-[20px]">
          Join our discord
        </button>
      </div>
    </div>
  );
};

export default Welcome;
