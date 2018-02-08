const indexVehicles = (data) => {
  return data.reduce((matrix, item) => {
    matrix.vehicles[item.id] = item;
    return matrix;
  }, {
    vehicles: {},
  });
};

export {
  indexVehicles,
}
