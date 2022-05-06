import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react';
import { SearchResults } from '../../types';

const InfoCard = ({ item }: { item: SearchResults }) => {
  const [price, mode] = item.price.split(' / ');

  return (
    <div className='cursor-pointer'>
      <div className='flex'>
        <div className='relative w-[300px] h-[200px] rounded-2xl overflow-hidden'>
          <Image src={item.img} layout='fill' objectFit='cover' alt={item.title} priority />
        </div>

        <div className='ml-4 flex flex-col gap-4 flex-1'>
          <div className='flex'>
            <div className='mr-4 flex-1'>
              <span className='text-sm text-gray-400 font-light mb-1'>{item.location}</span>
              <h5 className='text-lg text-gray-800'>{item.title}</h5>
            </div>

            <button>
              <span>
                <HeartIcon className='w-6 h-6 text-gray-900' />
              </span>
            </button>
          </div>

          <div className='h-[1.5px] bg-gray-200 w-8' />

          <p className='text-sm text-gray-400 w-[70%] font-light'>{item.description}</p>

          <div className='flex'>
            <div className='flex items-center gap-1 self-start flex-1'>
              <span>
                <StarIcon className='w-[14px] h-[14px] text-red-500' />
              </span>
              <span className='text-sm'>{item.star}</span>
              <span className='text-sm text-gray-400'>(59 reviews)</span>
            </div>

            <div className='flex flex-col'>
              <div className='flex gap-1'>
                <span className='text-lg text-gray-400 mr-1'>$50</span>
                <span className='text-lg font-semibold'>{price}</span>
                <span className='text-lg text-gray-600'>{mode}</span>
              </div>

              <div className='self-end'>
                <span className='text-base text-gray-400'>{item.total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[1px] bg-gray-200 w-full mt-6 mb-6' />
    </div>
  );
};

export default InfoCard;
