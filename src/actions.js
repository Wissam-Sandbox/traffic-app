import {requestData} from './service/dataService';

const fetchVehicles = () => {
  return dispatch => {
    dispatch({
      type: 'REQUEST_VEHICLES',
    });
    requestData()
      .then(
        data => {
          dispatch({
            type: 'REQUEST_VEHICLES_SUCCESS',
            data: data,
          });
        }
      );
  };
};

export {
  fetchVehicles,
}
