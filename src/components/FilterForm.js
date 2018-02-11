import React from 'react';
import PropTypes from 'prop-types';
import SelectDropdown from './SelectDropdown';
import '../styles/FilterForm.css';

const FilterForm = ({ filterOptions, filterValues, setFilters, isDisabled }) => {

  const handleChangeFilter = (name, values) => {
    const updatedFilters = {...filterValues};
    updatedFilters[name] = values.map(v => v.value);

    setFilters(updatedFilters);
  };

  return (
    <div className="filter-form">
      {
        filterOptions.map(filter => (
          <SelectDropdown
            key={filter.name}
            className={'filter-control'}
            isDisabled={isDisabled}
            title={`filter.${filter.name}`}
            name={filter.name}
            options={filter.options}
            value={filterValues[filter.name]}
            onChange={(x) => { handleChangeFilter(filter.name, x) }} />
        ))
      }
    </div>
  );
};

FilterForm.propTypes = {
  filterOptions: PropTypes.array,
  filterValues: PropTypes.object,
  setFilters: PropTypes.func,
  isDisabled: PropTypes.bool,
};

FilterForm.defaultProps = {
  filterValues: {},
  setFilters: x => x,
};

export default FilterForm;
