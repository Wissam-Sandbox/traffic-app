import * as selectors from '../inventory';

const state = {
  inventory: {
    isFetching: false,
    data: {
      vehicles: {
        1: { id: 1, type: 'car', brand: 'Ford', colors: ['red'] },
        2: { id: 2, type: 'car', brand: 'Dodge', colors: ['black', 'white'] },
        3: { id: 3, type: 'plane', brand: 'Airbus', colors: ['red', 'green'] },
        4: { id: 4, type: 'plane', brand: 'Concord', colors: ['black', 'yellow'] },
        5: { id: 5, type: 'motorcycle', brand: 'Yamaha', colors: ['red', 'white', 'blue'] }
      },
    },
    pageSize: 5,
    page: 0,
    errors: [],
    filters: {
      types: [],
      brands: [],
      colors: []
    }
  },
  router: {},
};

describe('isInventoryFetchSuccessfulSelector', () => {
  it('should return true if state has no errors', () => {
    const mockedState = { ...state };
    expect(selectors.isInventoryFetchSuccessfulSelector(mockedState)).toBe(true);
  });

  it('should return true if state has errors', () => {
    const mockedState = { ...state, inventory: { errors: [{ someKey: 'someVal' }] } };
    expect(selectors.isInventoryFetchSuccessfulSelector(mockedState)).toBe(false);
  });
});

describe('vehiclesSelector', () => {
  it('should return vehicles indexed by id', () => {
    const mockedState = { ...state };
    expect(selectors.vehiclesSelector(mockedState)).toEqual([
      { id: 1, type: 'car', brand: 'Ford', colors: ['red'] },
      { id: 2, type: 'car', brand: 'Dodge', colors: ['black', 'white'] },
      { id: 3, type: 'plane', brand: 'Airbus', colors: ['red', 'green'] },
      { id: 4, type: 'plane', brand: 'Concord', colors: ['black', 'yellow'] },
      { id: 5, type: 'motorcycle', brand: 'Yamaha', colors: ['red', 'white', 'blue'] }
    ]);
  });
});

describe('vehiclesSelector', () => {
  it('should return vehicles indexed by id', () => {
    const mockedState = { ...state };
    expect(selectors.vehiclesSelector(mockedState)).toEqual([
      { id: 1, type: 'car', brand: 'Ford', colors: ['red'] },
      { id: 2, type: 'car', brand: 'Dodge', colors: ['black', 'white'] },
      { id: 3, type: 'plane', brand: 'Airbus', colors: ['red', 'green'] },
      { id: 4, type: 'plane', brand: 'Concord', colors: ['black', 'yellow'] },
      { id: 5, type: 'motorcycle', brand: 'Yamaha', colors: ['red', 'white', 'blue'] }
    ]);
  });
});

describe('filterMappedVehicleIdsSelector', () => {
  it('should return state inventory data indexed by types, brands and colors.', () => {
    const mockedState = { ...state };
    expect(selectors.filterMappedVehicleIdsSelector(mockedState)).toEqual({
      types: {
        car: [1, 2],
        plane: [3, 4],
        motorcycle: [5],
      },
      brands: {
        Ford: [1],
        Dodge: [2],
        Airbus: [3],
        Concord: [4],
        Yamaha: [5],
      },
      colors: {
        red: [1, 3, 5],
        black: [2, 4],
        white: [2, 5],
        blue: [5],
        yellow: [4],
        green: [3],
      },
    });
  });
});
