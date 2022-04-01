import React from "react";
import { FaDiscord } from "react-icons/fa";

function JoinUsOnDiscord() {
  return (
    <div className="container-2">
      <div
        className={`bg-[url(assets/images/discordBg.png)] px-[1.5rem] text-center h-[230px] sm:h-[300px] md:h-[430px] border-2 border-[#CD123D] flex flex-col items-center justify-center space-y-[20px] sm:space-y-[30px]`}
        // max-w-[900px] mx-auto
      >
        <h1 className="font-vidaloka text-[30px] sm:text-[50px] md:text-[60px] text-white">
          Join us on Discord !
        </h1>

        <button className="bg-[#3183FF] w-[70px] h-[70px] sm:w-[110px] sm:h-[110px] md:w-[110px] md:h-[110px] rounded-full flex items-center justify-center text-[40px] sm:text-[80px] md:text-[70px]">
          <FaDiscord color="white" />
        </button>
      </div>
    </div>
  );
}

export default JoinUsOnDiscord;
