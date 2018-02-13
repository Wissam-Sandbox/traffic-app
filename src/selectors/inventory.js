import { createSelector } from 'reselect';
import {
  indexVehiclesByFilterNameAndValue,
  formatFilterOptions,
  computeResultSetsIntersection,
} from './utils';
import {
  paginate,
  computePageCount,
} from '../utils';

const isInventoryFetchSuccessfulSelector = (state) => !state.inventory.errors.length;

const indexedVehiclesSelector = (state) => state.inventory.data.vehicles;

const vehiclesSelector = (state) =>
  Object.keys(state.inventory.data.vehicles).map(id => state.inventory.data.vehicles[id]);

const vehicleIDsSelector = (state) => Object.keys(indexedVehiclesSelector(state)).map(i => parseInt(i, 10));

const filterMappedVehicleIdsSelector = (state) => indexVehiclesByFilterNameAndValue(vehiclesSelector(state));

const filterValuesSelector = (state) => state.inventory.filters;

const getPaginationSelector = (state) => {
  const { pageSize, page } = state.inventory;
  return { pageSize, page };
};

const getFilteredVehiclesSelector = createSelector(
  indexedVehiclesSelector,
  vehicleIDsSelector,
  filterMappedVehicleIdsSelector,
  filterValuesSelector,
  (indexedVehicles, vehiclesIds, vehicleIdsIndexedByFilter, filterValues) => {
    return computeResultSetsIntersection(
      vehiclesIds,
      vehicleIdsIndexedByFilter,
      filterValues,
    ).map(i => indexedVehicles[i]);
  }
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

const activeFilterOptionsSelector = createSelector(
  state => indexVehiclesByFilterNameAndValue(getFilteredVehiclesSelector(state)),
  formatFilterOptions,
);

const getPageCountSelector = createSelector(
  getFilteredVehiclesSelector,
  getPaginationSelector,
  (vehiclesArr, statePagination) => {
    return computePageCount(vehiclesArr, statePagination.pageSize);
  }
);

export {
  filterMappedVehicleIdsSelector,
  isInventoryFetchSuccessfulSelector,
  vehiclesSelector,
  activeFilterOptionsSelector,
  filterValuesSelector,
  getPaginationSelector,
  getFilteredVehiclesSelector,
  getFilteredVehiclesPaginatedSelector,
  getPageCountSelector,
}
