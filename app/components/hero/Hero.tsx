import React from 'react';

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
  return (
    <div className='flex items-center text-center justify-center h-screen w-full'>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-[#FFFFF7] z-[2] mt-[-20rem] text-8xl'>
        <span className='font-bold'>{heading}</span>
        <span className='font-bold'>{heading2}</span>
        <span className='font-bold'>{heading3}</span>
      </div>
    </div>
  );
};

export default Hero;