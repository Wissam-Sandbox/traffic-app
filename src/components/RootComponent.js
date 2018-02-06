import React from 'react';
import FilterForm from './FilterForm';
import VehicleItemListContainer from '../containers/VehicleItemListContainer';
import Pagination from './Pagination';
import 'normalize-css';

const RootComponent = () => (
  <div>
    <h1>Traffic App</h1>
    <FilterForm isDisabled={false} />
    <VehicleItemListContainer/>
    <Pagination/>
  </div>
);

export default RootComponent;
