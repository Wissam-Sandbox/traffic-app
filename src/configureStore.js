import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { inventoryReducer } from './reducers';

const history = createHistory();

const configureStore = () => {
  return createStore(
    combineReducers({
      router: routerReducer,
      inventory: inventoryReducer,
    }),
    applyMiddleware(
      thunkMiddleware,
      routerMiddleware(history),
    )
  );
};

export {
  history,
  configureStore,
};
