import queryString from 'query-string';
import { push } from 'react-router-redux';
import ACTION_TYPES from './types';
import { requestData } from '../remote';
import { indexVehicles } from '../utils';
import { getFiltersFromUrlSelector } from '../selectors/routing';

const fetchInventorySuccess = (data) => ({
  type: ACTION_TYPES.FETCH_INVENTORY_SUCCESS,
  data,
});

const fetchInventoryFailure = (error) => ({
  type: ACTION_TYPES.FETCH_INVENTORY_FAILURE,
  error,
});

const fetchInventory = () => {
  return (dispatch, getState) => {
    dispatch({
      type: ACTION_TYPES.FETCH_INVENTORY,
    });
    requestData()
      .then(
        data => {
          dispatch(fetchInventorySuccess(indexVehicles(data)));
          dispatch(setFilters(getFiltersFromUrlSelector(getState())));
        },
        error => {
          dispatch(fetchInventoryFailure(error));
        }
      );
  };
};

const setFilters = (filters) => {
  return (dispatch, getState) => {
    dispatch({
      type: ACTION_TYPES.SET_FILTER,
      filters,
    });

    dispatch(
      push(`search?${queryString.stringify(getState().inventory.filters, {arrayFormat: 'bracket'})}`)
    );
  }
};

const changePage = (page) => ({
  type: ACTION_TYPES.CHANGE_PAGE,
  page,
});

export {
  fetchInventorySuccess,
  fetchInventoryFailure,
  fetchInventory,
  setFilters,
  changePage,
}
