import React from 'react';
import SelectDropdown from './SelectDropdown';
import '../styles/FilterForm.css';

const FilterForm = ({ filterOptions, filterValues, setFilters, searchCount, isDisabled }) => {

  const handleChangeFilter = (name, values) => {
    const updatedFilters = {...filterValues};
    updatedFilters[name] = values.map(v => v.value);

    setFilters(updatedFilters);
  };

  const renderTotal = () => {
    return !isDisabled
      ? <div className="filter-form__total">{`${searchCount} results`}</div>
      : null;
  };

  return (
    <div className="filter-form">
      {renderTotal()}
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

export default FilterForm;
