"use client";

import Image from "next/image";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "@/src/app/styles/swiper.css";

const CaseStudies = () => {
  return (
    <div className="border border-dark-50 rounded-2xl h-96">
      <Swiper
        className="h-96"
        direction={"vertical"}
        slidesPerView={1}
        grabCursor={true}
        loop={true}
        autoHeight={true}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Mousewheel, Pagination]}
      >
        <SwiperSlide className="h-96">
          <div className="mx-4 h-96">
            <Image
              src="/images/swiper/card-1.webp"
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
        <div className="h-full mx-4">
            <Image
              src="/images/swiper/card-2.webp"
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">Slide 1</SwiperSlide>
        <SwiperSlide>Bob</SwiperSlide>
        <SwiperSlide className="">Slide 1</SwiperSlide>
        <SwiperSlide>Bob</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CaseStudies;
