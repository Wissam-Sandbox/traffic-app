const initialState = {
  isFetchingVehicles: false,
  vehicles: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_VEHICLES':
      return {
        ...state,
        vehicles: [],
        isFetchingVehicles: true,
      };

    case 'REQUEST_VEHICLES_SUCCESS':
      return {
        ...state,
        vehicles: action.data,
        isFetchingVehicles: false,
      };

    default:
      return state;
  }
};
