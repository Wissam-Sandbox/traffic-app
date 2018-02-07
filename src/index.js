import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';
import { history, configureStore } from './configureStore';
import RootComponent from './components/RootComponent';

registerServiceWorker();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={RootComponent} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
