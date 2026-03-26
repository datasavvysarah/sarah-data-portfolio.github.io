"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Keyboard } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

import { HeroSlide } from "./HeroSlide";
import { TrackSelectorSlide } from "./TrackSelectorSlide";
import { ProjectGridSlide } from "./ProjectGridSlide";
import { BentoSlide } from "./BentoSlide";

export function SliderContainer() {
  return (
    <div className="w-full h-full bg-[#212428] overflow-hidden relative">
      
      <Swiper
        direction={"horizontal"}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            direction: "vertical",
          },
          768: {
            direction: "horizontal",
          }
        }}
        modules={[Mousewheel, Pagination, Keyboard]}
        className="w-full h-full"
      >
        {/* Slide 1: Hero */}
        <SwiperSlide>
          <HeroSlide />
        </SwiperSlide>

        {/* Slide 2: Track Selector / What I Do */}
        <SwiperSlide>
          <TrackSelectorSlide />
        </SwiperSlide>

        {/* Slide 3: My Portfolio Grid */}
        <SwiperSlide>
          <ProjectGridSlide />
        </SwiperSlide>

        {/* Slide 4: CV & Links Hub */}
        <SwiperSlide>
           <BentoSlide />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
