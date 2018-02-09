import queryString from 'query-string';

const getFiltersFromUrlSelector = (state) => {
  return queryString.parse(
    state.router.location.search,
    { arrayFormat: 'bracket' }
  );
};

export {
  getFiltersFromUrlSelector,
}
