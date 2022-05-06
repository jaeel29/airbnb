import Map, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';
import { SearchResults, SelectedLocationType } from '../../types';
import { priceTransfom } from '../../utils/price';
import { useState } from 'react';
import ThinCard from '../ThinCard';

const MapComponent = ({ searchResults }: { searchResults: SearchResults[] }) => {
  const [selected, setSelected] = useState<SelectedLocationType>();

  let long, lat;
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);
  if (center) {
    long = center.longitude;
    lat = center.latitude;
  }

  console.log(long, lat);

  return (
    <>
      <Map
        mapStyle={'mapbox://styles/jaber16/cl2ty57mc005j15muq1o83jut'}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
        style={{ width: '100%', height: '100%' }}
        initialViewState={{
          longitude: long,
          latitude: lat,
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
                  className={`bg-white rounded-full shadow-md cursor-pointer border border-gray-200 inline-flex items-center justify-center py-1 px-3 transition-all duration-150 ease-out active:bg-black active:border-gray-400 hover:scale-110 ${
                    selected && selected?.title === result.title && 'bg-black border-gray-400'
                  }`}
                >
                  <span
                    className={`text-center text-base font-semibold text-black active:text-white ${
                      selected && selected?.title === result.title && 'text-gray-50'
                    }`}
                  >
                    {price}
                  </span>
                </button>
              </Marker>
            </div>
          );
        })}

        {selected && <ThinCard selected={selected} setSelected={setSelected} />}
      </Map>
    </>
  );
};

export default MapComponent;
