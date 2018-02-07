import { createSelector } from 'reselect';

const vehiclesSelector = (state) => Object.values(state.inventory.data.vehicles);

// const vehicleSelector = (state, vehicleId) => state.inventory.data.vehicles[vehicleId];

const filterMappedVehicleIdsSelector = (state) => {
  return Object.values(state.inventory.data.vehicles).reduce((matrix, item) => {
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

const getFilteredVehicleIds = (filterMappedVehicleIds, filterValues) => {
  const filteredIds = filterValues.colors.reduce((accum, item) => {
    return accum.concat(
      filterMappedVehicleIds['colors'][item]
    );
  }, []);
  console.log(filteredIds);
};

const getFilteredVehicleIdsSelector = createSelector(
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
