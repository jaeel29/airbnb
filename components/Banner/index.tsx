import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className='flex flex-col items-center relative w-full mb-12'>
      <div className='relative w-[100%] h-[700px] rounded-2xl overflow-hidden'>
        <Image
          src={'/Images/Bg-image.png'}
          layout='fill'
          objectFit='cover'
          objectPosition={'center'}
          alt='banner photo'
        />
      </div>

      <div className='flex flex-col items-center gap-6 absolute bottom-[10%]'>
        <h1 className='text-white text-5xl'>Let your curiosity do the booking</h1>
        <button className='px-7 py-3 text-lg font-semibold bg-white shadow-sm rounded-full transition-all duration-150 ease-out hover:shadow-2xl active:scale-90 active:bg-gray-200'>
          <span className='text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-500'>
            I{"'"}m flexible
          </span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
