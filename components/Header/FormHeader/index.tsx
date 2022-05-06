import {
  CalendarIcon,
  LocationMarkerIcon,
  SearchIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import React from 'react';
import DatePicker from 'react-datepicker';
import OutsideClickHandler from 'react-outside-click-handler';

const FormHeader = ({
  location,
  setLocation,
  startDate,
  handleChangeStart,
  endDate,
  handleChangeEnd,
  checkIn,
  toggleCheckIn,
  checkOut,
  toggleCheckOut,
  submiSearchtHandler,
}: any) => {
  return (
    // <OutsideClickHandler onOutsideClick={toggleSearchIsOpen}>
    <div className='absolute left-0 top-[80px] w-full py-8 pb-9 shadow-lg bg-white'>
      <form onSubmit={submiSearchtHandler}>
        <div className='w-[1200px] h-20 mx-auto flex bg-white rounded-full ring-1 ring-gray-100'>
          <div className='flex-1 cursor-pointer'>
            <div className='px-5 h-full rounded-full flex items-center gap-4 transition-all duration-300 ease-out hover:bg-gray-100 focus-within:shadow-lg'>
              <div className='flex gap-4'>
                <div className='pt-1'>
                  <LocationMarkerIcon className='w-6 h-6 text-gray-400' />
                </div>

                <div>
                  <p className='text-xl font-semibold'>Location</p>
                  <input
                    className='outline-none justify-center bg-transparent text-sm leading-[18px] cursor-pointer'
                    type='text'
                    placeholder='Where are you going?'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='border-r border-gray-200 h-9 self-center ' />

          <div className='flex-grow-[2] basis-[0%]'>
            <div className='flex h-full'>
              <div
                className={`px-5 relative rounded-full flex-1 flex items-center gap-4 cursor-pointer transition-all duration-300 ease-out hover:bg-gray-100 focus-within:shadow-lg ${
                  checkIn && 'shadow-lg hover:bg-white'
                }`}
                onClick={toggleCheckIn}
              >
                <div className='flex gap-4'>
                  <div className='pt-1'>
                    <CalendarIcon className='w-6 h-6 text-gray-400' />
                  </div>

                  <div>
                    <p className='text-xl font-semibold'>Check in</p>
                    <p className='text-base text-gray-400'>Add date</p>
                  </div>
                </div>

                {checkIn && (
                  <div className='absolute top-[100%] mt-3 left-0'>
                    <OutsideClickHandler onOutsideClick={toggleCheckIn}>
                      <div className='py-5 px-3 shadow-lg rounded-2xl border-2 border-gray-100 bg-white'>
                        <DatePicker
                          selected={startDate}
                          onChange={handleChangeStart}
                          selectsStart
                          startDate={startDate}
                          endDate={endDate}
                          inline
                        />
                      </div>
                    </OutsideClickHandler>
                  </div>
                )}
              </div>

              <div className='border-r border-gray-200 h-9 self-center ' />

              <div
                className={`px-5 relative rounded-full flex-1 flex items-center gap-4 cursor-pointer transition-all duration-300 ease-out hover:bg-gray-100 focus-within:shadow-lg ${
                  checkOut && 'shadow-lg hover:bg-white'
                }`}
                onClick={toggleCheckOut}
              >
                <div className='flex gap-4'>
                  <div className='pt-1'>
                    <CalendarIcon className='w-6 h-6 text-gray-400' />
                  </div>

                  <div>
                    <p className='text-xl font-semibold'>Check out</p>
                    <p className='text-base text-gray-400'>Add date</p>
                  </div>
                </div>

                {checkOut && (
                  <div className='absolute top-[100%] mt-3 left-0'>
                    <OutsideClickHandler onOutsideClick={toggleCheckOut}>
                      <div className='py-5 px-3 shadow-lg rounded-2xl border-2 border-gray-100 bg-white'>
                        <DatePicker
                          selected={endDate}
                          onChange={handleChangeEnd}
                          selectsEnd
                          startDate={startDate}
                          endDate={endDate}
                          minDate={startDate}
                          inline
                        />
                      </div>
                    </OutsideClickHandler>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className='border-r border-gray-200 h-9 self-center ' />

          <div className='flex-1 cursor-pointer'>
            <div className='px-5 pr-4 h-full flex items-center justify-between transition-all duration-300 ease-out hover:bg-gray-100 focus-within:shadow-lg rounded-full '>
              <div className='flex gap-4'>
                <div className='pt-1'>
                  <UserGroupIcon className='w-6 h-6 text-gray-400' />
                </div>

                <div>
                  <p className='text-xl font-semibold'>Guests</p>
                  <p className='text-base text-gray-400'>Add guests</p>
                </div>
              </div>

              <div>
                <button
                  type='submit'
                  className='h-12 w-12 flex items-center justify-center bg-red-400 rounded-full text-white text-base transition-all duration-300 ease-out hover:bg-red-600'
                >
                  <SearchIcon className='w-7 h-7 text-white' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    // </OutsideClickHandler>
  );
};

export default FormHeader;
