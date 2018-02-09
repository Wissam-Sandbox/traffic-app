import React from 'react';
import SelectDropdown from './SelectDropdown';
import '../styles/FilterForm.css';

const fakeFilters = [
  {
    title: 'filter.type',
    name: 'types',
    options: [],
  },
  {
    title: 'filter.brand',
    name: 'brands',
    options: [],
  },
  {
    title: 'filter.color',
    name: 'colors',
    options: [],
  }
];

const FilterForm = ({ filterOptions, filterValues, setFilters, searchCount, isDisabled }) => {
  const theFilters = fakeFilters.map(f => {
    return {
      title: f.title,
      name: f.name,
      options: filterOptions[f.name] || []
    };
  });

  const handleChangeFilter = (name, values) => {
    const updatedFilters = {...filterValues};
    updatedFilters[name] = values.map(v => v.value);
    console.log('updated filters: ', updatedFilters);
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
        theFilters.map(filter => (
          <SelectDropdown
            key={filter.title}
            className={'filter-control'}
            isDisabled={isDisabled}
            title={filter.title}
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
