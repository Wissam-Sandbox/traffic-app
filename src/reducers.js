const initialState = {
  isFetching: false,
  data: {
    vehicles: {},
    types: {},
    brands: {},
    colors: {},
  },
  filters: {
    types: [],
    brands: [],
    colors: ['red'],
  }
};

export const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_INVENTORY':
      return {
        ...state,
        isFetching: true,
        data: initialState.data,
      };

    case 'FETCH_INVENTORY_SUCCESS':
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };

    case 'SET_FILTERS':
      const filters = {...state.filters};
      filters[action.filterName] = action.filterValues;
      return {
        ...state,
        filters,
      };

    default:
      return state;
  }
};
