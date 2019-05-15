import React from 'react'
import { ResponsivePie } from '@nivo/pie'

export default ({ data = getDefaultData() }) =>
  <ResponsivePie
    data={data}
    margin={{
      "top": 40,
      "right": 80,
      "bottom": 80,
      "left": 80
    }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    colors={{
      "scheme": "nivo"
    }}
    borderWidth={1}
    borderColor={{
      "from": "color",
      "modifiers": [
        [
          "darker",
          0.2
        ]
      ]
    }}
    radialLabelsSkipAngle={10}
    radialLabelsTextXOffset={6}
    radialLabelsTextColor="#333333"
    radialLabelsLinkOffset={0}
    radialLabelsLinkDiagonalLength={16}
    radialLabelsLinkHorizontalLength={24}
    radialLabelsLinkStrokeWidth={1}
    radialLabelsLinkColor={{
      "from": "color"
    }}
    slicesLabelsSkipAngle={10}
    slicesLabelsTextColor="#333333"
    animate={true}
    motionStiffness={90}
    motionDamping={15}
    defs={[
      {
        "id": "dots",
        "type": "patternDots",
        "background": "inherit",
        "color": "rgba(255, 255, 255, 0.3)",
        "size": 4,
        "padding": 1,
        "stagger": true
      },
      {
        "id": "lines",
        "type": "patternLines",
        "background": "inherit",
        "color": "rgba(255, 255, 255, 0.3)",
        "rotation": -45,
        "lineWidth": 6,
        "spacing": 10
      }
    ]}
    fill={[
      {
        "match": {
          "id": "Good"
        },
        "id": "dots"
      },
      {
        "match": {
          "id": "Moderate"
        },
        "id": "lines"
      },
      {
        "match": {
          "id": "Unhealthy"
        },
        "id": "lines"
      },
      {
        "match": {
          "id": "Very Unhealthy"
        },
        "id": "lines"
      },
      {
        "match": {
          "id": "Hazardous"
        },
        "id": "lines"
      },
    ]}
    legends={[
      {
        "anchor": "bottom",
        "direction": "row",
        "translateY": 56,
        "itemWidth": 100,
        "itemHeight": 18,
        "itemTextColor": "#999",
        "symbolSize": 18,
        "symbolShape": "circle",
        "effects": [
          {
            "on": "hover",
            "style": {
              "itemTextColor": "#000"
            }
          }
        ]
      }
    ]}
  />

function getDefaultData() {
  return [
    {
      "id": "php",
      "label": "php",
      "value": 77,
      "color": "hsl(63, 70%, 50%)"
    },
    {
      "id": "python",
      "label": "python",
      "value": 545,
      "color": "hsl(105, 70%, 50%)"
    },
    {
      "id": "hack",
      "label": "hack",
      "value": 132,
      "color": "hsl(155, 70%, 50%)"
    },
    {
      "id": "make",
      "label": "make",
      "value": 548,
      "color": "hsl(231, 70%, 50%)"
    },
    {
      "id": "javascript",
      "label": "javascript",
      "value": 484,
      "color": "hsl(263, 70%, 50%)"
    }
  ]
}
