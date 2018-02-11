import { inventoryReducer } from '../index';
import * as actions from '../../actions/creators';

describe('inventoryReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      isFetching: false,
      data: { vehicles: {}, types: {}, brands: {}, colors: {} },
      pageSize: 5,
      page: 0,
      errors: [],
      filters: { types: [], brands: [], colors: [] }
    };
  });

  it('should return the initial state if invalid/empty action passed in', () => {
    expect(inventoryReducer(undefined, {})).toEqual(state);
  });

  // @TODO: Test needs to be amended because of dependency on browser history
  // it('should handle "fetchInventory" correctly', () => {
  //   const expected = {
  //     isFetching: true,
  //     data: { vehicles: {}, types: {}, brands: {}, colors: {} },
  //     pageSize: 5,
  //     page: 0,
  //     errors: [],
  //     filters: { types: [], brands: [], colors: [] }
  //   };
  //   expect(
  //     inventoryReducer(state, actions.fetchInventory())
  //   ).toEqual(expected);
  // });

  it('should handle "fetchInventorySuccess" correctly', () => {
    const expected = {
      isFetching: false,
      data: {
        vehicles: {
          1: { type: 'car', brand: 'suzuki', colors: ['black'] }
        },
        types: { car: [1] },
        brands: { suzuki: [1] },
        colors: { black: [1] }
      },
      pageSize: 5,
      page: 0,
      errors: [],
      filters: { types: [], brands: [], colors: [] }
    };
    expect(
      inventoryReducer(state, actions.fetchInventorySuccess(
        {
          vehicles: {
            1: { type: 'car', brand: 'suzuki', colors: ['black'] }
          },
          types: { car: [1] },
          brands: { suzuki: [1] },
          colors: { black: [1] }
        }
      ))
    ).toEqual(expected);
  });

  it('should handle "fetchInventoryFailure" correctly', () => {
    const expected = {
      isFetching: false,
      data: { vehicles: {}, types: {}, brands: {}, colors: {} },
      pageSize: 5,
      page: 0,
      errors: [{ errorKey: 'errorValue' }],
      filters: { types: [], brands: [], colors: [] }
    };
    expect(
      inventoryReducer(state, actions.fetchInventoryFailure([{ errorKey: 'errorValue' }]))
    ).toEqual(expected);
  });

  // @TODO: Test needs to be amended because of dependency on browser history
  // it('should handle "setFilters" correctly', () => {
  //   const expected = {
  //     isFetching: false,
  //     data: { vehicles: {}, types: {}, brands: {}, colors: {} },
  //     pageSize: 5,
  //     page: 0,
  //     errors: [],
  //     filters: {
  //       types: ['car'],
  //       brands: ['dodge'],
  //       colors: ['red', 'black']
  //     }
  //   };
  //   expect(
  //     inventoryReducer(state, actions.setFilters({
  //       types: ['car'],
  //       brands: ['dodge'],
  //       colors: ['red', 'black']
  //     }))
  //   ).toEqual(expected);
  // });

  it('should handle "changePage" correctly', () => {
    const expected = {
      isFetching: false,
      data: { vehicles: {}, types: {}, brands: {}, colors: {} },
      pageSize: 5,
      page: 99,
      errors: [],
      filters: { types: [], brands: [], colors: [] }
    };
    expect(
      inventoryReducer(state, actions.changePage(99))
    ).toEqual(expected);
  });

});
