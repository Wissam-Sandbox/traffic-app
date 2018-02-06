import React from 'react';
import SelectDropdown from './SelectDropdown';

const fakeFilters = [
  {
    title: 'filter.type',
    name: 'type',
    options: [
      { label: 'Car', value: 'car' },
      { label: 'Truck', value: 'truck' },
    ],
  },
  {
    title: 'filter.brand',
    name: 'brand',
    options: [
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'BMW', value: 'BMW' },
    ],
  },
  {
    title: 'filter.color',
    name: 'color',
    options: [
      { label: 'Red', value: 'red' },
      { label: 'Yellow', value: 'yellow' },
    ],
  }
];

const FilterForm = ({ filters, filterValues, isDisabled }) => {
  return (
    <div>
      {
        fakeFilters.map(filter => (
          <SelectDropdown
            key={filter.title}
            isDisabled={isDisabled}
            title={filter.title}
            name={filter.name}
            options={filter.options}
            value={[]}
            onChange={x => x} />
        ))
      }
    </div>
  );
};

export default FilterForm;
