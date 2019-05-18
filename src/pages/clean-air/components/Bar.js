import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

export default ({ data = getDefaultData() }) => (
  <ResponsiveBar
    data={data.items}
    keys={data.keys}
    indexBy="city"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    colors={{ scheme: 'nivo' }}
    groupMode="grouped"
    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'city',
      legendPosition: 'middle',
      legendOffset: 32
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'value',
      legendPosition: 'middle',
      legendOffset: -40
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
)

function getDefaultData() {
  const keys = ['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut'];
  const items = getData();

  return { keys, items };

  function getData() {
    return [
      {
        "city": "AD",
        "hot dog": 199,
        "hot dogColor": "hsl(356, 70%, 50%)",
        "burger": 66,
        "burgerColor": "hsl(5, 70%, 50%)",
        "sandwich": 102,
        "sandwichColor": "hsl(8, 70%, 50%)",
        "kebab": 199,
        "kebabColor": "hsl(152, 70%, 50%)",
        "fries": 159,
        "friesColor": "hsl(357, 70%, 50%)",
        "donut": 67,
        "donutColor": "hsl(285, 70%, 50%)"
      },
      {
        "city": "AE",
        "hot dog": 150,
        "hot dogColor": "hsl(268, 70%, 50%)",
        "burger": 177,
        "burgerColor": "hsl(306, 70%, 50%)",
        "sandwich": 68,
        "sandwichColor": "hsl(63, 70%, 50%)",
        "kebab": 138,
        "kebabColor": "hsl(41, 70%, 50%)",
        "fries": 125,
        "friesColor": "hsl(242, 70%, 50%)",
        "donut": 147,
        "donutColor": "hsl(156, 70%, 50%)"
      },
      {
        "city": "AF",
        "hot dog": 190,
        "hot dogColor": "hsl(304, 70%, 50%)",
        "burger": 56,
        "burgerColor": "hsl(12, 70%, 50%)",
        "sandwich": 86,
        "sandwichColor": "hsl(231, 70%, 50%)",
        "kebab": 31,
        "kebabColor": "hsl(19, 70%, 50%)",
        "fries": 44,
        "friesColor": "hsl(196, 70%, 50%)",
        "donut": 91,
        "donutColor": "hsl(85, 70%, 50%)"
      },
      {
        "city": "AG",
        "hot dog": 70,
        "hot dogColor": "hsl(62, 70%, 50%)",
        "burger": 52,
        "burgerColor": "hsl(143, 70%, 50%)",
        "sandwich": 31,
        "sandwichColor": "hsl(275, 70%, 50%)",
        "kebab": 2,
        "kebabColor": "hsl(35, 70%, 50%)",
        "fries": 26,
        "friesColor": "hsl(281, 70%, 50%)",
        "donut": 126,
        "donutColor": "hsl(29, 70%, 50%)"
      },
      {
        "city": "AI",
        "hot dog": 106,
        "hot dogColor": "hsl(118, 70%, 50%)",
        "burger": 164,
        "burgerColor": "hsl(88, 70%, 50%)",
        "sandwich": 65,
        "sandwichColor": "hsl(47, 70%, 50%)",
        "kebab": 22,
        "kebabColor": "hsl(249, 70%, 50%)",
        "fries": 72,
        "friesColor": "hsl(158, 70%, 50%)",
        "donut": 38,
        "donutColor": "hsl(346, 70%, 50%)"
      },
      {
        "city": "AL",
        "hot dog": 1,
        "hot dogColor": "hsl(23, 70%, 50%)",
        "burger": 115,
        "burgerColor": "hsl(111, 70%, 50%)",
        "sandwich": 151,
        "sandwichColor": "hsl(163, 70%, 50%)",
        "kebab": 22,
        "kebabColor": "hsl(230, 70%, 50%)",
        "fries": 152,
        "friesColor": "hsl(36, 70%, 50%)",
        "donut": 191,
        "donutColor": "hsl(1, 70%, 50%)"
      },
      {
        "city": "AM",
        "hot dog": 185,
        "hot dogColor": "hsl(294, 70%, 50%)",
        "burger": 76,
        "burgerColor": "hsl(303, 70%, 50%)",
        "sandwich": 102,
        "sandwichColor": "hsl(39, 70%, 50%)",
        "kebab": 153,
        "kebabColor": "hsl(115, 70%, 50%)",
        "fries": 137,
        "friesColor": "hsl(101, 70%, 50%)",
        "donut": 44,
        "donutColor": "hsl(318, 70%, 50%)"
      }
    ]
  }
}
