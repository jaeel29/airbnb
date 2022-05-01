import React from 'react';
import MediumCard from '../MediumCard';

const Discover = () => {
  return (
    <section className='w-full pt-24'>
      <h2 className='text-[42px] font-semibold mb-12'>Discover Airbnb Experiences</h2>

      <div className='flex gap-6'>
        <MediumCard
          src='/Images/airbnb-image-1.png'
          title='Things to do on your trip'
          button='Experiences'
        />
        <MediumCard
          src='https://www.guestready.com/blog/wp-content/uploads/2019/11/Airbnb-Plus-1.jpg'
          title='Things to do from home'
          button='Online Experiences'
        />
      </div>
    </section>
  );
};

export default Discover;
