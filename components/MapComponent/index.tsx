import Map, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';
import { SearchResults } from '../../types';
import { HeartIcon, LocationMarkerIcon, StarIcon } from '@heroicons/react/outline';
import { priceTransfom } from '../../utils/price';
import { useState } from 'react';
import Image from 'next/image';

const MapComponent = ({ searchResults }: { searchResults: SearchResults[] }) => {
  const [selected, setSelected] = useState<SearchResults>();

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  return (
    <>
      <Map
        mapStyle={'mapbox://styles/jaber16/cl2ty57mc005j15muq1o83jut'}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
        style={{ width: '100%', height: '100%' }}
        initialViewState={{
          longitude: center.longitude,
          latitude: center.latitude,
          zoom: 11,
        }}
      >
        {searchResults.map((result) => {
          const [price, mode] = priceTransfom(result.price);

          return (
            <div key={result.lat}>
              <Marker longitude={result.long} latitude={result.lat}>
                <button
                  onClick={() => setSelected(result)}
                  className='bg-white rounded-full shadow-md cursor-pointer border border-gray-200 flex items-center justify-center py-1 px-3 transition-all duration-150 ease-out active:bg-black active:border-gray-400 active:text-white hover:scale-110'
                >
                  <span className='text-center text-base font-semibold text-black active:text-white '>
                    {price}
                  </span>
                </button>
              </Marker>
            </div>
          );
        })}

        {selected && (
          <div className='absolute max-w-[270px] w-full rounded-xl overflow-hidden shadow-sm top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white '>
            <div className='relative border-2 border-red-500'>
              <span className='absolute z-40'>
                <HeartIcon className='w-6 h-6 right-0 top-0' />
              </span>
              <div className='relative w-full h-[190px]'>
                <Image src={selected.img} layout='fill' objectFit='cover' alt={selected.title} />
              </div>

              <div>
                <span>
                  <StarIcon className='w-[14px] h-[14px] text-red-500' />
                </span>
                <span>{selected.star}</span>
                <span>(59 reviews)</span>
              </div>
              <div>
                <h5>{selected.title}</h5>

                <div>{selected.price}</div>
              </div>
            </div>
          </div>
        )}
      </Map>
    </>
  );
};

export default MapComponent;
