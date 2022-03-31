import React from "react";
import nfFramImg from "assets/images/nfFramImg.png";
import multipleArrows from "assets/images/multipleArrows.png";
import nftFrame from "assets/images/nftFrame.png";
import NFTInFrame from "./NFTInFrame";
import nftFrameSvg from "assets/images/nftFrame.svg";
import NftCard from "./NftCard";
import yourNft1 from "assets/images/youNFTS/1.png";
import yourNft2 from "assets/images/youNFTS/2.png";
import yourNft3 from "assets/images/youNFTS/3.png";
import yourNft4 from "assets/images/youNFTS/4.png";

function About() {
  return (
    <div className="container">
      <div className="mb-28">
        <div className="max-w-[989px] mx-auto w-full flex flex-col items-center space-y-4 md:space-y-7">
          <h1 className="text-white font-display font-black text-center leading-[1.3] sm:text-[44px] lg:text-[64px] text-[28px]">
            {" "}
            About Frames <br /> collection
          </h1>

          <p className="text-center sm:text-[18px] lg:text-[22px] text-base text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was
          </p>
          <p className="text-center sm:text-[18px] lg:text-[22px] text-base text-white">
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing
          </p>

          <button className="font-display text-base text-white bg-yellow-red-gradient py-[12px] sm:py-[30px] px-[20px] sm:px-[46px] sm:rounded-[20px] rounded-[5px]">
            Get Started
          </button>
        </div>
      </div>

      {/* <div className="relative overflow-hidden z-1 max-w-[1409px] mx-auto bg-[#1A1B1C] border-[1px] border-[#CD123D] rounded-[34px] pb-[100px] py-[60px] px-[132px]">
        <div className="absolute top-0 left-0 w-full h-1/2 z-[1] bg-gradient-bg-welcome blur-[100px] opacity-[.7] rounded-[50%]"></div>

        <div className="relative z-[2]">
          <h1 className="text-center text-white font-display text-[50px] font-black mb-4">
            Frame your NFT
          </h1>

          <p className="text-center text-[22px] text-white mb-20">
            Breed your frame with your own NFT and create a new NFT to show
            around
          </p>

          <div className="flex items-center justify-between mb-[120px]">
            <img src={nfFramImg} className="w-[127px]" alt="" />
            <img src={multipleArrows} alt="" />
            <img src={nftFrameSvg} className="w-[195px]" alt="" />
            <img src={multipleArrows} alt="" />
            <NFTInFrame frame={nftFrameSvg} img={nfFramImg} />
          </div>

          <div className="border-2 py-[36px] px-[90px] border-[#CD123D]">
            <h1 className="text-center text-white font-display text-[36px] font-bold mb-[50px] performance-inhancer">
              Your NFT
            </h1>

            <div className="flex space-x-[22px]">
              <NftCard img={yourNft1} />
              <NftCard img={yourNft2} />
              <NftCard img={yourNft3} />
              <NftCard img={yourNft4} />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default About;
