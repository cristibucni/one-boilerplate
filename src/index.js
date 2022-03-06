import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, ReactReduxContext } from 'react-redux';
import store from 'store';
import { ConnectedRouter } from 'connected-react-router';
import history from 'utils/history';
import App from './app';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

ReactDOM.render(
  <Provider store={store} context={ReactReduxContext}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
