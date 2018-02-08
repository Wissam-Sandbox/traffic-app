import React from 'react';
import VehicleItem from './VehicleItem';
import LoadingScreen from './LoadingScreen';
import ErrorScreen from './ErrorScreen';
import Pagination from './Pagination';
import '../styles/VehicleItemList.css';

const renderVehicleItems = (vehicles) => (
  <div>
    <div className="vehicle-item-list__total">{`${vehicles.length} results`}</div>
    <ul className="vehicle-item-list">
      {
        vehicles.map(item => (
          <li key={item.id}>
            <VehicleItem
              imageUrl={item.img}
              type={item.type}
              brand={item.brand}
              colors={item.colors} />
          </li>
        ))
      }
    </ul>
  </div>
);

const VehicleItemList = ({ isFetchingData, data, isFetchSuccessful }) => {
  return isFetchingData
    ? <LoadingScreen/>
    : (
      isFetchSuccessful
        ? <div>
            <Pagination/>
            {renderVehicleItems(data)}
          </div>
        : <ErrorScreen/>
    );
};

export default VehicleItemList;
