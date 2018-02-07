const initialState = {
  isFetching: false,
  data: {
    vehicles: {},
    types: {},
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_INVENTORY':
      return {
        ...state,
        isFetching: true,
        data: {}
      };

    case 'FETCH_INVENTORY_SUCCESS':
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };

    default:
      return state;
  }
};
