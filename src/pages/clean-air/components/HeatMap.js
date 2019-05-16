import React from 'react';
import { ResponsiveHeatMap } from '@nivo/heatmap'

export default ({ data = getDefaultData() }) => (
  <ResponsiveHeatMap
    data={data}
    keys={[
      'hot dog',
      'burger',
      'sandwich',
      'kebab',
      'fries',
      'donut',
      'junk',
      'sushi',
      'ramen',
      'curry',
      'udon'
    ]}
    indexBy="country"
    margin={{ top: 100, right: 60, bottom: 60, left: 60 }}
    forceSquare={true}
    axisTop={{ orient: 'top', tickSize: 5, tickPadding: 5, tickRotation: -90, legend: '', legendOffset: 36 }}
    axisRight={null}
    axisBottom={null}
    axisLeft={{
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'country',
      legendPosition: 'middle',
      legendOffset: -40
    }}
    cellOpacity={1}
    cellBorderColor={{ from: 'color', modifiers: [['darker', 0.4]] }}
    labelTextColor={{ from: 'color', modifiers: [['darker', 1.8]] }}
    defs={[
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: 'rgba(0, 0, 0, 0.1)',
        rotation: -45,
        lineWidth: 4,
        spacing: 7
      }
    ]}
    fill={[{ id: 'lines' }]}
    animate={true}
    motionStiffness={80}
    motionDamping={9}
    hoverTarget="cell"
    cellHoverOthersOpacity={0.25}
  />
)

function getDefaultData() {
  return [
    {
      "country": "AD",
      "hot dog": 68,
      "hot dogColor": "hsl(321, 70%, 50%)",
      "burger": 86,
      "burgerColor": "hsl(343, 70%, 50%)",
      "sandwich": 31,
      "sandwichColor": "hsl(83, 70%, 50%)",
      "kebab": 58,
      "kebabColor": "hsl(162, 70%, 50%)",
      "fries": 0,
      "friesColor": "hsl(187, 70%, 50%)",
      "donut": 17,
      "donutColor": "hsl(27, 70%, 50%)",
      "junk": 86,
      "junkColor": "hsl(276, 70%, 50%)",
      "sushi": 25,
      "sushiColor": "hsl(13, 70%, 50%)",
      "ramen": 90,
      "ramenColor": "hsl(355, 70%, 50%)",
      "curry": 44,
      "curryColor": "hsl(70, 70%, 50%)",
      "udon": 43,
      "udonColor": "hsl(236, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 91,
      "hot dogColor": "hsl(183, 70%, 50%)",
      "burger": 56,
      "burgerColor": "hsl(101, 70%, 50%)",
      "sandwich": 61,
      "sandwichColor": "hsl(100, 70%, 50%)",
      "kebab": 64,
      "kebabColor": "hsl(209, 70%, 50%)",
      "fries": 39,
      "friesColor": "hsl(138, 70%, 50%)",
      "donut": 71,
      "donutColor": "hsl(324, 70%, 50%)",
      "junk": 9,
      "junkColor": "hsl(316, 70%, 50%)",
      "sushi": 51,
      "sushiColor": "hsl(51, 70%, 50%)",
      "ramen": 24,
      "ramenColor": "hsl(76, 70%, 50%)",
      "curry": 32,
      "curryColor": "hsl(284, 70%, 50%)",
      "udon": 44,
      "udonColor": "hsl(268, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 22,
      "hot dogColor": "hsl(54, 70%, 50%)",
      "burger": 56,
      "burgerColor": "hsl(260, 70%, 50%)",
      "sandwich": 60,
      "sandwichColor": "hsl(251, 70%, 50%)",
      "kebab": 1,
      "kebabColor": "hsl(90, 70%, 50%)",
      "fries": 69,
      "friesColor": "hsl(167, 70%, 50%)",
      "donut": 92,
      "donutColor": "hsl(58, 70%, 50%)",
      "junk": 83,
      "junkColor": "hsl(118, 70%, 50%)",
      "sushi": 76,
      "sushiColor": "hsl(232, 70%, 50%)",
      "ramen": 74,
      "ramenColor": "hsl(113, 70%, 50%)",
      "curry": 64,
      "curryColor": "hsl(240, 70%, 50%)",
      "udon": 28,
      "udonColor": "hsl(184, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 63,
      "hot dogColor": "hsl(150, 70%, 50%)",
      "burger": 10,
      "burgerColor": "hsl(359, 70%, 50%)",
      "sandwich": 37,
      "sandwichColor": "hsl(141, 70%, 50%)",
      "kebab": 10,
      "kebabColor": "hsl(4, 70%, 50%)",
      "fries": 24,
      "friesColor": "hsl(42, 70%, 50%)",
      "donut": 28,
      "donutColor": "hsl(116, 70%, 50%)",
      "junk": 31,
      "junkColor": "hsl(47, 70%, 50%)",
      "sushi": 39,
      "sushiColor": "hsl(150, 70%, 50%)",
      "ramen": 23,
      "ramenColor": "hsl(57, 70%, 50%)",
      "curry": 43,
      "curryColor": "hsl(139, 70%, 50%)",
      "udon": 51,
      "udonColor": "hsl(233, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 44,
      "hot dogColor": "hsl(114, 70%, 50%)",
      "burger": 64,
      "burgerColor": "hsl(294, 70%, 50%)",
      "sandwich": 98,
      "sandwichColor": "hsl(330, 70%, 50%)",
      "kebab": 9,
      "kebabColor": "hsl(283, 70%, 50%)",
      "fries": 67,
      "friesColor": "hsl(142, 70%, 50%)",
      "donut": 84,
      "donutColor": "hsl(6, 70%, 50%)",
      "junk": 38,
      "junkColor": "hsl(266, 70%, 50%)",
      "sushi": 21,
      "sushiColor": "hsl(42, 70%, 50%)",
      "ramen": 1,
      "ramenColor": "hsl(188, 70%, 50%)",
      "curry": 97,
      "curryColor": "hsl(26, 70%, 50%)",
      "udon": 69,
      "udonColor": "hsl(283, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 74,
      "hot dogColor": "hsl(154, 70%, 50%)",
      "burger": 92,
      "burgerColor": "hsl(92, 70%, 50%)",
      "sandwich": 27,
      "sandwichColor": "hsl(220, 70%, 50%)",
      "kebab": 78,
      "kebabColor": "hsl(57, 70%, 50%)",
      "fries": 58,
      "friesColor": "hsl(192, 70%, 50%)",
      "donut": 17,
      "donutColor": "hsl(55, 70%, 50%)",
      "junk": 88,
      "junkColor": "hsl(173, 70%, 50%)",
      "sushi": 9,
      "sushiColor": "hsl(22, 70%, 50%)",
      "ramen": 43,
      "ramenColor": "hsl(194, 70%, 50%)",
      "curry": 5,
      "curryColor": "hsl(264, 70%, 50%)",
      "udon": 17,
      "udonColor": "hsl(348, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 15,
      "hot dogColor": "hsl(150, 70%, 50%)",
      "burger": 20,
      "burgerColor": "hsl(215, 70%, 50%)",
      "sandwich": 29,
      "sandwichColor": "hsl(13, 70%, 50%)",
      "kebab": 11,
      "kebabColor": "hsl(91, 70%, 50%)",
      "fries": 66,
      "friesColor": "hsl(198, 70%, 50%)",
      "donut": 27,
      "donutColor": "hsl(303, 70%, 50%)",
      "junk": 10,
      "junkColor": "hsl(9, 70%, 50%)",
      "sushi": 49,
      "sushiColor": "hsl(331, 70%, 50%)",
      "ramen": 79,
      "ramenColor": "hsl(304, 70%, 50%)",
      "curry": 58,
      "curryColor": "hsl(84, 70%, 50%)",
      "udon": 50,
      "udonColor": "hsl(11, 70%, 50%)"
    },
    {
      "country": "AO",
      "hot dog": 7,
      "hot dogColor": "hsl(94, 70%, 50%)",
      "burger": 22,
      "burgerColor": "hsl(14, 70%, 50%)",
      "sandwich": 24,
      "sandwichColor": "hsl(238, 70%, 50%)",
      "kebab": 48,
      "kebabColor": "hsl(21, 70%, 50%)",
      "fries": 76,
      "friesColor": "hsl(251, 70%, 50%)",
      "donut": 63,
      "donutColor": "hsl(16, 70%, 50%)",
      "junk": 39,
      "junkColor": "hsl(42, 70%, 50%)",
      "sushi": 93,
      "sushiColor": "hsl(258, 70%, 50%)",
      "ramen": 97,
      "ramenColor": "hsl(146, 70%, 50%)",
      "curry": 71,
      "curryColor": "hsl(250, 70%, 50%)",
      "udon": 6,
      "udonColor": "hsl(124, 70%, 50%)"
    },
    {
      "country": "AQ",
      "hot dog": 67,
      "hot dogColor": "hsl(231, 70%, 50%)",
      "burger": 22,
      "burgerColor": "hsl(34, 70%, 50%)",
      "sandwich": 64,
      "sandwichColor": "hsl(257, 70%, 50%)",
      "kebab": 9,
      "kebabColor": "hsl(349, 70%, 50%)",
      "fries": 10,
      "friesColor": "hsl(227, 70%, 50%)",
      "donut": 84,
      "donutColor": "hsl(243, 70%, 50%)",
      "junk": 41,
      "junkColor": "hsl(169, 70%, 50%)",
      "sushi": 83,
      "sushiColor": "hsl(313, 70%, 50%)",
      "ramen": 24,
      "ramenColor": "hsl(46, 70%, 50%)",
      "curry": 13,
      "curryColor": "hsl(192, 70%, 50%)",
      "udon": 88,
      "udonColor": "hsl(166, 70%, 50%)"
    }
  ];
}

