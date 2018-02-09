import queryString from 'query-string';

const getFiltersFromUrlSelector = (state) => {
  return Object.assign(
    {},
    state.inventory.filters,
    queryString.parse(
      state.router.location.search,
      { arrayFormat: 'bracket' }
    )
  );
};

export {
  getFiltersFromUrlSelector,
}
