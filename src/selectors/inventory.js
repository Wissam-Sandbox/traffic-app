import { createSelector } from 'reselect';
import { paginate, computePageCount, intersectAll } from '../utils';

const reduceVehicles = (vehicles) => {
  return vehicles.reduce((matrix, item) => {
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

const isInventoryFetchSuccessfulSelector = (state) => {
  return !state.inventory.errors.length;
};

const indexedVehiclesSelector = (state) => state.inventory.data.vehicles;
const vehiclesSelector = (state) => Object.values(state.inventory.data.vehicles);
const vehicleIDsSelector = (state) => Object.keys(indexedVehiclesSelector(state)).map(i => parseInt(i, 10));

const filterMappedVehicleIdsSelector = (state) => {
  return reduceVehicles(
    vehiclesSelector(state)
  );
};

const filterValuesSelector = (state) => {
  return {
    types: state.inventory.filters['types'],
    brands: state.inventory.filters['brands'],
    colors: state.inventory.filters['colors'],
  };
};

const getPaginationSelector = (state) => {
  const { pageSize, page } = state.inventory;

  return {
    pageSize,
    page,
  };
};

const getFilteredVehicles = (indexedVehicles, vehiclesIds, filterMappedVehicleIds, filterValues) => {
  const result = {};

  result.types = filterValues.types.length ? filterValues.types.reduce((accum, item) => {
    return accum.concat(
      filterMappedVehicleIds.types[item]
    );
  }, []) : vehiclesIds;

  result.brands = filterValues.brands.length ? filterValues.brands.reduce((accum, item) => {
    return accum.concat(
      filterMappedVehicleIds.brands[item]
    );
  }, []) : vehiclesIds;

  result.colors = filterValues.colors.length ? filterValues.colors.reduce((accum, item) => {
    return accum.concat(
      filterMappedVehicleIds.colors[item]
    );
  }, []) : vehiclesIds;

  const intersection = intersectAll(Object.values(result));

  return intersection.map(i => indexedVehicles[i]);
};

const getFilteredVehiclesSelector = createSelector(
  indexedVehiclesSelector,
  vehicleIDsSelector,
  filterMappedVehicleIdsSelector,
  filterValuesSelector,
  getFilteredVehicles,
);

const getFilteredVehiclesPaginatedSelector = createSelector(
  getFilteredVehiclesSelector,
  getPaginationSelector,
  (filteredVehiclesArray, pagination) => {
    return paginate(
      filteredVehiclesArray,
      pagination.pageSize,
      pagination.page,
    );
  }
);

const filterOptionsSelector = (filteredVehiclesMap) => {
  return {
    types: Object.keys(filteredVehiclesMap.types).map(i => ({ value: i, label: i })),
    brands: Object.keys(filteredVehiclesMap.brands).map(i => ({ value: i, label: i })),
    colors: Object.keys(filteredVehiclesMap.colors).map(i => ({ value: i, label: i })),
  };
};

const activeFilterOptionsSelector = createSelector(
  (state) => {
    return reduceVehicles(getFilteredVehiclesSelector(state));
  },
  filterOptionsSelector,
);

const getPageCountSelector = createSelector(
  getFilteredVehiclesSelector,
  getPaginationSelector,
  (vehiclesArr, statePagination) => {
    return computePageCount(vehiclesArr, statePagination.pageSize);
  }
);

export {
  isInventoryFetchSuccessfulSelector,
  vehiclesSelector,
  activeFilterOptionsSelector,
  filterValuesSelector,
  getPaginationSelector,
  getFilteredVehiclesSelector,
  getFilteredVehiclesPaginatedSelector,
  getPageCountSelector,
}
