import React from 'react';
import 'normalize-css';
import VehicleItemListContainer from '../containers/VehicleItemListContainer';
import FilterFormContainer from '../containers/FilterFormContainer';
import PaginationContainer from '../containers/PaginationContainer';
import '../styles/Root.css';

const RootComponent = () => (
  <div className="app-root">
    <div className='wrap wrap-filters'>
      <FilterFormContainer/>
    </div>
    <div className="wrap wrap-results">
      <PaginationContainer/>
      <VehicleItemListContainer/>
    </div>
  </div>
);

export default RootComponent;
