import React from "react";

function RoadmapCard({ title, desc }: { title: string; desc: any }) {
  return (
    <div className="bg-[#1E1E1B] rounded-[16px] py-[18px] px-[26px] sm:py-[26px] sm:px-[36px] xl:py-[44px] xl:px-[60px] max-w-[500px] xl:max-w-[810px] mx-auto relative ml-[50px] md:ml-0">
      {/* CIRCLE */}
      <div className="absolute top-[5%] left-[-50px]  md:top-[5%] md:left-[-14.4%] xl:top-[5%] xl:left-[-15%] w-[24px] h-[24px] xl:w-[34px] xl:h-[34px] roadmap-circle rounded-full bg-mahron border-2 border-white "></div>

      {/* CONTENT */}
      <h1 className="text-[20px] sm:text-[30px] xl:text-[50px] font-display font-extrabold text-white mb-[12px] sm:mb-[18px]">
        {title}
      </h1>

      {desc}
    </div>
  );
}

export default RoadmapCard;
