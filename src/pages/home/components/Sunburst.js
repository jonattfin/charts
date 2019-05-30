import React from 'react';
import { ResponsiveSunburst } from '@nivo/sunburst'

export default ({ data = getDefaultData() }) => (
  <ResponsiveSunburst
    data={data}
    margin={{ top: 40, right: 20, bottom: 20, left: 20 }}
    identity="name"
    value="loc"
    cornerRadius={2}
    borderWidth={1}
    borderColor="white"
    colors={{ scheme: 'nivo' }}
    // childColor={{ from: 'color' }}
    childColor="noinherit"
    animate={true}
    motionStiffness={90}
    motionDamping={15}
    isInteractive={true}
  />
)

function getDefaultData() {
  return {
    "name": "nivo",
    "color": "hsl(163, 70%, 50%)",
    "children": [
      {
        "name": "viz",
        "color": "hsl(111, 70%, 50%)",
        "children": [
          {
            "name": "stack",
            "color": "hsl(9, 70%, 50%)",
            "children": [
              {
                "name": "chart",
                "color": "hsl(238, 70%, 50%)",
                "loc": 95475
              },
              {
                "name": "xAxis",
                "color": "hsl(30, 70%, 50%)",
                "loc": 195846
              },
              {
                "name": "yAxis",
                "color": "hsl(96, 70%, 50%)",
                "loc": 85786
              },
              {
                "name": "layers",
                "color": "hsl(293, 70%, 50%)",
                "loc": 51607
              }
            ]
          },
          {
            "name": "pie",
            "color": "hsl(135, 70%, 50%)",
            "children": [
              {
                "name": "chart",
                "color": "hsl(338, 70%, 50%)",
                "children": [
                  {
                    "name": "pie",
                    "color": "hsl(90, 70%, 50%)",
                    "children": [
                      {
                        "name": "outline",
                        "color": "hsl(274, 70%, 50%)",
                        "loc": 153689
                      },
                      {
                        "name": "slices",
                        "color": "hsl(101, 70%, 50%)",
                        "loc": 79932
                      },
                      {
                        "name": "bbox",
                        "color": "hsl(222, 70%, 50%)",
                        "loc": 93264
                      }
                    ]
                  },
                  {
                    "name": "donut",
                    "color": "hsl(165, 70%, 50%)",
                    "loc": 76088
                  },
                  {
                    "name": "gauge",
                    "color": "hsl(81, 70%, 50%)",
                    "loc": 56195
                  }
                ]
              },
              {
                "name": "legends",
                "color": "hsl(297, 70%, 50%)",
                "loc": 51010
              }
            ]
          }
        ]
      },
      {
        "name": "colors",
        "color": "hsl(190, 70%, 50%)",
        "children": [
          {
            "name": "rgb",
            "color": "hsl(100, 70%, 50%)",
            "loc": 75673
          },
          {
            "name": "hsl",
            "color": "hsl(11, 70%, 50%)",
            "loc": 177501
          }
        ]
      },
      {
        "name": "utils",
        "color": "hsl(326, 70%, 50%)",
        "children": [
          {
            "name": "randomize",
            "color": "hsl(72, 70%, 50%)",
            "loc": 99553
          },
          {
            "name": "resetClock",
            "color": "hsl(53, 70%, 50%)",
            "loc": 191991
          },
          {
            "name": "noop",
            "color": "hsl(293, 70%, 50%)",
            "loc": 87158
          },
          {
            "name": "tick",
            "color": "hsl(14, 70%, 50%)",
            "loc": 27220
          },
          {
            "name": "forceGC",
            "color": "hsl(357, 70%, 50%)",
            "loc": 122517
          },
          {
            "name": "stackTrace",
            "color": "hsl(288, 70%, 50%)",
            "loc": 104302
          },
          {
            "name": "dbg",
            "color": "hsl(223, 70%, 50%)",
            "loc": 52122
          }
        ]
      },
      {
        "name": "generators",
        "color": "hsl(27, 70%, 50%)",
        "children": [
          {
            "name": "address",
            "color": "hsl(46, 70%, 50%)",
            "loc": 149769
          },
          {
            "name": "city",
            "color": "hsl(276, 70%, 50%)",
            "loc": 193773
          },
          {
            "name": "animal",
            "color": "hsl(102, 70%, 50%)",
            "loc": 75666
          },
          {
            "name": "movie",
            "color": "hsl(350, 70%, 50%)",
            "loc": 73162
          },
          {
            "name": "user",
            "color": "hsl(10, 70%, 50%)",
            "loc": 187065
          }
        ]
      },
      {
        "name": "set",
        "color": "hsl(317, 70%, 50%)",
        "children": [
          {
            "name": "clone",
            "color": "hsl(246, 70%, 50%)",
            "loc": 64550
          },
          {
            "name": "intersect",
            "color": "hsl(93, 70%, 50%)",
            "loc": 166261
          },
          {
            "name": "merge",
            "color": "hsl(168, 70%, 50%)",
            "loc": 62426
          },
          {
            "name": "reverse",
            "color": "hsl(250, 70%, 50%)",
            "loc": 10932
          },
          {
            "name": "toArray",
            "color": "hsl(131, 70%, 50%)",
            "loc": 2133
          },
          {
            "name": "toObject",
            "color": "hsl(246, 70%, 50%)",
            "loc": 18924
          },
          {
            "name": "fromCSV",
            "color": "hsl(196, 70%, 50%)",
            "loc": 72030
          },
          {
            "name": "slice",
            "color": "hsl(324, 70%, 50%)",
            "loc": 146996
          },
          {
            "name": "append",
            "color": "hsl(316, 70%, 50%)",
            "loc": 16972
          },
          {
            "name": "prepend",
            "color": "hsl(90, 70%, 50%)",
            "loc": 33830
          },
          {
            "name": "shuffle",
            "color": "hsl(267, 70%, 50%)",
            "loc": 169817
          },
          {
            "name": "pick",
            "color": "hsl(207, 70%, 50%)",
            "loc": 196766
          },
          {
            "name": "plouc",
            "color": "hsl(216, 70%, 50%)",
            "loc": 29209
          }
        ]
      },
      {
        "name": "text",
        "color": "hsl(205, 70%, 50%)",
        "children": [
          {
            "name": "trim",
            "color": "hsl(232, 70%, 50%)",
            "loc": 18310
          },
          {
            "name": "slugify",
            "color": "hsl(156, 70%, 50%)",
            "loc": 113514
          },
          {
            "name": "snakeCase",
            "color": "hsl(176, 70%, 50%)",
            "loc": 769
          },
          {
            "name": "camelCase",
            "color": "hsl(322, 70%, 50%)",
            "loc": 131113
          },
          {
            "name": "repeat",
            "color": "hsl(170, 70%, 50%)",
            "loc": 167087
          },
          {
            "name": "padLeft",
            "color": "hsl(185, 70%, 50%)",
            "loc": 16630
          },
          {
            "name": "padRight",
            "color": "hsl(359, 70%, 50%)",
            "loc": 30728
          },
          {
            "name": "sanitize",
            "color": "hsl(236, 70%, 50%)",
            "loc": 135390
          },
          {
            "name": "ploucify",
            "color": "hsl(136, 70%, 50%)",
            "loc": 71694
          }
        ]
      },
      {
        "name": "misc",
        "color": "hsl(105, 70%, 50%)",
        "children": [
          {
            "name": "whatever",
            "color": "hsl(318, 70%, 50%)",
            "children": [
              {
                "name": "hey",
                "color": "hsl(167, 70%, 50%)",
                "loc": 124764
              },
              {
                "name": "WTF",
                "color": "hsl(139, 70%, 50%)",
                "loc": 164282
              },
              {
                "name": "lol",
                "color": "hsl(112, 70%, 50%)",
                "loc": 46141
              },
              {
                "name": "IMHO",
                "color": "hsl(335, 70%, 50%)",
                "loc": 47242
              }
            ]
          },
          {
            "name": "other",
            "color": "hsl(167, 70%, 50%)",
            "loc": 194650
          },
          {
            "name": "crap",
            "color": "hsl(153, 70%, 50%)",
            "children": [
              {
                "name": "crapA",
                "color": "hsl(281, 70%, 50%)",
                "loc": 87215
              },
              {
                "name": "crapB",
                "color": "hsl(202, 70%, 50%)",
                "children": [
                  {
                    "name": "crapB1",
                    "color": "hsl(256, 70%, 50%)",
                    "loc": 181746
                  },
                  {
                    "name": "crapB2",
                    "color": "hsl(288, 70%, 50%)",
                    "loc": 59845
                  },
                  {
                    "name": "crapB3",
                    "color": "hsl(139, 70%, 50%)",
                    "loc": 169241
                  },
                  {
                    "name": "crapB4",
                    "color": "hsl(256, 70%, 50%)",
                    "loc": 44382
                  }
                ]
              },
              {
                "name": "crapC",
                "color": "hsl(70, 70%, 50%)",
                "children": [
                  {
                    "name": "crapC1",
                    "color": "hsl(256, 70%, 50%)",
                    "loc": 12804
                  },
                  {
                    "name": "crapC2",
                    "color": "hsl(183, 70%, 50%)",
                    "loc": 111561
                  },
                  {
                    "name": "crapC3",
                    "color": "hsl(269, 70%, 50%)",
                    "loc": 181889
                  },
                  {
                    "name": "crapC4",
                    "color": "hsl(209, 70%, 50%)",
                    "loc": 132737
                  },
                  {
                    "name": "crapC5",
                    "color": "hsl(18, 70%, 50%)",
                    "loc": 47045
                  },
                  {
                    "name": "crapC6",
                    "color": "hsl(222, 70%, 50%)",
                    "loc": 28421
                  },
                  {
                    "name": "crapC7",
                    "color": "hsl(318, 70%, 50%)",
                    "loc": 166919
                  },
                  {
                    "name": "crapC8",
                    "color": "hsl(252, 70%, 50%)",
                    "loc": 167226
                  },
                  {
                    "name": "crapC9",
                    "color": "hsl(264, 70%, 50%)",
                    "loc": 183624
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}
