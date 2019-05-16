
import _ from 'lodash';
import moment from 'moment';

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

        const numberOfElements = values.filter(d => d[`avg_${type}`] > element.val && d[`avg_${type}`] < nextElementValue).length;
        children.push({ name: element.label, color: element.color, loc: numberOfElements });
      }

      parents.push({ name: type, children });
    })

    rootObject.children.push({
      name: key,
      children: parents,
    });
  });

  debugger;
  return rootObject;
}

function toMapFormat(data) {
  const isCorrect = ({ latitude, longitude }) => latitude !== null && longitude !== null;

  const result = data
    .filter(isCorrect)
    .map(item => {
      const { latitude, longitude } = item;
      return { latitude, longitude }
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
      value: data.filter(d => d[`avg_${type}`] > element.val && d[`avg_${type}`] < nextElementValue).length,
      id: element.label,
      label: element.label
    });
  }

  return result;
}

function getLimits(type) {
  const limits = []

  switch (type) {
    case 'pm25':
      limits.push(...[
        { val: 0, color: 'hsl(263, 70%, 50%)', label: 'Good' },
        // { val: 15, color: 'hsl(263, 70%, 50%)', label: 'Good' },
        { val: 30, color: 'hsl(231, 70%, 50%)', label: 'Moderate' },
      ]);
      break;
    case 'pm10':
      limits.push(...[
        { val: 0, color: 'hsl(263, 70%, 50%)', label: 'Good' },
        // { val: 25, color: 'hsl(263, 70%, 50%)', label: 'Good' },
        { val: 51, color: 'hsl(231, 70%, 50%)', label: 'Moderate' },
        { val: 101, color: 'hsl(155, 70%, 50%)', label: 'Unhealthy' },
        { val: 201, color: 'hsl(63, 70%, 50%)', label: 'Very Unhealthy' },
        { val: 301, color: 'hsl(105, 70%, 50%)', label: 'Hazardous' },
      ]);
      break;
    default:
      break;
  }

  return limits;
}

export default {
  dustTypes,
  otherTypes,
  toSunburstFormat,
  toMapFormat,
  toLineFormat,
  toPieFormat,
}
