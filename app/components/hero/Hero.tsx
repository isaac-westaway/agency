"use client"
import React, { useEffect } from 'react';
import FramerReveal from '../utils/Reveal';

interface Hero {
    heading: string,
    heading2?: string,
    heading3?: string,
    message?: string,
}

const Hero: React.FC<Hero> = ({
    heading,
    heading2,
    heading3,
    message,
}) => {
  useEffect(() => {
    const text = document.getElementById('animated-text');

    const timeoutId = setTimeout(() => {
      if (text) {
        text.style.opacity = '1';
        text.style.transform = 'translateY(0)';
        text.style.animation = 'colorAnimation 5s infinite alternate';
      }
    }, 500); // Adjust the delay as needed

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className='flex items-center text-center justify-center h-screen w-full'>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-[#FFFFF7] z-[2] mt-[-40vh] sm:mt-[-5vw] lg:mt-[-10vh] xl:mt-[-5vh] 2xl:mt-[-5vh] text-7xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl '>
        <FramerReveal>
          <span className='font-semibold'>{heading}</span>
          <span className='font-semibold'>{heading2}</span>
          <span className='font-semibold'>{heading3}</span>
        </FramerReveal>
        <FramerReveal>
          <h2 className="text-xl pt-9 text-neutral-500">{message}</h2>
        </FramerReveal>
        <FramerReveal>
          <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-5 ml-5 text-base font-medium text-center bg-white text-black rounded-lg border w-[240px] sm:w-[300px] hover:bg-zinc-300 hover:transition hover:duration-250 hover:ease-in-out hover:border-zinc-300">
                  Launch your website
            </a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-5 ml-5 text-base font-medium text-center text-white rounded-lg w-[240px] sm:w-[300px] border">
                  Get in touch
                  <svg className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </FramerReveal> 
      </div>
    </div>
  );
};

export default Hero;