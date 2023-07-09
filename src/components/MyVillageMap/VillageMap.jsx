import React from 'react';
import './VillageMap.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';

const VillageMap = () => {

    const customIcon = new Icon({
        iconSize:[25,38],
        iconUrl:'https://w7.pngwing.com/pngs/457/630/png-transparent-location-logo-location-computer-icons-symbol-location-miscellaneous-angle-heart-thumbnail.png'
    });
 

  return (
    <div className='map-container'>
      <h3>Google Map</h3>
    <MapContainer  center={[17.963343, 83.028246]} zoom={14}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[17.955343, 83.028350]} icon={customIcon} >

      </Marker>
      {/* Additional map components and layers */}
    </MapContainer>
    </div>
  );
};

export default VillageMap;