/* eslint-disable react/jsx-no-comment-textnodes */
"use client"
import React, { useEffect } from 'react';
import { HeroText } from './HeroProps';

import Background from '@/public/Polygon Luminary.svg'

interface HeroProps {
  heading: string;
  heading2?: string;
  heading3?: string;
  message?: string;
}
const Hero: React.FC<HeroProps> = ({
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

  const modifiedHeroText: HeroText[] = HeroText.map((item) => ({
    ...item,
    heading,
    heading2,
    heading3,
  }));

  return (
    <div className='h-screen mx-auto max-w-7xl px-4 backgroundImg'>
      <div className='grid grid-cols-3 lg:grid-cols-1 translate-y-36 sm:translate-y-32 w-full'>
        {HeroText.map((item, index) => (
            <div key={item.title} 
              className='
                font-semibold 
                text-center 
                text-8xl
                sm:text-7xl
              '>
              {index === 0 && 
                <span className=''>{heading}</span>
              }
              {index === 1 && 
                <span className=''>{heading2}</span>
              }
              {index === 2 && 
                <span className=''>{heading3}</span>
              }
            </div>
          ))}
      </div>
      <div className='col-span-3 text-center mt-44 leading-10'>
          <span>Elevate Your Digital Presence with DigiSpark: Empowering Businesses through Expert Website Design, Development, and Seamless Deployment.</span>
          <br />
          <span className=""><code>/* we also develop personal websites */</code></span>
      </div>
    </div>
  );
};

export default Hero;      