
import _ from 'lodash';
import moment from 'moment';

import { getLimits } from './limits';

const dustTypes = ['pm10', 'pm25'];
const otherTypes = ['temperature', 'humidity'];

function toSunburstFormat(data, country = 'RO') {
  const groupedByCity = _.groupBy(data, item => item.city);

  const rootObject = {
    name: country,
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

        const numberOfElements = values.filter(d => element.val <= d[`avg_${type}`] && d[`avg_${type}`] < nextElementValue).length;
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
  const isCorrect = ({ latitude, longitude }) => latitude !== null && longitude !== null;

  const result = data
    .filter(isCorrect)
    .map(item => {
      const { latitude, longitude, id, avg_pm25, avg_pm10 } = item;
      return { latitude, longitude, id, avg_pm25, avg_pm10 }
    });

  return result;
}

function toLineFormat(data, type) {
  const groupedBySensorId = _.groupBy(data, item => item.id);

  const results = [];
  _.forEach(groupedBySensorId, (values, key) => {
    const obj = {
      id: key,
      data:
        values.filter(item => item[`avg_${type}`] > 0 && item.timelast !== null)
          .map(item => ({
            x: moment.unix(item.timelast).format('YYYY-MM-DD'),
            y: item[`avg_${type}`]
          }))
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
      value: data.filter(d => element.val <= d[`avg_${type}`] && d[`avg_${type}`] < nextElementValue).length,
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
