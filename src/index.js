import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import registerServiceWorker from './system/registerServiceWorker';
import { history, configureStore } from './configureStore';
import RootComponent from './components/RootComponent';

registerServiceWorker();

ReactDOM.render(
  <Provider store={configureStore()}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={RootComponent} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
