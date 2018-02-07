import {requestData} from './service/dataService';

const indexData = (data) => {
  return data.reduce((matrix, item) => {
    matrix.vehicles[item.id] = item;
    return matrix;
  }, {
    vehicles: {},
  });
};

const fetchInventory = () => {
  return dispatch => {
    dispatch({
      type: 'FETCH_INVENTORY',
    });
    requestData()
      .then(
        data => {
          dispatch({
            type: 'FETCH_INVENTORY_SUCCESS',
            data: indexData(data),
          });
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
