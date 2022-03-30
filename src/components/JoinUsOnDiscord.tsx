import React from "react";
import { FaDiscord } from "react-icons/fa";

function JoinUsOnDiscord() {
  return (
    <div className="container">
      <div
        className={`bg-[url(assets/images/discordBg.png)] h-[484px] border-2 border-[#CD123D] flex flex-col items-center justify-center space-y-[50px]`}
      >
        <h1 className="font-vidaloka text-[70px] text-white">
          Join us on Discord !
        </h1>

        <button className="bg-[#3183FF] w-[142px] h-[142px] rounded-full flex items-center justify-center">
          <FaDiscord size={100} color="white" />
        </button>
      </div>
    </div>
  );
}

export default JoinUsOnDiscord;
