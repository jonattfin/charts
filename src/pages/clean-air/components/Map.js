import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from 'leaflet'
import { IconNames } from "@blueprintjs/icons";
import { Colors } from "@blueprintjs/core";

import { getLimits } from '../limits';

import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.css';

const center = [45.844, 24.620];

export default (props) => (
  <LeafletMap style={{ height: '100vh', width: '100vw' }} center={center} zoom={7} maxZoom={18}>
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <MarkerClusterGroup>
      {props.data.map((item, index) => (
        <Marker
          key={index}
          position={item.position}
          icon={getIcon(item)}>
          <Popup>{`sensorId: ${item.sensorId}, pm25: ${item.pm25}, pm10: ${item.pm10}`}</Popup>
        </Marker>
      ))}
    </MarkerClusterGroup>
  </LeafletMap>
)

function getIcon(item) {

  const markerHtmlStyles = (color, bgColor) => `
    background-color: ${color};
    border: 1px solid ${bgColor};
    width: 1rem;
    height: 1rem;
    display: block;
    left: -1.1rem;
    position: relative;
    transform: rotate(45deg);
  `;

  const html = `
    <div>
      <span style="${markerHtmlStyles(getColor(item, 'pm25'), Colors.BLUE5)}" />
      <span style="${markerHtmlStyles(getColor(item, 'pm10'), Colors.GOLD5)}" />
    </div>
  `;

  return L.divIcon({
    className: IconNames.ADD,
    iconAnchor: [0, 24],
    html: html,
  })
}

function getColor(item, type) {
  const limits = getLimits(type);

  for (let i = 0; i < limits.length; i++) {
    const element = limits[i];
    const nextElementValue = limits[i + 1] ? limits[i + 1].val : Number.POSITIVE_INFINITY;

    const itemValue = item[type];
    if (element.val <= itemValue && itemValue < nextElementValue) {
      return element.color;
    }
  }

  return Colors.GREEN5;
}

