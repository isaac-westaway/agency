"use client"
import Image from 'next/image'
import { testimonialData } from './TestimonialData';
import { useEffect, useRef, useState } from 'react';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { useSwipeable } from 'react-swipeable';

const Testimonials = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const slideNumberRef = useRef(slideNumber);

  const goForward = () => {
    setSlideNumber((prevSlideNumber) => (prevSlideNumber + 1) % testimonialData.length);
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

    return (
      <div className="relative w-5/6 mx-auto overflow-hidden" {...swipeHandlers}>
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${slideNumber * (100 / testimonialData.length)}%)`,
            width: `${testimonialData.length * 100}%`,
          }}
        >
          {testimonialData.map((testimonial, index) => (
            <div key={index} className="w-full">
              {/* Testimonial content */}
              <div className="flex flex-col items-center mt-5">
                <Image
                  className="mx-auto h-12 mb-5"
                  src={testimonial.logo}
                  height="200"
                  width="200"
                  alt=""
                />
                <div className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                  <p>{testimonial.quote}</p>
                </div>
                <div className="mt-5">
                  <Image
                    height="100"
                    width="100"
                    className="mx-auto h-10 w-10 rounded-full"
                    src={testimonial.profile}
                    alt=""
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base mb-5">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-white">
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="font-light text-white">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Arrow buttons */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2"
          onClick={goBackward}
        >
          <FiChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2"
          onClick={goForward}
        >
          <FiChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
  );
};

export default Testimonials;