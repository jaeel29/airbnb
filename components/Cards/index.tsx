import Image from 'next/image';
import React from 'react';

const Cards = () => {
  return (
    <section className='w-full mt-24 flex'>
      <div className='max-h-[300px] flex flex-col gap-6 items-start pt-9'>
        <h2 className='text-[42px] font-semibold w-[70%] leading-[48px]'>Shop Airbnb gift cards</h2>
        <button className='bg-gray-900 text-white px-5 py-3 rounded-lg text-sm font-medium transition-all duration-150 ease-out active:scale-90'>
          Learn more
        </button>
      </div>

      <div className='flex-grow'>
        {/* <h2>Image</h2> */}
        <div className='relative w-[90%] h-[500px] ml-auto'>
          <Image src={'/Images/cards.webp'} layout='fill' objectFit='contain' alt='cards' />
        </div>
      </div>
    </section>
  );
};

export default Cards;
