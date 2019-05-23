
import _ from 'lodash';

import { getLimits } from './limits';

export const dustTypes = ['pm10', 'pm25'];
export const otherTypes = ['temperature', 'humidity'];

export function toSunburstFormat(data) {
  const groupedByCity = _.groupBy(data, item => item.city);

  const rootObject = {
    name: 'Planet Earth',
    children: [],
  };

  _.forEach(groupedByCity, (values, key) => {
    const parents = [];
    dustTypes.forEach(type => {
      const children = [];

      const limits = getLimits(type);
      for (let i = 0; i < limits.length; i++) {
        const element = limits[i];
        const nextElementValue = limits[i + 1] ? limits[i + 1].val : Number.POSITIVE_INFINITY;

        const numberOfElements = values.filter(d => element.val <= d[type] && d[type] < nextElementValue).length;
        children.push({ name: element.label, color: element.color, loc: numberOfElements });
      }

      parents.push({ name: type, children });
    })

    rootObject.children.push({
      name: key,
      children: parents,
    });
  });

  return rootObject;
}

export function toMapFormat(data) {
  return _.uniqBy(data, (item) => item.sensorId)
    .map(item => {
      const { sensorId, position, pm25, pm10, source } = item;
      return { sensorId, position, pm25, pm10, source }
    });

}

export function toLineFormat(data, type, legend) {
  const groupedBySensorId = _.groupBy(data, item => item.sensorId);

  const limits = getLimits(type);
  const useLogScale = type === 'pm10' || type === 'pm25';

  const lineObj = {
    axisLeft: {
      tickValues: limits.map(({ val }) => val),
      legend,
    },
    axisBottom: {
      legend: 'hours',
    },
    useLogScale
  }

  const results = []
  _.forEach(groupedBySensorId, (values, key) => {
    let newData = values.map(item => ({ x: item.time, y: item[type] }));

    // when using logarithmic scale the values have to be greater than 0
    if (useLogScale) {
      newData = newData.filter(item => item.y > 0);
    }

    const obj = {
      id: key,
      data: newData,
      ...lineObj
    };

    results.push(obj);
  })

  return { data: results, ...lineObj };
}

export function toPieFormat(data, type) {
  const result = [];

  const limits = getLimits(type);
  for (let i = 0; i < limits.length; i++) {
    const element = limits[i];
    const nextElementValue = limits[i + 1] ? limits[i + 1].val : Number.POSITIVE_INFINITY;

    result.push({
      value: data.filter(d => element.val <= d[type] && d[type] < nextElementValue).length,
      id: element.label,
      label: element.label
    });
  }

  return result;
}
