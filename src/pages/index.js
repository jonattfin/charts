import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import { Header } from '../components';

// import styles from './styles.module.scss';

const Home = lazy(() => import('./home'));

export default (props) => (
  <Router>
    <div>
      <Header {...props} />

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </div>
  </Router>
)
