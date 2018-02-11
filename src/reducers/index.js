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
        errors: initialState.errors,
      };

    case ACTION_TYPES.FETCH_INVENTORY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        errors: initialState.errors,
        pageSize: initialState.pageSize,
        page: initialState.page,
      };

    case ACTION_TYPES.FETCH_INVENTORY_FAILURE:
      return {
        ...state,
        isFetching: false,
        data: initialState.data,
        errors: action.errors,
        pageSize: initialState.pageSize,
        page: initialState.page,
      };

    case ACTION_TYPES.SET_FILTER:
      return {
        ...state,
        pageSize: initialState.pageSize,
        page: initialState.page,
        errors: initialState.errors,
        filters: action.filters,
      };

    case ACTION_TYPES.CHANGE_PAGE:
      return {
        ...state,
        errors: initialState.errors,
        page: action.page,
      };

    default:
      return state;
  }
};
