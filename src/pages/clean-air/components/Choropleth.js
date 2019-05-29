import React from 'react';
import { ResponsiveChoropleth } from '@nivo/geo'

import { usaStatesFeatures } from './features';

export default ({ data = getDefaultData() }) => (
  <ResponsiveChoropleth
    data={data}
    features={usaStatesFeatures.features}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    colors="nivo"
    domain={[0, 1000000]}
    unknownColor="#666666"
    label="properties.name"
    valueFormat=".2s"
    projectionTranslation={[0.5, 0.5]}
    projectionRotation={[0, 0, 0]}
    enableGraticule={true}
    graticuleLineColor="#dddddd"
    borderWidth={0.5}
    borderColor="#152538"
    legends={[
      {
        anchor: 'bottom-left',
        direction: 'column',
        justify: true,
        translateX: 20,
        translateY: -100,
        itemsSpacing: 0,
        itemWidth: 94,
        itemHeight: 18,
        itemDirection: 'left-to-right',
        itemTextColor: '#444444',
        itemOpacity: 0.85,
        symbolSize: 18,
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: '#000000',
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
  />
)

function getDefaultData() {
  return [
    {
      "id": "AFG",
      "value": 955140
    },
    {
      "id": "AGO",
      "value": 797122
    },
    {
      "id": "ALB",
      "value": 489308
    },
    {
      "id": "ARE",
      "value": 470178
    },
    {
      "id": "ARG",
      "value": 860161
    },
    {
      "id": "ARM",
      "value": 421342
    },
    {
      "id": "ATA",
      "value": 941091
    },
    {
      "id": "ATF",
      "value": 411481
    },
    {
      "id": "AUT",
      "value": 975648
    },
    {
      "id": "AZE",
      "value": 335887
    },
    {
      "id": "BDI",
      "value": 630865
    },
    {
      "id": "BEL",
      "value": 284033
    },
    {
      "id": "BEN",
      "value": 517385
    },
    {
      "id": "BFA",
      "value": 806919
    },
    {
      "id": "BGD",
      "value": 226150
    },
    {
      "id": "BGR",
      "value": 802804
    },
    {
      "id": "BHS",
      "value": 890503
    },
    {
      "id": "BIH",
      "value": 911641
    },
    {
      "id": "BLR",
      "value": 311721
    },
    {
      "id": "BLZ",
      "value": 924884
    },
    {
      "id": "BOL",
      "value": 177842
    },
    {
      "id": "BRN",
      "value": 698315
    },
    {
      "id": "BTN",
      "value": 628708
    },
    {
      "id": "BWA",
      "value": 466328
    },
    {
      "id": "CAF",
      "value": 145382
    },
    {
      "id": "CAN",
      "value": 250445
    },
    {
      "id": "CHE",
      "value": 718003
    },
    {
      "id": "CHL",
      "value": 227310
    },
    {
      "id": "CHN",
      "value": 453246
    },
    {
      "id": "CIV",
      "value": 613261
    },
    {
      "id": "CMR",
      "value": 826967
    },
    {
      "id": "COG",
      "value": 946467
    },
    {
      "id": "COL",
      "value": 167777
    },
    {
      "id": "CRI",
      "value": 81913
    },
    {
      "id": "CUB",
      "value": 442789
    },
    {
      "id": "-99",
      "value": 809728
    },
    {
      "id": "CYP",
      "value": 492682
    },
    {
      "id": "CZE",
      "value": 930468
    },
    {
      "id": "DEU",
      "value": 165163
    },
    {
      "id": "DJI",
      "value": 935536
    },
    {
      "id": "DNK",
      "value": 277600
    },
    {
      "id": "DOM",
      "value": 400712
    },
    {
      "id": "DZA",
      "value": 317897
    },
    {
      "id": "ECU",
      "value": 478083
    },
    {
      "id": "EGY",
      "value": 910043
    },
    {
      "id": "ERI",
      "value": 897192
    },
    {
      "id": "ESP",
      "value": 659176
    },
    {
      "id": "EST",
      "value": 977519
    },
    {
      "id": "ETH",
      "value": 1576
    },
    {
      "id": "FIN",
      "value": 124773
    },
    {
      "id": "FJI",
      "value": 63838
    },
    {
      "id": "FLK",
      "value": 531943
    },
    {
      "id": "FRA",
      "value": 811486
    },
    {
      "id": "GAB",
      "value": 512351
    },
    {
      "id": "GBR",
      "value": 792822
    },
    {
      "id": "GEO",
      "value": 998802
    },
    {
      "id": "GHA",
      "value": 451985
    },
    {
      "id": "GIN",
      "value": 522368
    },
    {
      "id": "GMB",
      "value": 734396
    },
    {
      "id": "GNB",
      "value": 884546
    },
    {
      "id": "GNQ",
      "value": 205357
    },
    {
      "id": "GRC",
      "value": 142944
    },
    {
      "id": "GTM",
      "value": 56436
    },
    {
      "id": "GUY",
      "value": 758987
    },
    {
      "id": "HND",
      "value": 141507
    },
    {
      "id": "HRV",
      "value": 263917
    },
    {
      "id": "HTI",
      "value": 956658
    },
    {
      "id": "HUN",
      "value": 12565
    },
    {
      "id": "IDN",
      "value": 356981
    },
    {
      "id": "IND",
      "value": 20642
    },
    {
      "id": "IRL",
      "value": 281967
    },
    {
      "id": "IRN",
      "value": 834214
    },
    {
      "id": "IRQ",
      "value": 321015
    },
    {
      "id": "ISL",
      "value": 160903
    },
    {
      "id": "ISR",
      "value": 529635
    },
    {
      "id": "ITA",
      "value": 974595
    },
    {
      "id": "JAM",
      "value": 838092
    },
    {
      "id": "JOR",
      "value": 656555
    },
    {
      "id": "JPN",
      "value": 376105
    },
    {
      "id": "KAZ",
      "value": 449042
    },
    {
      "id": "KEN",
      "value": 465137
    },
    {
      "id": "KGZ",
      "value": 63284
    },
    {
      "id": "KHM",
      "value": 708953
    },
    {
      "id": "OSA",
      "value": 668144
    },
    {
      "id": "KWT",
      "value": 657067
    },
    {
      "id": "LAO",
      "value": 747231
    },
    {
      "id": "LBN",
      "value": 144117
    },
    {
      "id": "LBR",
      "value": 82125
    },
    {
      "id": "LBY",
      "value": 916766
    },
    {
      "id": "LKA",
      "value": 308404
    },
    {
      "id": "LSO",
      "value": 567548
    },
    {
      "id": "LTU",
      "value": 481853
    },
    {
      "id": "LUX",
      "value": 516628
    },
    {
      "id": "LVA",
      "value": 851156
    },
    {
      "id": "MAR",
      "value": 306894
    },
    {
      "id": "MDA",
      "value": 234783
    },
    {
      "id": "MDG",
      "value": 48935
    },
    {
      "id": "MEX",
      "value": 348801
    },
    {
      "id": "MKD",
      "value": 580414
    },
    {
      "id": "MLI",
      "value": 45116
    },
    {
      "id": "MMR",
      "value": 10223
    },
    {
      "id": "MNE",
      "value": 132071
    },
    {
      "id": "MNG",
      "value": 822095
    },
    {
      "id": "MOZ",
      "value": 129423
    },
    {
      "id": "MRT",
      "value": 40620
    },
    {
      "id": "MWI",
      "value": 293687
    },
    {
      "id": "MYS",
      "value": 609280
    },
    {
      "id": "NAM",
      "value": 629701
    },
    {
      "id": "NCL",
      "value": 956661
    },
    {
      "id": "NER",
      "value": 14417
    },
    {
      "id": "NGA",
      "value": 151349
    },
    {
      "id": "NIC",
      "value": 675269
    },
    {
      "id": "NLD",
      "value": 955466
    },
    {
      "id": "NOR",
      "value": 385232
    },
    {
      "id": "NPL",
      "value": 370546
    },
    {
      "id": "NZL",
      "value": 514782
    },
    {
      "id": "OMN",
      "value": 580277
    },
    {
      "id": "PAK",
      "value": 910465
    },
    {
      "id": "PAN",
      "value": 381397
    },
    {
      "id": "PER",
      "value": 432787
    },
    {
      "id": "PHL",
      "value": 874926
    },
    {
      "id": "PNG",
      "value": 755348
    },
    {
      "id": "POL",
      "value": 934723
    },
    {
      "id": "PRI",
      "value": 217995
    },
    {
      "id": "PRT",
      "value": 348471
    },
    {
      "id": "PRY",
      "value": 636498
    },
    {
      "id": "QAT",
      "value": 514874
    },
    {
      "id": "ROU",
      "value": 800492
    },
    {
      "id": "RUS",
      "value": 622053
    },
    {
      "id": "RWA",
      "value": 77206
    },
    {
      "id": "ESH",
      "value": 307342
    },
    {
      "id": "SAU",
      "value": 462861
    },
    {
      "id": "SDN",
      "value": 712847
    },
    {
      "id": "SDS",
      "value": 759796
    },
    {
      "id": "SEN",
      "value": 455686
    },
    {
      "id": "SLB",
      "value": 27594
    },
    {
      "id": "SLE",
      "value": 895064
    },
    {
      "id": "SLV",
      "value": 174827
    },
    {
      "id": "ABV",
      "value": 673956
    },
    {
      "id": "SOM",
      "value": 151920
    },
    {
      "id": "SRB",
      "value": 281528
    },
    {
      "id": "SUR",
      "value": 869371
    },
    {
      "id": "SVK",
      "value": 445990
    },
    {
      "id": "SVN",
      "value": 842329
    },
    {
      "id": "SWZ",
      "value": 280710
    },
    {
      "id": "SYR",
      "value": 269602
    },
    {
      "id": "TCD",
      "value": 13846
    },
    {
      "id": "TGO",
      "value": 433987
    },
    {
      "id": "THA",
      "value": 683104
    },
    {
      "id": "TJK",
      "value": 386149
    },
    {
      "id": "TKM",
      "value": 105016
    },
    {
      "id": "TLS",
      "value": 368061
    },
    {
      "id": "TTO",
      "value": 828467
    },
    {
      "id": "TUN",
      "value": 618665
    },
    {
      "id": "TUR",
      "value": 676087
    },
    {
      "id": "TWN",
      "value": 99581
    },
    {
      "id": "TZA",
      "value": 416072
    },
    {
      "id": "UGA",
      "value": 91766
    },
    {
      "id": "UKR",
      "value": 875736
    },
    {
      "id": "URY",
      "value": 229751
    },
    {
      "id": "USA",
      "value": 128317
    },
    {
      "id": "UZB",
      "value": 55178
    },
    {
      "id": "VEN",
      "value": 322504
    },
    {
      "id": "VNM",
      "value": 229106
    },
    {
      "id": "VUT",
      "value": 180348
    },
    {
      "id": "PSE",
      "value": 33589
    },
    {
      "id": "YEM",
      "value": 126681
    },
    {
      "id": "ZAF",
      "value": 634479
    },
    {
      "id": "ZMB",
      "value": 56573
    },
    {
      "id": "ZWE",
      "value": 285969
    },
    {
      "id": "KOR",
      "value": 97039
    }
  ]
}
