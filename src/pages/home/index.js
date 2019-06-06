import React from 'react';

import {
  Spinner,
  Intent,
} from "@blueprintjs/core";

import { Pie, Line, Map, Bar, Sunburst, HeatMap } from './components';

import api from '../../api';
import * as adapters from './adapters';
import styles from './styles.module.scss';

export default class App extends React.Component {
  state = {
    data: [],
    selectedOption: 0,
    isLoading: false,
  }

  componentDidMount() {
    const f = api.getLastDay;
    this.reload(f, 0);
  }

  reload = async (f, option) => {
    try {
      this.setState({ isLoading: true });

      let data = await f();
      this.setState({ data, selectedOption: option });

    } finally {
      this.setState({ isLoading: false });
    }
  }

  renderWhileLoading = (selectedOption) => {
    return (
      <div className={styles.clean_air}>
        {this.renderSubmenu(selectedOption)}
        <div className={styles.loading_screen}>
          <Spinner intent={Intent.WARNING} size={Spinner.SIZE_LARGE} />
        </div>
      </div>
    );
  }

  onOptionChanged = (option) => () => {
    let f;
    if (option === 0) {
      f = api.getLastDay;
    } else if (option === 1) {
      f = api.getLastWeek;
    }

    this.reload(f, option);
  }

  renderSubmenu = (selectedOption) => {
    return (
      <div className={styles.submenu_screen}>
        {['Last day', 'Last week'].map((option, index) =>
          <div key={`option_${index}`} className={index === selectedOption ? styles.active : styles.inactive} onClick={this.onOptionChanged(index)}>{option}</div>)}
      </div>
    )
  }

  render() {
    const { data, isLoading, selectedOption } = this.state;

    if (isLoading) {
      return this.renderWhileLoading(selectedOption);
    }

    return (
      <div className={styles.clean_air}>
        {this.renderSubmenu(selectedOption)}
        <div className={styles.map_screen}>
          <Map data={adapters.toMapFormat(data)} originalData={data} />
        </div>
        {
          adapters.dustTypes.map(type => (
            <div key={`dust_${type}`} className={styles.line_screen}>
              <Line {...adapters.toLineFormat(data, type, `${type} µg/m3`)} />
            </div>
          ))
        }
        <div className={styles.line_screen}>
          {adapters.otherTypes.map(type => (
            <Line key={`other_${type}`} {...adapters.toLineFormat(data, type, type)} />
          ))}
        </div>
        <div key={`dust_bar`} className={styles.bar_screen}>
          <Bar data={adapters.toBarFormat(data)}></Bar>
        </div>
        <div className={styles.heatmap_screen}>
          {adapters.dustTypes.map(type => (
            <HeatMap data={adapters.toHeatmapFormat(data, type)} />
          ))}
        </div>
        <div className={styles.pie_screen}>
          {adapters.dustTypes.map(type => (
            <Pie key={`pie_${type}`} data={adapters.toPieFormat(data, type)} />
          ))}
        </div>
        <div className={styles.sunburst_screen}>
          <Sunburst data={adapters.toSunburstFormat(data)} />
        </div>
        <div className={styles.scatterplot_screen}>
          {/* <ScatterPlot /> */}
        </div>
      </div>
    )
  }
}
