import Image from 'next/image';
import Link from 'next/link';
import React, { FC, Fragment } from 'react';

interface ColorProps {
  img: string;
  location: string;
  distance: string;
  color: string;
}

const SmallCard: FC<{ city: ColorProps }> = ({ city }) => {
  console.log(city);

  return (
    <Link href={'/'} passHref>
      <div
        className={`flex flex-col rounded-2xl w-[380px] overflow-hidden flex-shrink-0 cursor-pointer`}
      >
        <div className='relative w-full h-[260px]'>
          <Image src={city.img} layout='fill' objectFit='cover' alt={city.location} priority />
        </div>

        <div className={`p-6 pb-20 bg-[#cc2d4a] bg-[${city.color}]`}>
          <h5 className='font-semibold text-4xl mb-3 text-white'>{city.location}</h5>
          <p className='text-xl font-light text-gray-100'>{city.distance}</p>
        </div>
      </div>
    </Link>
  );
};

export default SmallCard;
