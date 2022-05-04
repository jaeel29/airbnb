import React, { FormEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDownIcon, GlobeIcon, MenuIcon, SearchIcon, XIcon } from '@heroicons/react/outline';
import Avatar from '../UI/Avatar';

import 'react-datepicker/dist/react-datepicker.css';
import './Header.module.css';
import FormHeader from './FormHeader';

const tagsList = [
  { title: 'Price', menu: ['item 1', 'item 2'] },
  { title: 'Type of place', menu: ['item 1', 'item 2'] },
  { title: 'Pool' },
  { title: 'Wifi' },
  { title: 'Air conditioning' },
  { title: 'Kitchen' },
  { title: 'Breakfast' },
  { title: 'Washer' },
  { title: 'Free parking' },
  { title: 'Dedicated workspace' },
  { title: 'Dryer' },
];

const Header = ({ tags }: { tags?: boolean }) => {
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const toggleSearchIsOpen = () => setSearchIsOpen((prev) => !prev);

  const [location, setLocation] = useState('');

  const [checkIn, setCheckIn] = useState(false);
  const toggleCheckIn = () => setCheckIn((prev) => !prev);

  const [checkOut, setCheckOut] = useState(false);
  const toggleCheckOut = () => setCheckOut((prev) => !prev);

  const [startDate, setStartDate] = useState<any>(new Date());
  const handleChangeStart = (date: any) => {
    setStartDate(date);
    toggleCheckIn();
  };

  const [endDate, setEndDate] = useState<any>(new Date());
  const handleChangeEnd = (date: any) => {
    setEndDate(date);
    toggleCheckOut();
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    console.log(location);
    console.log(startDate);
    console.log(endDate);
  };

  return (
    <>
      <header
        className={`h-20 bg-white flex items-center  px-6 sticky top-0 z-50 ${
          !tags && 'border-b border-gray-100'
        }`}
      >
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

        {!searchIsOpen ? (
          <div className='flex justify-center max-w-sm w-full' onClick={toggleSearchIsOpen}>
            <button className='flex items-center border border-gray-200 pl-4 h-12 rounded-full w-5/6 shadow-md'>
              <div className='flex text-sm text-gray-900 font-medium flex-grow'>
                Start your search
              </div>

              <div className='hidden sm:inline-flex h-8 w-8 m-2 items-center justify-center bg-red-400 rounded-full cursor-pointer'>
                <SearchIcon className='w-4 h-4 text-white' />
              </div>
            </button>
          </div>
        ) : (
          <div className='hidden sm:inline-flex h-8 w-8 m-2 items-center justify-center bg-red-400 rounded-full cursor-pointer'>
            <XIcon className='w-4 h-4 text-white' />
          </div>
        )}

        {/* Right */}
        <div className='flex-grow flex gap-3 h-full items-center justify-end'>
          <Link href='/'>
            <a className='hidden md:flex items-center h-11 px-4 rounded-full text-sm font-medium transition-all duration-150 ease-out hover:bg-gray-100 '>
              Swith to hosting
            </a>
          </Link>

          <Link href={'/'} passHref>
            <div className='h-11 w-11 flex items-center justify-center rounded-full transition-all duration-150 ease-out cursor-pointer hover:bg-gray-100'>
              <GlobeIcon className='w-5 h-5' />
            </div>
          </Link>

          <div className='flex gap-2 items-center border-2 border-gray-200 rounded-full pl-2 h-11 bg-white cursor-pointer hover:shadow-md'>
            <MenuIcon className='w-4 h-4' />

            <Avatar
              url={'https://mir-s3-cdn-cf.behance.net/user/276/ffbf73422830485.604fd81f73416.jpg'}
            />
          </div>
        </div>

        {searchIsOpen && (
          <FormHeader
            toggleSearchIsOpen={toggleSearchIsOpen}
            location={location}
            setLocation={setLocation}
            startDate={startDate}
            handleChangeStart={handleChangeStart}
            endDate={endDate}
            handleChangeEnd={handleChangeEnd}
            checkIn={checkIn}
            toggleCheckIn={toggleCheckIn}
            checkOut={checkOut}
            toggleCheckOut={toggleCheckOut}
            submitHandler={submitHandler}
          />
        )}
      </header>

      {tags && (
        <div className='w-full bg-white flex items-center px-6 h-20 border-b border-gray-100 sticky top-[80px]'>
          {tagsList.map((tag) => (
            <>
              {tag.menu ? (
                <div key={Math.random()} className=''>
                  <div className='inline-block whitespace-nowrap pr-2 py-1 w-full'>
                    <button className='relative px-4 py-2 rounded-full cursor-pointer text-center border border-[##dddddd] outline-none bg-white transition-all duration-150 ease-out active:border-gray-900 active:scale-95'>
                      <span className='inline-block mr-2 text-sm font-normal text-gray-800 leading-4'>
                        {tag.title}
                      </span>
                      <span className='inline-block align-middle'>
                        <ChevronDownIcon className='h-4 w-4' />
                      </span>
                    </button>
                  </div>
                </div>
              ) : (
                <div key={Math.random()} className=''>
                  <div className='inline-block whitespace-nowrap pr-2 py-1 w-full'>
                    {/* after:content-[""] after:absolute after:left-0 after:top-0 after:border-2 after:border-red-500 after:w-full after:h-full after:rounded-full */}
                    <button className='relative px-4 py-2 rounded-full cursor-pointer text-center border border-[##dddddd] outline-none bg-white transition-all duration-150 ease-out active:border-gray-900 active:scale-95'>
                      <span className='text-sm font-normal text-gray-800 leading-4'>
                        {tag.title}
                      </span>
                    </button>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
