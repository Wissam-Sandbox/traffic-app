import React from 'react';
import FilterForm from './FilterForm';
import VehicleItemList from './VehicleItemList';
import Pagination from './Pagination';
import 'normalize-css';

const RootComponent = () => (
  <div>
    <div>Traffic App</div>
    <FilterForm isDisabled={false} />
    <VehicleItemList/>
    <Pagination/>
  </div>
);

export default RootComponent;
