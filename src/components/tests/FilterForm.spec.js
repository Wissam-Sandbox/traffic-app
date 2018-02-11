import React from 'react';
import { shallow } from 'enzyme';
import '../../system/setupTests';
import FilterForm from '../FilterForm';
import SelectDropdown from '../SelectDropdown';

const FILTER_OPTIONS = [
  {
    name: 'filter1',
    options: [
      { label: 'filter1-val1', value: 'filter1-val1' },
      { label: 'filter1-val2', value: 'filter1-val2' },
    ]
  },
  {
    name: 'filter2',
    options: [
      { label: 'filter2-val1', value: 'filter2-val1' },
      { label: 'filter2-val2', value: 'filter2-val2' },
    ]
  }
];

describe('FilterForm', () => {
  describe('Component is not disabled', () => {
    let renderedComponent;
    beforeEach(() => {
      renderedComponent = shallow(
        <FilterForm
          filterOptions={FILTER_OPTIONS}
          filterValues={{
            'filter1': [],
            'filter2': ['filter2-val2'],
          }} />
      );
    });

    it('should render a <div> element', () => {
      expect(renderedComponent.is('div')).toBe(true);
    });

    it('should have the correct className', () => {
      expect(renderedComponent.hasClass('filter-form')).toBe(true);
    });

    it('should render correct number of select dropdowns', () => {
      expect(renderedComponent.find(SelectDropdown).length).toBe(2);
    });

    it('should render select dropdowns with correct options and values', () => {
      const dropDownCollection = renderedComponent.find(SelectDropdown);
      expect(dropDownCollection.get(0).props.name).toEqual('filter1');
      expect(dropDownCollection.get(0).props.options).toEqual([
        { label: 'filter1-val1', value: 'filter1-val1' },
        { label: 'filter1-val2', value: 'filter1-val2' },
      ]);
      expect(dropDownCollection.get(0).props.value).toEqual([]);
      expect(dropDownCollection.get(1).props.name).toEqual('filter2');
      expect(dropDownCollection.get(1).props.options).toEqual([
        { label: 'filter2-val1', value: 'filter2-val1' },
        { label: 'filter2-val2', value: 'filter2-val2' },
      ]);
      expect(dropDownCollection.get(1).props.value).toEqual(['filter2-val2']);
    });
  });

  describe('Component is disabled', () => {
    let renderedComponent;
    beforeEach(() => {
      renderedComponent = shallow(
        <FilterForm
          isDisabled={true}
          filterOptions={FILTER_OPTIONS}
          filterValues={{
            'filter1': [],
            'filter2': ['filter2-val2'],
          }} />
      );
    });

    it('should render disabled dropdowns', () => {
      const dropDownCollection = renderedComponent.find(SelectDropdown);
      expect(dropDownCollection.get(0).props.isDisabled).toBe(true);
      expect(dropDownCollection.get(0).props.isDisabled).toBe(true);
    });
  })
});
