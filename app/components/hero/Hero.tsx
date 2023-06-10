import React from 'react';

interface Hero {
    heading: string,
    message: string,
    action: string,
}

const Hero: React.FC<Hero> = ({
    heading,
    message,
    action
}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img z-50 
    sm:w-full w-10/12
    '>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-[#FFFFF7] z-[2] mt-[-10rem] userSelect'>
        <h2 className='text-5xl font-bold'>{heading}</h2>
        <p className='py-5 text-xl'>{message}</p>
        <button className='px-8 py-2 border'>{action}</button>
      </div>
    </div>
  );
};

export default Hero;