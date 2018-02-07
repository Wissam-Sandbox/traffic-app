import React from 'react';
import 'normalize-css';
import FilterForm from './FilterForm';
import VehicleItemListContainer from '../containers/VehicleItemListContainer';
import Pagination from './Pagination';

const RootComponent = () => (
  <div>
    <FilterForm isDisabled={false} />
    <VehicleItemListContainer/>
    <Pagination/>
  </div>
);

export default RootComponent;
