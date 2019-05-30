import React from 'react'
import {
  Button,
  Position,
  Popover,
  Menu,
  MenuItem,
} from "@blueprintjs/core";
import {
  Route,
} from 'react-router-dom'

import styles from './styles.module.scss';

const menu = createMenu();

export default ({ model = ({ payload: {} }), }) => {
  return (
    <div className={styles.header}>
      <Popover content={menu} position={Position.LEFT}>
        <Button icon="menu" />
      </Popover>
    </div>
  );
};

function createMenu() {
  const onClick = (history, url) => () => history.push(url);

  return (
    <Route render={({ history }) => (
      <Menu>
        <MenuItem icon={'home'} text={'Home'} onClick={onClick(history, '/')} />
        {/* <MenuItem icon={'build'} text={'Clean Air'} onClick={onClick(history, '/clean-air')} /> */}
      </Menu>
    )}>
    </Route>
  );
}
