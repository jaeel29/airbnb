import Image from 'next/image';
import React from 'react';

const MediumCard = ({ src, title, button }: any) => {
  return (
    <div className='relative bg-gray-100 w-full  border-2'>
      <div className='relative w-full h-[700px] rounded-2xl overflow-hidden'>
        <Image src={src} layout='fill' objectFit='cover' alt='image' />
      </div>

      <div className='absolute top-[10%] left-[10%] flex flex-col gap-6 items-start '>
        <h5 className='text-5xl font-semibold whitespace-pre-line max-w-[60%] text-white leading-[58px]'>
          {title}
        </h5>

        <button className='bg-white px-5 py-3 rounded-lg text-sm font-medium transition-all duration-150 ease-out active:scale-90'>
          {button}
        </button>
      </div>
    </div>
  );
};

export default MediumCard;
