import { createSelector } from 'reselect';

const vehiclesSelector = (state) => Object.values(state.inventory.data.vehicles);

const filterMappedVehicleIdsSelector = (state) => {
  return vehiclesSelector(state).reduce((matrix, item) => {
    const { id, type, brand, colors } = item;

    if (!matrix.types[type]) {
      matrix.types[type] = [];
    }
    matrix.types[type].push(id);

    if (!matrix.brands[brand]) {
      matrix.brands[brand] = [];
    }
    matrix.brands[brand].push(id);

    colors.forEach(color => {
      if (!matrix.colors[color]) {
        matrix.colors[color] = [];
      }
      matrix.colors[color].push(id);
    });

    return matrix;
  }, {
    types: {},
    brands: {},
    colors: {},
  });
};

const filterOptionsSelector = (filteredVehiclesMap) => {
  return {
    types: Object.keys(filteredVehiclesMap.types).map(i => ({ value: i, label: i })),
    brands: Object.keys(filteredVehiclesMap.brands).map(i => ({ value: i, label: i })),
    colors: Object.keys(filteredVehiclesMap.colors).map(i => ({ value: i, label: i })),
  };
};

const activeFilterOptionsSelector = createSelector(
  filterMappedVehicleIdsSelector,
  filterOptionsSelector,
);

const filterValuesSelector = (state) => {
  return {
    types: state.inventory.filters['types'],
    brands: state.inventory.filters['brands'],
    colors: state.inventory.filters['colors'],
  };
};

const indexedVehiclesSelector = (state) => state.inventory.data.vehicles;

// @Todo: Review this logic and apply to all filter types
const getFilteredVehicleIds = (indexedVehicles, filterMappedVehicleIds, filterValues) => {
  const filteredIds = filterValues.colors.length ? filterValues.colors.reduce((accum, item) => {
    return accum.concat(
      filterMappedVehicleIds['colors'][item]
    );
  }, []) : Object.keys(indexedVehicles);
  return Array.from(new Set(filteredIds)).map(i => indexedVehicles[i]);
};

const getFilteredVehicleIdsSelector = createSelector(
  indexedVehiclesSelector,
  filterMappedVehicleIdsSelector,
  filterValuesSelector,
  getFilteredVehicleIds,
);

export {
  vehiclesSelector,
  activeFilterOptionsSelector,
  filterValuesSelector,
  getFilteredVehicleIdsSelector,
}
