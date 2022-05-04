import Head from 'next/head';
import React from 'react';
import PageLayout from '../components/PageLayout';

const Search = () => {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/airbnb_logo.png' />
      </Head>

      <PageLayout tags>
        <main className='h-screen flex'>
          <div className='bg-white flex-1'>
            <div className='my-6 mx-6 border-b border-gray-200'>
              <h1 className='text-sm text-gray-700 mb-6'>300+ stays in Marrakesh</h1>

              <p className='text-sm text-gray-700 pb-6'>
                Review COVID-19 travel restrictions before you book.{' '}
                <a className='underline cursor-pointer'>Learn more</a>
              </p>
            </div>
          </div>

          <div className='bg-green-200 flex-1'>
            <div className='flex items-center justify-center h-full'>
              <h1>Map Here</h1>
            </div>
          </div>
        </main>
      </PageLayout>
    </div>
  );
};

export default Search;