import Image from 'next/image';
import React from 'react';

const Banner2 = () => {
  return (
    <div className='flex flex-col items-center w-full relative'>
      <div className='relative w-[100%] h-[700px] rounded-2xl overflow-hidden'>
        <Image
          src={
            'https://static.onecms.io/wp-content/uploads/sites/28/2020/07/15/airbnb-rental-host-guests-KINDNESSCARD0720.jpg'
          }
          layout='fill'
          objectFit='cover'
          objectPosition={'center'}
          alt='banner photo'
        />
      </div>

      <div className='flex flex-col justify-between gap-6 absolute left-[7%] items-start h-full py-20'>
        <h1 className='text-white text-[80px] max-w-[550px] w-full] leading-[86px] font-semibold'>
          Questions about hosting?
        </h1>
        <button className='px-7 py-3 text-lg font-semibold bg-white shadow-sm rounded-lg transition-all duration-150 ease-out hover:shadow-2xl active:scale-90 active:bg-gray-200'>
          <span className='text-gray-900'>Ask a Superhost</span>
        </button>
      </div>
    </div>
  );
};

export default Banner2;
