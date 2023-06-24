// import Swiper core and required modules
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/src/app/styles/swiper.css"

import { testimonialData } from "./TestimonialData";

const Testimonials = () => {
  return (
    <Swiper
      className="border border-dark-50 rounded-2xl"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
    >
      {testimonialData.map((testimonial, index) => (
        <SwiperSlide key={index} className="">
          <div key={index} className="w-full sm:w-full relative">
            <div className="absolute top-4 sm:top-1/10 sm:left-2 left-96">
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.915 86.6049C17.765 81.1349 15 74.9999 15 65.0549C15 47.555 27.285 31.87 45.15 24.115L49.615 31.005C32.94 40.025 29.68 51.73 28.38 59.1099C31.065 57.7199 34.58 57.2349 38.025 57.5549C47.045 58.3899 54.155 65.7949 54.155 74.9999C54.155 79.6412 52.3113 84.0924 49.0294 87.3743C45.7475 90.6562 41.2963 92.4999 36.655 92.4999C31.29 92.4999 26.16 90.0499 22.915 86.6049ZM72.915 86.6049C67.765 81.1349 65 74.9999 65 65.0549C65 47.555 77.285 31.87 95.15 24.115L99.615 31.005C82.94 40.025 79.68 51.73 78.38 59.1099C81.065 57.7199 84.58 57.2349 88.025 57.5549C97.045 58.3899 104.155 65.7949 104.155 74.9999C104.155 79.6412 102.311 84.0924 99.0294 87.3743C95.7475 90.6562 91.2963 92.4999 86.655 92.4999C81.29 92.4999 76.16 90.0499 72.915 86.6049Z"
                  fill="white"
                  fill-opacity="0.08"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col items-center">
              <Image
                className="mx-auto mt-8 prevent-select"
                src={testimonial.logo}
                height="200"
                width="200"
                alt=""
              />
              <div className="text-center text-xl sm:text-sm leading-8 text-white sm:leading-5 h-full px-4">
                <span className="text-center overflow-clip h-20 flex-1 flex items-center justify-center p-1 prevent-select">
                  {testimonial.quote}
                </span>
              </div>
              <div className="mt-5 prevent-select">
                <Image
                  height="100"
                  width="100"
                  className="mx-auto h-10 w-10 rounded-full prevent-select"
                  src={testimonial.profile}
                  alt=""
                />
                <div className="mt-5 flex items-center justify-center space-x-3 text-base mb-8">
                  <span className="sm:text-sm sm:text-center text-white prevent-select">
                    {testimonial.name}
                  </span>
                  <svg
                    viewBox="0 0 2 2"
                    width={3}
                    height={3}
                    aria-hidden="true"
                    className="fill-white text-center"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <span className="font-light text-white sm:text-sm sm:text-center prevent-select">
                    {testimonial.position}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonials;
