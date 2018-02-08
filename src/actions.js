import queryString from 'query-string';
import { push } from 'react-router-redux';
import { requestData } from './remote/dataService';
import { indexVehicles } from './utils';
import { getFiltersFromUrlSelector } from './selectors';

const fetchInventorySuccess = (data) => ({
  type: 'FETCH_INVENTORY_SUCCESS',
  data,
});

const fetchInventoryFailure = (error) => ({
  type: 'FETCH_INVENTORY_FAILURE',
  error,
});

const fetchInventory = () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'FETCH_INVENTORY',
    });
    requestData()
      .then(
        data => {
          dispatch(
            fetchInventorySuccess(indexVehicles(data))
          );

          // @todo: Does this belong here?!
          const filters = getFiltersFromUrlSelector(getState());
          Object.keys(filters).forEach(filterName => {
            dispatch(setFilters(filterName, filters[filterName]));
          });
        },
        error => {
          dispatch(
            fetchInventoryFailure(error)
          );
        }
      );
  };
};

const setFilters = (filterName, filterValues = []) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'SET_FILTER',
      filterName,
      filterValues,
    });

    dispatch(
      push(`search?${queryString.stringify(getState().inventory.filters, {arrayFormat: 'bracket'})}`)
    );
  }
};

const changePage = (page) => ({
  type: 'CHANGE_PAGE',
  page,
});

export {
  fetchInventory,
  setFilters,
  changePage,
}
