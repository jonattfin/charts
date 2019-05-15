import _ from 'lodash';

import data from './data';
import { withDelay } from './tools';

export default class MockApi {
  static async fetchMeasures() {
    return withDelay(transform(data));
  }
}

function transform(data) {
  // const isCorrect = true;
  const isCorrect = ({ country, city }) => _.toLower(country) === 'ro';

  const result = data
    .filter(isCorrect)
    .map(item => {
      const {
        id, latitude, longitude, city, country, timelast,
        avg_pm10, avg_pm25, avg_temperature, avg_humidity,
      } = item;

      return {
        id,
        latitude,
        longitude,
        city,
        country,
        timelast,
        // measurements
        avg_pm25,
        avg_pm10,
        avg_temperature,
        avg_humidity
      };
    });
  
  return result;
}

