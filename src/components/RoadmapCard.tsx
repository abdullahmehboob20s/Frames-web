import React from "react";

function RoadmapCard({ title, desc }: { title: string; desc: any }) {
  return (
    <div className="bg-[#1E1E1B] rounded-[16px] py-[44px] px-[60px] max-w-[810px] mx-auto relative">
      {/* CIRCLE */}
      <div className="absolute top-[5%] left-[-15%] w-[34px] h-[34px] roadmap-circle rounded-full bg-mahron border-2 border-white "></div>

      {/* CONTENT */}
      <h1 className="text-[50px] font-display font-extrabold text-white mb-[18px]">
        {title}
      </h1>

      {desc}
    </div>
  );
}

export default RoadmapCard;
