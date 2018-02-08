const initialState = {
  isFetching: false,
  data: {
    vehicles: {},
    types: {},
    brands: {},
    colors: {},
  },
  errors: [],
  filters: {
    types: [],
    brands: [],
    colors: [],
  }
};

export const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_INVENTORY':
      return {
        ...state,
        isFetching: true,
        data: initialState.data,
        errors: [],
      };

    case 'FETCH_INVENTORY_SUCCESS':
      return {
        ...state,
        isFetching: false,
        data: action.data,
        errors: [],
      };

    case 'FETCH_INVENTORY_FAILURE':
      return {
        ...state,
        isFetching: false,
        data: initialState.data,
        errors: [action.errors],
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
