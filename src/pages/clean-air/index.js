import React from 'react';
import _ from 'lodash';
import moment from 'moment';

import { Pie, Line, Map } from './components';

import api from '../../api';
import styles from './styles.module.scss';

export default class App extends React.Component {
  state = {
    data: [],
    isLoading: false,
  }

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });

      const data = await api.fetchMeasures();
      this.setState({ data });

    } catch {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.clean_air}>
        <div className={styles.first_screen}>
          {['pm10', 'pm25'].map(type => (
            <Pie key={`pie_${type}`} data={getPieFormat(data, type)} />
          ))}
        </div>
        <div className={styles.second_screen}>
          <Line data={getLineFormat(data, 'pm25')} />
        </div>
        <div className={styles.third_screen}>
          <Line data={getLineFormat(data, 'pm10')} />
        </div>
        <div className={styles.forth_screen}>
          <Map data={getMapFormat(data)} />
        </div>
      </div>
    )
  }
}

function getMapFormat(data) {
  const isCorrect = ({ latitude, longitude }) => latitude !== null && longitude !== null;

  const result = data
    .filter(isCorrect)
    .map(item => {
      const { latitude, longitude } = item;
      return { latitude, longitude }
    });

  return result;
}

function getLineFormat(data, type) {
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

function getPieFormat(data, type) {
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
