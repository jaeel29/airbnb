import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SearchIcon } from '@heroicons/react/outline';

const Header = () => {
  return (
    <header className='h-20 border-b border-gray-100 flex items-center  px-6 sticky top-0'>
      {/* Logo */}
      <div className='flex-grow'>
        <Link href={'/'} passHref>
          <div className='relative w-[100px] h-[50px] cursor-pointer'>
            <Image
              src={'http://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png'}
              layout='fill'
              objectFit='contain'
              objectPosition='left'
              alt='Airbnb Logo'
              priority
            />
          </div>
        </Link>
      </div>

      {/* Search */}
      {/* <div className='flex justify-center max-w-sm w-full'>
        <div className='flex items-center border border-gray-200 pl-4 h-12 rounded-full w-5/6'>
          <input
            type='text'
            placeholder='Start your search'
            className='outline-none text-sm text-gray-900 flex-grow font-medium bg-transparent'
          />

          <div className='hidden sm:inline-flex h-8 w-8 m-2 items-center justify-center bg-red-400 rounded-full cursor-pointer'>
            <SearchIcon className='w-4 h-4 text-white' />
          </div>
        </div>
      </div> */}

      <div className='flex justify-center max-w-sm w-full'>
        <button className='flex items-center border border-gray-200 pl-4 h-12 rounded-full w-5/6 shadow-md'>
          <div className='flex text-sm text-gray-900 font-medium flex-grow'>Start your search</div>

          <div className='hidden sm:inline-flex h-8 w-8 m-2 items-center justify-center bg-red-400 rounded-full cursor-pointer'>
            <SearchIcon className='w-4 h-4 text-white' />
          </div>
        </button>
      </div>

      {/* Right */}
      <div className='flex-grow flex'>
        <h1 className='ml-auto'>Right</h1>
      </div>
    </header>
  );
};

export default Header;
