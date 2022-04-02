import React from "react";
import nftImg from "assets/images/nftImg.png";
import nftFrame from "assets/images/nftFrame-2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, EffectCoverflow, Autoplay } from "swiper";
SwiperCore.use([Navigation, EffectCoverflow, Autoplay]);

function NFTS() {
  return (
    <div>
      {/* SLIDER */}
      <Swiper
        slidesPerView={4}
        spaceBetween={80}
        effect={"coverflow"}
        centeredSlides={true}
        // autoplay={{
        //   delay: 1500,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 2,
        }}
        breakpoints={{
          1000: {
            slidesPerView: 4,
          },
          760: {
            slidesPerView: 3,
          },
          500: {
            slidesPerView: 2,
          },
          200: {
            slidesPerView: 1.5,
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide>
          <img src={nftImg} className="w-full" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={nftFrame} className="w-full" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={nftFrame} className="w-full" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={nftFrame} className="w-full" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={nftFrame} className="w-full" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={nftFrame} className="w-full" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default NFTS;
