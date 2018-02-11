import React from 'react';
import PropTypes from 'prop-types';
import VehicleItem from './VehicleItem';
import LoadingScreen from './LoadingScreen';
import ErrorScreen from './ErrorScreen';
import ZeroResult from './ZeroResult';
import '../styles/VehicleItemList.css';

const renderVehicleItems = (vehicles) => (
  <div>
    <ul className="vehicle-item-list">
      {
        vehicles.map(item => (
          <li key={item.id}>
            <VehicleItem
              vehicleId={item.id}
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
  if (isFetchingData) {
    return <LoadingScreen/>;
  }
  if (!isFetchSuccessful) {
    return <ErrorScreen/>;
  }
  if (!data.length) {
    return <ZeroResult/>
  }
  return renderVehicleItems(data);
};

VehicleItemList.propTypes = {
  isFetchingData: PropTypes.bool,
  data: PropTypes.array,
  isFetchSuccessful: PropTypes.bool,
};

export default VehicleItemList;
