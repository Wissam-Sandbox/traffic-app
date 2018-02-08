import React from 'react';
import SelectDropdown from './SelectDropdown';

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

const FilterForm = ({ filterOptions, filterValues, setFilters, isDisabled }) => {
  const theFilters = fakeFilters.map(f => {
    return {
      title: f.title,
      name: f.name,
      options: filterOptions[f.name] || []
    };
  });

  const handleChangeFilter = (name, values) => {
    setFilters(
      name,
      values.map(v => v.value)
    );
  };

  return (
    <div>
      {
        theFilters.map(filter => (
          <SelectDropdown
            key={filter.title}
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
