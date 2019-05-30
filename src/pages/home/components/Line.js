import React from 'react';
import { ResponsiveLine } from '@nivo/line'

const commonProperties = {
  margin: { top: 20, right: 20, bottom: 60, left: 80 },
  animate: true,
  enableSlices: 'x',
};

export default ({ data, axisLeft, axisBottom, useLogScale = false, skipLogScale = false }) => {

  let optionalParams = {};
  if (useLogScale && !skipLogScale) {
    optionalParams = {
      yScale: {
        type: 'log',
        base: 10,
        max: 'auto',
      }
    }
  }

  const offset = 40;

  return (
    <ResponsiveLine
      {...commonProperties}
      data={data}
      xScale={{
        type: 'linear',
        min: 0,
        max: 'auto',
      }}
      axisLeft={{
        ...axisLeft,
        legendOffset: -offset,
      }}
      {...optionalParams}
      axisBottom={{
        ...axisBottom,
        legendOffset: offset,
      }}
    />
  );
};
