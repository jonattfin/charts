import React from 'react';
import { ResponsiveLine } from '@nivo/line'

const commonProperties = {
  margin: { top: 20, right: 20, bottom: 60, left: 80 },
  animate: true,
};

export default ({ data = getDefaultData() }) => (
  <ResponsiveLine
    {...commonProperties}
    data={data}
    xScale={{
      type: 'time',
      format: '%Y-%m-%d',
      precision: 'day',
    }}
    yScale={{
      type: 'linear',
      // stacked: boolean('stacked', false),
    }}
    axisBottom={{
      format: '%b %d',
    }}
    // curve={select('curve', curveOptions, 'step')}
    enableDotLabel={true}
    // dotSymbol={CustomSymbol}
    dotSize={16}
    dotBorderWidth={1}
    dotBorderColor="inherit:darker(0.3)"
  />
)

function getDefaultData() {
  return [
    {
      "id": "japan",
      "color": "hsl(194, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 43
        },
        {
          "x": "helicopter",
          "y": 236
        },
        {
          "x": "boat",
          "y": 279
        },
        {
          "x": "train",
          "y": 68
        },
        {
          "x": "subway",
          "y": 115
        },
        {
          "x": "bus",
          "y": 284
        },
        {
          "x": "car",
          "y": 30
        },
        {
          "x": "moto",
          "y": 115
        },
        {
          "x": "bicycle",
          "y": 270
        },
        {
          "x": "others",
          "y": 75
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(279, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 231
        },
        {
          "x": "helicopter",
          "y": 52
        },
        {
          "x": "boat",
          "y": 289
        },
        {
          "x": "train",
          "y": 278
        },
        {
          "x": "subway",
          "y": 70
        },
        {
          "x": "bus",
          "y": 91
        },
        {
          "x": "car",
          "y": 60
        },
        {
          "x": "moto",
          "y": 295
        },
        {
          "x": "bicycle",
          "y": 85
        },
        {
          "x": "others",
          "y": 259
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(36, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 171
        },
        {
          "x": "helicopter",
          "y": 236
        },
        {
          "x": "boat",
          "y": 222
        },
        {
          "x": "train",
          "y": 268
        },
        {
          "x": "subway",
          "y": 118
        },
        {
          "x": "bus",
          "y": 267
        },
        {
          "x": "car",
          "y": 221
        },
        {
          "x": "moto",
          "y": 210
        },
        {
          "x": "bicycle",
          "y": 51
        },
        {
          "x": "others",
          "y": 218
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(15, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 129
        },
        {
          "x": "helicopter",
          "y": 76
        },
        {
          "x": "boat",
          "y": 208
        },
        {
          "x": "train",
          "y": 246
        },
        {
          "x": "subway",
          "y": 142
        },
        {
          "x": "bus",
          "y": 191
        },
        {
          "x": "car",
          "y": 0
        },
        {
          "x": "moto",
          "y": 54
        },
        {
          "x": "bicycle",
          "y": 23
        },
        {
          "x": "others",
          "y": 205
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(180, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 54
        },
        {
          "x": "helicopter",
          "y": 145
        },
        {
          "x": "boat",
          "y": 58
        },
        {
          "x": "train",
          "y": 219
        },
        {
          "x": "subway",
          "y": 43
        },
        {
          "x": "bus",
          "y": 220
        },
        {
          "x": "car",
          "y": 159
        },
        {
          "x": "moto",
          "y": 95
        },
        {
          "x": "bicycle",
          "y": 193
        },
        {
          "x": "others",
          "y": 39
        }
      ]
    }
  ]
}
