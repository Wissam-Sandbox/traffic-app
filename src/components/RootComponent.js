import React from 'react';
import FilterForm from './FilterForm';
import VehicleItemList from './VehicleItemList';

const RootComponent = () => (
  <div>
    <div>Traffic App</div>
    <FilterForm isDisabled={false} />
    <VehicleItemList/>
  </div>
);

export default RootComponent;
