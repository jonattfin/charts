import React from 'react';
import { ResponsiveLine } from '@nivo/line'

const commonProperties = {
  margin: { top: 20, right: 20, bottom: 60, left: 80 },
  animate: true,
  enableSlices: 'x',
};

export default ({ data, axisLeft, axisBottom, useLogScale = false }) => {

  let optionalParams = {};
  if (useLogScale) {
    optionalParams = {
      yScale: {
        type: 'log',
        base: 10,
        max: 'auto',
      }
    }
  }

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
        legendOffset: -12,
      }}
      {...optionalParams}
      axisBottom={{
        ...axisBottom,
        legendOffset: 12,
      }}
    />
  );
};
