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

const intersect = (arr1 = [], arr2 = []) => {
  return arr1.filter(i => arr2.includes(i));
};

const intersectAll = (arrays = []) => {
  const first = arrays[0];

  return arrays.reduce((intersection, arr) => {
    return intersect(intersection, arr)
  }, first);
};

export {
  indexVehicles,
  computePageCount,
  paginate,
  intersect,
  intersectAll,
}
