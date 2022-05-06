import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/Banner';
import Banner2 from '../components/Banner2';
import Cards from '../components/Cards';
import Cities from '../components/Cities';
import Discover from '../components/Discover';
import PageLayout from '../components/PageLayout';
import CitiesData from '../mocks/Cities.json';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Airbnb</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/airbnb_logo.png' />
      </Head>

      <PageLayout>
        <main className='max-w-[1500px] m-auto flex flex-col items-center pt-9 px-6 overflow-hidden mb-10'>
          <Banner />
          <Cities cities={CitiesData} />
          <Discover />
          <Cards />
          <Banner2 />
        </main>
      </PageLayout>
    </>
  );
};

export default Home;

//^ Pull Cities from a server - API endpoints
// export const getServerSideProps = async () => {
//   const cities = await fetch('https://links.papareact.com/pyp').then((response) => response.json());

//   console.log(cities);

//   return {
//     props: {
//       cities,
//     },
//   };
// };
