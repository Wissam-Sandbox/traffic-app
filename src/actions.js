import {requestData} from './service/dataService';

const indexData = (data) => {
  return data.reduce((matrix, item) => {
    matrix.vehicles[item.id] = item;
    return matrix;
  }, {
    vehicles: {},
  });
};

const fetchInventorySuccess = (data) => ({
  type: 'FETCH_INVENTORY_SUCCESS',
  data,
});

const fetchInventoryFailure = (error) => ({
  type: 'FETCH_INVENTORY_FAILURE',
  error,
});

const fetchInventory = () => {
  return dispatch => {
    dispatch({
      type: 'FETCH_INVENTORY',
    });
    requestData()
      .then(
        data => {
          dispatch(
            fetchInventorySuccess(indexData(data))
          );
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
  return {
    type: 'SET_FILTERS',
    filterName,
    filterValues,
  };
};

export {
  fetchInventory,
  setFilters,
}
