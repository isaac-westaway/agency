"use client";


import Image from "next/image";
import { testimonialData } from "./TestimonialData";
import { useEffect, useRef, useState } from "react";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { useSwipeable } from "react-swipeable";

const Testimonials = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const slideNumberRef = useRef(slideNumber);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [grabStartX, setGrabStartX] = useState(0);

  const goForward = () => {
    setSlideNumber(
      (prevSlideNumber) => (prevSlideNumber + 1) % testimonialData.length
    );
  };

  const goBackward = () => {
    setSlideNumber((prevSlideNumber) =>
      prevSlideNumber === 0 ? testimonialData.length - 1 : prevSlideNumber - 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => goForward(),
    onSwipedRight: () => goBackward(),
  });

  useEffect(() => {
    slideNumberRef.current = slideNumber;
  }, [slideNumber]);

  const shimmer = (w: number, h: number) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#000000" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;

  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  return (
    <div className="relative w-95 mx-auto overflow-hidden" {...swipeHandlers}>
      <div
        className="flex transition transform duration-300 w-full"
        style={{
          transform: `translateX(-${
            slideNumber * (100 / testimonialData.length)
          }%)`,
          width: `${testimonialData.length * 100}%`,
        }}
      >
        
        {testimonialData.map((testimonial, index) => (
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
            <div className="flex flex-col items-center mb-5">
              <Image
                className="mx-auto mt-5 prevent-select"
                src={testimonial.logo}
                height="200"
                width="200"
                alt=""
                placeholder="blur"
                loading="lazy"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(700, 475)
                )}`}
              />
              <div className="text-center text-xl sm:text-sm leading-8 text-white sm:leading-5 h-full">
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
                  placeholder="blur"
                  loading="lazy"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(700, 475)
                  )}`}
                />
                <div className="mt-5 flex items-center justify-center space-x-3 text-base mb-1">
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
        ))}
      </div>
      {/* Arrow buttons */}
      <button
        className="absolute top-1/2 transform -translate-y-95 sm:-translate-y-1/10"
        onClick={goBackward}
        aria-label="Slider left button"
      >
        <FiChevronLeft className="w-6 h-6 text-white items-center" />
      </button>
      <button
        className="absolute top-1/2 right-0 -translate-y-95 transform sm:-translate-y-1/10"
        onClick={goForward}
        aria-label="Slider right button"
      >
        <FiChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default Testimonials;
