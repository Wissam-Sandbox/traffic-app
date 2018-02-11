import {
  indexVehiclesByFilterNameAndValue
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
