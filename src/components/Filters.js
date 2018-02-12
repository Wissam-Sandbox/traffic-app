import React from 'react';
import SearchCount from './SearchCount';
import FilterForm from './FilterForm';

const Filters = ({ searchCount, filterOptions, filterValues, setFilters, isDisabled }) => {
  const filterFormProps = { filterOptions, filterValues, setFilters, isDisabled };
  return (
    <div className="filter-form">
      <SearchCount count={searchCount} />
      <FilterForm {...filterFormProps} />
    </div>
  );
};

export default Filters;
