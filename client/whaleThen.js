import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import App from './src/Main';
import Single from './src/Single';
import Grid from './src/Grid';

import store, { history } from './src/store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <IndexRoute component={Grid} />
      <Route path="/view/:eventId" component={Single} />
    </Router>
  </Provider>
);

render(router, document.getTimelineById('app'));
