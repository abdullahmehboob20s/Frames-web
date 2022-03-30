import React from "react";
import RoadmapCard from "./RoadmapCard";

function Roadmap() {
  return (
    <div className="container">
      <h1 className="text-center text-white font-display text-[50px] font-black mb-[78px]">
        Road Map
      </h1>

      <div className="space-y-8">
        <RoadmapCard
          title="Phase 1 - Community"
          desc={
            <p className="text-[36px] font-fira-sans text-white font-normal opacity-[.5] leading-[1.2]">
              Community building.
            </p>
          }
        />
        <RoadmapCard
          title="Phase 2"
          desc={
            <p className="text-[36px] font-fira-sans text-white font-normal opacity-[.5] leading-[1.2]">
              Public Mint Goes Live! Each NFT minted is 0.0777 ETH with at limit
              of 10 per wallet."
            </p>
          }
        />
        <RoadmapCard
          title="Phase 2"
          desc={
            <p className="text-[36px] font-fira-sans text-white font-normal opacity-[.5] leading-[1.2]">
              Nft on Rarity.Tools and Rarity Sniper Frames AirDrop to 10 Holders
              First Charity Donation"
            </p>
          }
        />
        <RoadmapCard
          title="40%"
          desc={
            <p className="text-[20px] font-fira-sans text-white font-normal opacity-[.5]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,"
            </p>
          }
        />
        <RoadmapCard
          title="40%"
          desc={
            <p className="text-[20px] font-fira-sans text-white font-normal opacity-[.5]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,"
            </p>
          }
        />
      </div>
    </div>
  );
}

export default Roadmap;
