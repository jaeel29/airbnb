import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React, { FC } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { SearchResults } from '../../types';
import { priceTransfom } from '../../utils/price';

const ThinCard: FC<{ selected: SearchResults; setSelected: any }> = ({ selected, setSelected }) => {
  let formatedPrice, formatedMode;

  if (selected) {
    const [price, mode] = priceTransfom(selected.price);

    formatedPrice = price;
    formatedMode = mode;
  }

  return (
    <OutsideClickHandler onOutsideClick={() => setSelected('')}>
      <div className='absolute max-w-[270px] w-full rounded-xl overflow-hidden top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white shadow-lg'>
        <div className='relative'>
          <span className='absolute z-40 right-3 top-3 w-11 h-11 rounded-full bg-white/90 flex items-center justify-center cursor-pointer transition-all duration-150 ease-in-out active:scale-90'>
            <HeartIcon className='w-8 h-8' />
          </span>
          <div className='relative w-full h-[190px]'>
            <Image src={selected.img} layout='fill' objectFit='cover' alt={selected.title} />
          </div>

          <div className='p-6 flex flex-col gap-2'>
            <div className='flex gap-1 items-center'>
              <span>
                <StarIcon className='w-5 h-5 text-red-500' />
              </span>
              <span className='text-sm'>{selected.star}</span>
              <span className='text-sm text-gray-400'>(59 reviews)</span>
            </div>
            <div>
              <h5 className='text-base mb-2'>{selected.title}</h5>

              <div className='flex gap-1 items-center'>
                <span className='text-lg font-semibold text-black'>{formatedPrice}</span>
                <span className='text-base text-gray-400'>{formatedMode}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default ThinCard;
