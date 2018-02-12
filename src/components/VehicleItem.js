import React from 'react';
import PropTypes from 'prop-types';
import ColorChip from './ColorChip';
import '../styles/VehicleItem.css';

const VehicleItem = ({ vehicleId, imageUrl, type, brand, colors }) => {
  return (
    <div className="vehicle-item">
      <div className="vehicle-item__img">
        <img src={imageUrl} alt={brand} />
      </div>
      <div className="vehicle-item__features">
        <div className="vehicle-item__brand">{brand}</div>
        <div className="vehicle-item__type">{type}</div>
        <div className="vehicle-item__colors">
          {
            colors.map((color, index) => <ColorChip key={`color-${index}`} colorName={color} />)
          }
        </div>
      </div>
    </div>
  );
};

VehicleItem.propTypes = {
  vehicleId: PropTypes.number,
  imageUrl: PropTypes.string,
  type: PropTypes.string,
  brand: PropTypes.string,
  colors: PropTypes.array,
};

export default VehicleItem;
