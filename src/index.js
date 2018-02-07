import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import {configureStore} from './configureStore';
import RootComponent from './components/RootComponent';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

registerServiceWorker();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={RootComponent} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
