import {
  indexVehiclesByFilterNameAndValue,
  computeResultSetsIntersection,
} from '../utils';

const VEHICLES = [
  { id: 1, type: 'car', brand: 'Ford', colors: ['red'] },
  { id: 2, type: 'car', brand: 'Dodge', colors: ['black', 'white'] },
  { id: 3, type: 'plane', brand: 'Airbus', colors: ['red', 'green'] },
  { id: 4, type: 'plane', brand: 'Concord', colors: ['black', 'yellow'] },
  { id: 5, type: 'motorcycle', brand: 'Yamaha', colors: ['red', 'white', 'blue'] },
];

describe('indexVehiclesByFilterNameAndValue', () => {
  it('should correctly index vehicle records by types, brands and colors', () => {
    const expected = {
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
    };
    expect(
      indexVehiclesByFilterNameAndValue(VEHICLES)
    ).toEqual(expected)
  });
});

const VEHICLE_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const VEHICLE_IDS_INDEXED_BY_FILTER = {
  types: {
    car: [2, 3, 4, 6, 7, 8, 9],
    plane: [1, 5, 10],
  },
  brands: {
    chevrolet: [2, 3, 9],
    dodge: [4, 6, 7, 8],
    airbus: [5],
    boeing: [1, 10],
  },
  colors: {
    green: [1, 3, 5, 7, 9],
    yellow: [2, 4, 6, 8, 10],
    purple: [3, 6, 9],
  },
};
describe('computeResultSetsIntersection', () => {
  it('should correctly filter by single filter only', () => {
    expect(
      computeResultSetsIntersection(
        VEHICLE_IDS,
        VEHICLE_IDS_INDEXED_BY_FILTER,
        { types: [], brands: [], colors: [] }
      )
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(
      computeResultSetsIntersection(
        VEHICLE_IDS,
        VEHICLE_IDS_INDEXED_BY_FILTER,
        { types: ['car'], brands: [], colors: [] }
      )
    ).toEqual([2, 3, 4, 6, 7, 8, 9]);
    expect(
      computeResultSetsIntersection(
        VEHICLE_IDS,
        VEHICLE_IDS_INDEXED_BY_FILTER,
        { types: ['car', 'plane'], brands: [], colors: [] }
      )
    ).toEqual([]);
    expect(
      computeResultSetsIntersection(
        VEHICLE_IDS,
        VEHICLE_IDS_INDEXED_BY_FILTER,
        { types: ['boat'], brands: [], colors: [] }
      )
    ).toEqual([]);
    expect(
      computeResultSetsIntersection(
        VEHICLE_IDS,
        VEHICLE_IDS_INDEXED_BY_FILTER,
        { types: [], brands: [], colors: ['green', 'yellow'] }
      )
    ).toEqual([]);
  });

  it('should correctly filter by combination of filters', () => {
    expect(
      computeResultSetsIntersection(
        VEHICLE_IDS,
        VEHICLE_IDS_INDEXED_BY_FILTER,
        { types: ['plane'], brands: [], colors: ['green'] }
      )
    ).toEqual([1, 5]);
    expect(
      computeResultSetsIntersection(
        VEHICLE_IDS,
        VEHICLE_IDS_INDEXED_BY_FILTER,
        { types: ['plane'], brands: [], colors: ['green', 'purple'] }
      )
    ).toEqual([]);
  });
});
