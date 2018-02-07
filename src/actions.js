import {requestData} from './service/dataService';

const fetchInventory = () => {
  return dispatch => {
    dispatch({
      type: 'FETCH_INVENTORY',
    });
    requestData()
      .then(
        data => {
          const normalized = data.reduce((matrix, item) => {
            const { id, type } = item;
            matrix.vehicles[id] = item;

            if (!matrix.types[type]) {
              matrix.types[type] = [];
            }
            matrix.types[type].push(id);

            return matrix;
          }, {
            vehicles: {},
            types: {},
          });

          console.log(normalized);

          dispatch({
            type: 'FETCH_INVENTORY_SUCCESS',
            data: normalized,
          });
        }
      );
  };
};

export {
  fetchInventory,
}
