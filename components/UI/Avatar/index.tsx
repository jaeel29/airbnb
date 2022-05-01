import Image from 'next/image';
import React from 'react';

const Avatar = ({ url }: any) => {
  return (
    <div className='m-1'>
      <div className='relative h-8 w-8 rounded-full overflow-hidden'>
        <Image src={url} layout='fill' objectFit='contain' alt='avatar' />
      </div>
    </div>
  );
};

export default Avatar;
