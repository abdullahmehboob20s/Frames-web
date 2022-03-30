import React from "react";

function RoadmapCard({ title, desc }: { title: string; desc: any }) {
  return (
    <div className="bg-[#1E1E1B] rounded-[16px] py-[44px] px-[60px] max-w-[810px] mx-auto">
      <h1 className="text-[50px] font-display font-extrabold text-white mb-[18px]">
        {title}
      </h1>

      {desc}
    </div>
  );
}

export default RoadmapCard;
