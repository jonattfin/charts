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
  const pages = [
    { url: '/', text: 'Home', icon: "home", },
    { url: '/clean-air', text: 'Clean Air', icon: "build", },
  ];

  const onClick = (history, url) => () => history.push(url);

  return (
    <Menu>
      <Route render={({ history }) => (
        <React.Fragment>
          {pages.map(({ icon, text, url }, index) => <MenuItem key={`menuItem_${index}`} icon={icon} text={text} onClick={onClick(history, url)} />)}
        </React.Fragment>
      )}>
      </Route>
    </Menu>
  );
}
