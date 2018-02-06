import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import RootComponent from './components/RootComponent';
import dataReducer from './reducers';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

registerServiceWorker();

const store = createStore(
  dataReducer,
  applyMiddleware(
    thunkMiddleware
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" render={() => (<RootComponent/>)} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
