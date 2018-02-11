import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ACTION_TYPES from '../types';
import {
  fetchInventorySuccess,
  fetchInventoryFailure,
  fetchInventory,
  setFilters,
  changePage,
} from '../creators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('App action creators', () => {

  describe('fetchInventorySuccess', () => {
    it('should return the correct type and passed data', () => {
      const expected = {
        type: ACTION_TYPES.FETCH_INVENTORY_SUCCESS,
        data: { someKey: 'someValue' }
      };
      expect(fetchInventorySuccess(expected.data)).toEqual(expected);
    })
  });

  describe('fetchInventoryFailure', () => {
    it('should return the correct type and passed errors', () => {
      const expected = {
        type: ACTION_TYPES.FETCH_INVENTORY_FAILURE,
        error: [{ errorKey: 'errorValue' }]
      };
      expect(fetchInventoryFailure(expected.error)).toEqual(expected);
    })
  });

  describe('fetchInventory', () => {
    it('should dispatch FETCH_INVENTORY immediately before requesting data', () => {
      const store = mockStore({});
      store.dispatch(fetchInventory());
      expect(store.getActions()).toEqual([{
        type: ACTION_TYPES.FETCH_INVENTORY,
      }]);
    });
  });

  describe('setFilters', () => {
    it('should return the correct type and passed filters', () => {
      const expected = {
        type: ACTION_TYPES.SET_FILTER,
        filters: {
          filter1: 'val1',
          filter2: 'val2',
        }
      };
      const store = mockStore({
        inventory:  { filters: {} },
      });
      store.dispatch(setFilters(expected.filters));
      console.log(store.getActions());
      // ...
    })
  });

});
