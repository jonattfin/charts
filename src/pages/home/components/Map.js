import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from 'leaflet'
import { IconNames } from "@blueprintjs/icons";
import { Colors } from "@blueprintjs/core";

import { getLimits } from '../limits';
import { Line } from './';
import * as adapters from '../adapters';

import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.css';

const center = [45.844, 24.620];

export default (props) => (
  <LeafletMap style={{ height: '100vh', width: '100vw' }} center={center} zoom={7} maxZoom={14} minZoom={7}>
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
          <Popup maxWidth="480px">
            <div style={{ height: "240px", minWidth: "480px" }}>
              <Line {...getData(props.originalData, item.sensorId)} skipLogScale></Line>
            </div>
          </Popup>
        </Marker>
      ))}
    </MarkerClusterGroup>
  </LeafletMap>
)

function getData(originalData, sensorId) {
  const type = 'pm10';
  return adapters.toLineFormat(originalData.filter(item => item.sensorId === sensorId), type, `${type} µg/m3`)
}

function getIcon(item) {

  const markerHtmlStyles = (color, bgColor) => `
    background-color: ${color};
    border: 1px solid ${bgColor};
    width: 1.5rem;
    height: 1.5rem;
    display: block;
    left: -1.1rem;
    position: relative;
    transform: rotate(45deg);
  `;

  const source = item.source === 'urad' ? 'U' : 'P'; // TODO

  const html = `
    <div/>
      ${source}
      <span style="${markerHtmlStyles(getColor(item, 'pm25'), Colors.BLUE5)}"/>
      <span style="${markerHtmlStyles(getColor(item, 'pm10'), Colors.GOLD5)}"/>
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

