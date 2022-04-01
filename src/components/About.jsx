import React, { useRef } from "react";
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

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

function About() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className="container">
      <div className="mb-14 sm:mb-28">
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

          <button className="font-display text-base text-white bg-yellow-red-gradient py-[12px] sm:py-[18px] px-[20px] sm:px-[30px] sm:rounded-[14px] rounded-[5px]">
            Get Started
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden z-1 max-w-[1409px] mx-auto bg-[#1A1B1C] border-[1px] border-[#CD123D] rounded-[34px] pb-[50px] md:pb-[100px] py-[20px] md:py-[30px] xl:py-[60px] xl:px-[132px] md:px-[60px] px-[40px]">
        <div className="absolute top-0 left-0 w-full h-1/2 z-[1] bg-gradient-bg-welcome blur-[100px] opacity-[.7] rounded-[50%]"></div>

        <div className="relative z-[2]">
          <h1 className="text-center text-white font-display text-[30px] lg:text-[50px] font-black mb-4">
            Frame your NFT
          </h1>

          <p className="text-center text-[16px] lg:text-[22px] text-white mb-10 sm:mb-20">
            Breed your frame with your own NFT and create a new NFT to show
            around
          </p>

          <div className="flex items-center justify-between mb-[50px] md:mb-[120px]">
            <img
              src={nfFramImg}
              className="w-[40px] sm:w-[60px] md:w-[100px] xl:w-[127px]"
              alt=""
            />
            <img
              src={multipleArrows}
              className="w-[10px] sm:w-[20px] md:w-[34px] xl:w-[48px]"
              alt=""
            />
            <img
              src={nftFrameSvg}
              className="w-[50px] sm:w-[70px] md:w-[120px] xl:w-[195px]"
              alt=""
            />
            <img
              src={multipleArrows}
              className="w-[10px] sm:w-[20px] md:w-[34px] xl:w-[48px]"
              alt=""
            />
            <NFTInFrame
              frame={nftFrameSvg}
              img={nfFramImg}
              frameWidth="w-[50px] sm:w-[70px] md:w-[130px] xl:w-[195px]"
              imgWidth="w-[34px] sm:w-[48px] md:w-[90px] xl:w-[127px]"
            />
          </div>

          <div className="md:py-[36px] md:px-[40px] xl:px-[90px] md:border-2 md:border-[#CD123D]">
            <h1 className="text-center text-white font-display text-[26px] lg:text-[36px] font-bold mb-[25px] sm:mb-[50px] performance-inhancer">
              Your NFT
            </h1>

            <div className="flex items-center space-x-4 md:space-x-0 md:block">
              <button
                className="md:hidden w-[30px] h-[30px] rounded-full bg-white items-center justify-center cursor-pointer"
                ref={navigationPrevRef}
              >
                <MdKeyboardArrowLeft size={30} color="black" />
              </button>

              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                onSwiper={(swiper) => {
                  setTimeout(() => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  });
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 4,
                  },
                  500: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  200: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                }}
              >
                <SwiperSlide>
                  <NftCard img={yourNft1} />
                </SwiperSlide>
                <SwiperSlide>
                  <NftCard img={yourNft2} />
                </SwiperSlide>
                <SwiperSlide>
                  <NftCard img={yourNft3} />
                </SwiperSlide>
                <SwiperSlide>
                  <NftCard img={yourNft4} />
                </SwiperSlide>
                <SwiperSlide>
                  <NftCard img={yourNft1} />
                </SwiperSlide>
                <SwiperSlide>
                  <NftCard img={yourNft2} />
                </SwiperSlide>
                <SwiperSlide>
                  <NftCard img={yourNft3} />
                </SwiperSlide>
                <SwiperSlide>
                  <NftCard img={yourNft4} />
                </SwiperSlide>
              </Swiper>

              <button
                className="md:hidden w-[30px] h-[30px] rounded-full bg-white items-center justify-center cursor-pointer"
                ref={navigationNextRef}
              >
                <MdKeyboardArrowRight size={30} color="black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
