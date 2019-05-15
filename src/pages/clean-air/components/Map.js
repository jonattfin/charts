import React from 'react'
import { Map as LeafletMap, TileLayer, Marker } from "react-leaflet";
import MarkerClusterGroup from 'react-leaflet-markercluster';

import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.css';

// export const pointerIcon = new L.Icon({
//   iconUrl: require('../../../assets/broadcast-tower-solid.svg'),
//   iconRetinaUrl: require('../../../assets/broadcast-tower-solid.svg'),
//   iconAnchor: [20, 20],
// })

const center = [45.844,24.620];

export default (props) =>
  <LeafletMap style={{ height: '100vh', width: '100vw' }} center={center} zoom={7} maxZoom={18}>
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <MarkerClusterGroup>
      {props.data.map((item, index) => (
        <Marker
          key={index}
          position={[item.latitude, item.longitude]}>
          {
            /*icon={pointerIcon}>
            <Popup>{`name: ${item.name}, status: ${item.status}`}</Popup> 
            */
          }
        </Marker>
      ))}
    </MarkerClusterGroup>
  </LeafletMap>
