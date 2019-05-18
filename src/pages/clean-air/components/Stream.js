import React from 'react'
import { ResponsiveStream } from '@nivo/stream';

export default ({ data = getInitialData() }) => (
  <ResponsiveStream
    data={data}
    keys={['Raoul', 'Josiane', 'Marcel', 'René', 'Paul', 'Jacques']}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: '',
      legendOffset: 36
    }}
    axisLeft={{ orient: 'left', tickSize: 5, tickPadding: 5, tickRotation: 0, legend: '', legendOffset: -40 }}
    offsetType="silhouette"
    colors={{ scheme: 'nivo' }}
    fillOpacity={0.85}
    borderColor={{ theme: 'background' }}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: '#2c998f',
        size: 4,
        padding: 2,
        stagger: true
      },
      {
        id: 'squares',
        type: 'patternSquares',
        background: 'inherit',
        color: '#e4c912',
        size: 6,
        padding: 2,
        stagger: true
      }
    ]}
    fill={[
      {
        match: {
          id: 'Paul'
        },
        id: 'dots'
      },
      {
        match: {
          id: 'Marcel'
        },
        id: 'squares'
      }
    ]}
    dotSize={8}
    dotColor={{ from: 'color' }}
    dotBorderWidth={2}
    dotBorderColor={{ from: 'color', modifiers: [['darker', 0.7]] }}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        translateX: 100,
        itemWidth: 80,
        itemHeight: 20,
        itemTextColor: '#999999',
        symbolSize: 12,
        symbolShape: 'circle',
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: '#000000'
            }
          }
        ]
      }
    ]}
  />
)

function getInitialData() {
  return [
    {
      "Raoul": 134,
      "Josiane": 157,
      "Marcel": 174,
      "René": 174,
      "Paul": 138,
      "Jacques": 105
    },
    {
      "Raoul": 140,
      "Josiane": 22,
      "Marcel": 192,
      "René": 68,
      "Paul": 136,
      "Jacques": 58
    },
    {
      "Raoul": 180,
      "Josiane": 14,
      "Marcel": 117,
      "René": 42,
      "Paul": 199,
      "Jacques": 147
    },
    {
      "Raoul": 134,
      "Josiane": 24,
      "Marcel": 157,
      "René": 135,
      "Paul": 185,
      "Jacques": 17
    },
    {
      "Raoul": 134,
      "Josiane": 25,
      "Marcel": 184,
      "René": 86,
      "Paul": 139,
      "Jacques": 171
    },
    {
      "Raoul": 131,
      "Josiane": 140,
      "Marcel": 90,
      "René": 187,
      "Paul": 72,
      "Jacques": 156
    },
    {
      "Raoul": 81,
      "Josiane": 190,
      "Marcel": 145,
      "René": 188,
      "Paul": 59,
      "Jacques": 119
    },
    {
      "Raoul": 19,
      "Josiane": 182,
      "Marcel": 126,
      "René": 195,
      "Paul": 16,
      "Jacques": 63
    },
    {
      "Raoul": 42,
      "Josiane": 155,
      "Marcel": 119,
      "René": 110,
      "Paul": 127,
      "Jacques": 185
    }
  ]
}
