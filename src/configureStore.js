import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { inventoryReducer } from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createHistory();

const configureStore = () => {
  return createStore(
    combineReducers({
      router: routerReducer,
      inventory: inventoryReducer,
    }),
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware,
        routerMiddleware(history),
      )
    )
  );
};

export {
  history,
  configureStore,
};
