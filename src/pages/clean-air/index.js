import React from 'react';

import {
  Spinner,
  Intent,
} from "@blueprintjs/core";

import { Pie, Line, Map, Sunburst } from './components';

import api from '../../api';
import adapters from './adapters';
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

    } finally {
      this.setState({ isLoading: false });
    }
  }

  renderWhileLoading = () => {
    return (
      <div className={styles.clean_air}>
        <div className={styles.loading_screen}>
          <Spinner intent={Intent.WARNING} size={Spinner.SIZE_LARGE} />
        </div>
      </div>
    );
  }

  render() {
    const { data, isLoading } = this.state;

    if (isLoading) {
      return this.renderWhileLoading();
    }

    return (
      <div className={styles.clean_air}>
        <div className={styles.map_screen}>
          <Map data={adapters.toMapFormat(data)} />
        </div>
        <div className={styles.pie_screen}>
          {adapters.dustTypes.map(type => (
            <Pie key={`pie_${type}`} data={adapters.toPieFormat(data, type)} />
          ))}
        </div>
        <div className={styles.line_screen}>
          {adapters.dustTypes.map(type => (
            <Line key={`dust_${type}`} data={adapters.toLineFormat(data, type).filter(item => item[type] !== null)} />
          ))}
        </div>
        <div className={styles.line_screen}>
          {adapters.otherTypes.map(type => (
            <Line key={`other_${type}`} data={adapters.toLineFormat(data, type).filter(item => item[type] !== null)} />
          ))}
        </div>
        <div className={styles.map_sunburst}>
          <Sunburst data={adapters.toSunburstFormat(data)} />
        </div>
      </div>
    )
  }
}
