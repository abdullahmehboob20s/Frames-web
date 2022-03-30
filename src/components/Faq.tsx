import React from "react";
import Accordion from "./Accordion";

function Faq() {
  return (
    <div className="container">
      <div className="bg-darkBlack py-[100px] px-[150px] border-2 border-mahron rounded-[34px]">
        <h1 className="text-center text-white font-display text-[50px] font-black mb-[60px]">
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
