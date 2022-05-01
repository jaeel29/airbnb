import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';

const SmallCard = ({ city }: any) => {
  return (
    <Link href={'/'} passHref>
      <div className='flex flex-col rounded-2xl w-[380px] overflow-hidden flex-shrink-0 bg-gray-100 cursor-pointer'>
        <div className='relative w-full h-[260px]'>
          <Image src={city.img} layout='fill' objectFit='cover' alt={city.location} />
        </div>

        <div className='p-6 pb-20'>
          <h5 className='font-semibold text-4xl mb-3 text-gray-900'>{city.location}</h5>
          <p className='text-xl font-normal text-gray-600'>{city.distance}</p>
        </div>
      </div>
    </Link>
  );
};

export default SmallCard;
