import React, { useRef } from "react";
import TeamCard from "./TeamCard";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

import teamImg1 from "assets/images/teamImg1.png";
import teamImg2 from "assets/images/teamImg2.png";
import teamImg3 from "assets/images/teamImg3.png";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

function Team() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div>
      <div className="container-2">
        <h1 className="text-center text-white font-display text-[30px] lg:text-[50px] font-black mb-[30px] lg:mb-[60px]">
          Team
        </h1>

        <div className="flex items-center  space-x-4 lg:space-x-0">
          <button
            className="lg:hidden w-[30px] h-[30px] rounded-full bg-white items-center justify-center cursor-pointer"
            ref={navigationPrevRef}
          >
            <MdKeyboardArrowLeft size={30} color="black" />
          </button>

          <Swiper
            slidesPerView={3}
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
              1024: {
                slidesPerView: 3,
              },
              720: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              200: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
            className="w-full"
          >
            <SwiperSlide>
              <TeamCard
                title="Tufayel Khan"
                designation="The CEO"
                img={teamImg1}
                links={[
                  {
                    icon: <FaFacebookF color="black" size={15} />,
                    link: "#",
                    target: "_blank",
                  },
                  {
                    icon: <FaTwitter color="black" size={15} />,
                    link: "#",
                    target: "_blank",
                  },
                ]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard
                title="NIROS"
                designation="Creative Director"
                img={teamImg2}
                links={[
                  {
                    icon: <FaFacebookF color="black" size={15} />,
                    link: "#",
                    target: "_blank",
                  },
                  {
                    icon: <FaTwitter color="black" size={15} />,
                    link: "#",
                    target: "_blank",
                  },
                ]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard
                title="Tufayel Khan"
                designation="The CEO"
                img={teamImg3}
                links={[
                  {
                    icon: <FaFacebookF color="black" size={15} />,
                    link: "#",
                    target: "_blank",
                  },
                  {
                    icon: <FaTwitter color="black" size={15} />,
                    link: "#",
                    target: "_blank",
                  },
                ]}
              />
            </SwiperSlide>
          </Swiper>

          <button
            className="lg:hidden w-[30px] h-[30px] rounded-full bg-white items-center justify-center cursor-pointer"
            ref={navigationNextRef}
          >
            <MdKeyboardArrowRight size={30} color="black" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Team;
