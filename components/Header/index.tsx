import React, { FormEvent, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, GlobeIcon, MenuIcon, SearchIcon, XIcon } from '@heroicons/react/outline';
import Avatar from '../UI/Avatar';
import OutsideClickHandler from 'react-outside-click-handler';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Header.module.css';

const Header = () => {
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const toggleSearchIsOpen = () => setSearchIsOpen((prev) => !prev);

  const [location, setLocation] = useState('');

  const [checkIn, setCheckIn] = useState(false);
  const toggleCheckIn = () => setCheckIn((prev) => !prev);

  const [checkOut, setCheckOut] = useState(false);
  const toggleCheckOut = () => setCheckOut((prev) => !prev);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectRange = {
    startDate,
    endDate,
    key: 'Selection',
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    console.log(location);
    console.log(selectRange);
  };

  return (
    <header className='h-20 border-b bg-white border-gray-100 flex items-center  px-6 sticky top-0 z-50'>
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
        <OutsideClickHandler onOutsideClick={() => setSearchIsOpen(false)}>
          <div className='absolute left-0 top-[80px] w-full py-8 shadow-lg bg-white'>
            <form onSubmit={submitHandler} className='flex items-center justify-center gap-7'>
              <input
                className='outline-none w-[300px] py-3 rounded-full shadow-lg flex flex-col justify-center px-4 pl-6 cursor-pointer'
                type='text'
                placeholder='Where are you going?'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />

              <div className='relative'>
                <div
                  className='w-[300px] py-3 rounded-full shadow-lg flex gap-4 px-4 pl-6 cursor-pointer border border-gray-100'
                  onClick={toggleCheckIn}
                >
                  <div className='pt-1'>
                    <CalendarIcon className='w-5 h-5 text-gray-400' />
                  </div>

                  <div>
                    <p className='text-xl font-semibold'>Check in</p>
                    <p className='text-base text-gray-400'>Add date</p>
                  </div>
                </div>

                {checkIn && (
                  <div className='absolute top-[calc(100% + 10px)] left-0'>
                    <OutsideClickHandler onOutsideClick={toggleCheckIn}>
                      <DatePicker
                        selected={startDate}
                        onChange={(date: any) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        inline
                      />
                    </OutsideClickHandler>
                  </div>
                )}
              </div>

              <div className='relative'>
                <div
                  className='w-[300px] py-3 rounded-full shadow-lg flex gap-4 px-4 pl-6 cursor-pointer border border-gray-100'
                  onClick={toggleCheckOut}
                >
                  <div className='pt-1'>
                    <CalendarIcon className='w-5 h-5 text-gray-400' />
                  </div>

                  <div>
                    <p className='text-xl font-semibold'>Check out</p>
                    <p className='text-base text-gray-400'>Add date</p>
                  </div>
                </div>

                {checkOut && (
                  <div className='absolute top-[calc(100% + 10px)] left-0'>
                    <OutsideClickHandler onOutsideClick={toggleCheckOut}>
                      <DatePicker
                        selected={endDate}
                        onChange={(date: any) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        inline
                      />
                    </OutsideClickHandler>
                  </div>
                )}
              </div>

              <button type='submit' hidden>
                Submit
              </button>
            </form>
          </div>
        </OutsideClickHandler>
      )}
    </header>
  );
};

export default Header;
