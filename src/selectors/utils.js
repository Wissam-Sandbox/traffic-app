const indexVehiclesByFilterNameAndValue = (vehicles) => {
  const vehiclesIndexedByFilters = { types: {}, brands: {}, colors: {} };

  return vehicles.reduce((matrix, item) => {
    const { id, type, brand, colors } = item;

    if (!matrix.types[type]) matrix.types[type] = [];
    matrix.types[type].push(id);

    if (!matrix.brands[brand]) matrix.brands[brand] = [];
    matrix.brands[brand].push(id);

    colors.forEach(color => {
      if (!matrix.colors[color]) matrix.colors[color] = [];
      matrix.colors[color].push(id);
    });

    return matrix;
  }, vehiclesIndexedByFilters);
};

const formatFilterOptions = (filteredVehiclesMap) => {
  return Object.keys(filteredVehiclesMap)
    .map(filterName => {
      return {
        name: filterName,
        options: Object.keys(filteredVehiclesMap[filterName]).map(i => ({ value: i, label: i }))
      }
    });
};

export {
  indexVehiclesByFilterNameAndValue,
  formatFilterOptions,
};
