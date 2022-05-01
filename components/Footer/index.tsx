import React from 'react';

const footerNav = [
  {
    title: 'Support',
    items: [
      'Help Center',
      'Safety Information',
      'Cancellation options',
      'Our CIVID-19 Response',
      'Supporting people with disabilities',
      'Report a neighborhoord concern',
    ],
  },
  {
    title: 'Community',
    items: ['Airbnb.org', 'Support Afghan refugees', 'Combating discrimination'],
  },
  {
    title: 'Hosting',
    items: [
      'Try Hosting',
      'AirCover for hosts',
      'Explore hosting resources',
      'Visit our Community forum',
      'How to host responsibly',
    ],
  },
  {
    title: 'About',
    items: [
      'Newsroom',
      'Learn about new features',
      'Letter form our founders',
      'Careers',
      'Investors',
    ],
  },
];

const Footer = () => {
  return (
    <footer className='bg-gray-100 w-full'>
      <div className='max-w-[1500px] m-auto px-6 pt-9'>
        <div className='flex pb-9'>
          {footerNav.map((item) => (
            <div key={Math.random()} className='flex flex-col gap-4 flex-grow'>
              <p className='text-sm font-semibold text-gray-900'>{item.title}</p>

              <ul className='flex flex-col gap-4'>
                {item.items.map((navItem) => (
                  <li key={Math.random()} className='cursor-pointer'>
                    <a className='text-sm font-normal text-gray-700 hover:underline'>{navItem}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='h-20 border-t border-gray-200'>
          <div className='flex gap-4 text-sm items-center h-full'>
            <p>&copy; 2022 Airbnb, Inc</p>
            <a className='cursor-pointer hover:underline'>Privacy</a>
            <a className='cursor-pointer hover:underline'>Terms</a>
            <a className='cursor-pointer hover:underline'>Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
