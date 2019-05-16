
import _ from 'lodash';

import { getLimits } from './limits';

const dustTypes = ['pm10', 'pm25'];
const otherTypes = ['temperature', 'humidity'];

function toSunburstFormat(data) {
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

function toMapFormat(data) {
  return data
    .map(item => {
      const { sensorId, position, pm25, pm10, source } = item;
      return { sensorId, position, pm25, pm10, source }
    });

}

function toLineFormat(data, type) {
  const groupedBySensorId = _.groupBy(data, item => item.sensorId);

  const results = [];
  _.forEach(groupedBySensorId, (values, key) => {
    const obj = {
      id: key,
      data: values.map(item => ({ x: item.day, y: item[type] }))
    }
    results.push(obj);
  });

  return results;
}

function toPieFormat(data, type) {
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

export default {
  dustTypes,
  otherTypes,
  toSunburstFormat,
  toMapFormat,
  toLineFormat,
  toPieFormat,
}
