const indexVehicles = (data) => {
  return data.reduce((matrix, item) => {
    matrix.vehicles[item.id] = item;
    return matrix;
  }, {
    vehicles: {},
  });
};

const computePageCount = (data, pageSize) => Math.ceil(data.length / pageSize);

const paginate = (data, pageSize, pageNumber) => {
  const startIndex = pageNumber * pageSize;
  const endIndex = parseInt(startIndex + pageSize, 10);

  return data.slice(startIndex, endIndex);
};

export {
  indexVehicles,
  computePageCount,
  paginate,
}
