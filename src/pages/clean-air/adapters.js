
import _ from 'lodash';

import { getLimits } from './limits';

export const dustTypes = ['pm10', 'pm25'];
export const otherTypes = ['temperature', 'humidity'];

export function toBumpFormat(data) {
}

export function toStreamFormat(data) {

}

export function toBarFormat(data) {
  const filtered = _.take(_.orderBy(data, ['pm10'], ['desc']), 10)
    .map(({ city, pm10, pm25, temperature, humidity }, index) => ({ pm10, pm25, humidity, temperature, city: `${city} ${index}` }));

  return {
    keys: ['pm10', 'pm25', 'temperature', 'humidity'],
    items: filtered,
  };
}

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

export function toLineFormat(data, type) {
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
