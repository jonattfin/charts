
import _ from 'lodash';
import moment from 'moment';

import { UradData, PulseData } from './data';
import { withDelay } from './tools';

const TYPES = ['pm10', 'pm25', 'temperature', 'humidity'];

export default class MockApi {
  static async fetchMeasures() {
    const data = await Promise.all([
      withDelay(transformUradData(UradData)),
      withDelay(transformPulseData(PulseData)),
    ]);

    return _.concat(...data);
  }
}

function transformUradData(UradData) {
  return []; // TODO
}

function transformPulseData(data) {
  const groupedByDay = _.groupBy(data, item => moment(item.stamp).format('YYYY-MM-DD'));

  const results = [];
  _.forEach(groupedByDay, (dayValues, day) => {

    const groupedBySensorId = _.groupBy(dayValues, item => item.sensorId);

    _.forEach(groupedBySensorId, (sensorValues, sensorId) => {

      const obj = {};
      TYPES.forEach(type => {
        const values = sensorValues
          .filter(item => item.type === type)
          .map(item => _.toNumber(item.value));

        obj[type] = values.reduce((prev, current) => prev + current, 0) / values.length;
      });

      results.push({
        day,
        sensorId,
        position: _.first(sensorValues).position.split(','),
        ...obj,
      });

    });
  });

  debugger;
  return results;
}

