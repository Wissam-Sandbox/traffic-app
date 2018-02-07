import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import dataReducer from './reducers';

const configureStore = () => {
  return createStore(
    dataReducer,
    applyMiddleware(
      thunkMiddleware
    )
  );
};

export {
  configureStore,
};
