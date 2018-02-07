import React from 'react';
import 'normalize-css';
import VehicleItemListContainer from '../containers/VehicleItemListContainer';
import FilterFormContainer from '../containers/FilterFormContainer';
import Pagination from './Pagination';

const RootComponent = () => (
  <div>
    <FilterFormContainer/>
    <VehicleItemListContainer/>
    <Pagination/>
  </div>
);

export default RootComponent;
