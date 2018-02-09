import ACTION_TYPES from '../actions/types';

const initialState = {
  isFetching: false,
  data: {
    vehicles: {},
    types: {},
    brands: {},
    colors: {},
  },
  pageSize: 5,
  page: 0,
  errors: [],
  filters: {
    types: [],
    brands: [],
    colors: [],
  }
};

export const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_INVENTORY:
      return {
        ...state,
        isFetching: true,
        data: initialState.data,
        pageSize: initialState.pageSize,
        page: initialState.page,
        errors: [],
      };

    case ACTION_TYPES.FETCH_INVENTORY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        pageSize: initialState.pageSize,
        page: initialState.page,
        errors: [],
      };

    case ACTION_TYPES.FETCH_INVENTORY_FAILURE:
      return {
        ...state,
        isFetching: false,
        data: initialState.data,
        pageSize: initialState.pageSize,
        page: initialState.page,
        errors: [action.errors],
      };

    case ACTION_TYPES.SET_FILTER:
      const filters = {...state.filters};
      filters[action.filterName] = action.filterValues;
      return {
        ...state,
        pageSize: initialState.pageSize,
        page: initialState.page,
        filters,
      };

    case ACTION_TYPES.CHANGE_PAGE:
      return {
        ...state,
        page: action.page,
      };

    default:
      return state;
  }
};
