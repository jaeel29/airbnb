import React from 'react';
import SmallCard from '../SmallCard';

const Cities = ({ cities }: any) => {
  return (
    <section className='w-full pt-24'>
      <h2 className='text-[42px] font-semibold mb-12'>Inspiration for your next trip</h2>

      <div className='flex gap-5 w-full overflow-auto scrollbar-hide'>
        {cities.map((city: any) => (
          <SmallCard key={city.location} city={city} />
        ))}
      </div>
    </section>
  );
};

export default Cities;
