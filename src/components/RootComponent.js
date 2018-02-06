import React from 'react';
import FilterForm from './FilterForm';
import ItemList from './ItemList';

const RootComponent = () => (
  <div>
    <div>Traffic App</div>
    <FilterForm isDisabled={false} />
    <ItemList/>
  </div>
);

export default RootComponent;
