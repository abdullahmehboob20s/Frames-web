import React from "react";
import Accordion from "./Accordion";

function Faq() {
  return (
    <div className="sm:container">
      <div className="bg-darkBlack pb-[40px]  py-[24px] sm:py-[40px] lg:py-[40px] px-[24px] sm:px-[40px] lg:px-[80px] border-2 border-mahron sm:rounded-[34px]">
        <h1 className="text-center text-white font-display text-[30px] lg:text-[50px] font-black mb-[30px] sm:mb-[60px]">
          FAQ
        </h1>

        <div className="space-y-6">
          <Accordion
            title="Is nft is unique?"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took "
          />
          <Accordion
            title="What is the price of the nft with the frame?"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took "
          />
          <Accordion
            title="How to make the nft unique"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took "
          />
          <Accordion
            title="How to make sure that someone can use just thier
            already NFT"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took "
          />
        </div>
      </div>
    </div>
  );
}

export default Faq;
