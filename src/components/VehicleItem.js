import React from 'react';
import PropTypes from 'prop-types';
import ColorChip from './ColorChip';
import '../styles/VehicleItem.css';

const VehicleItem = ({ imageUrl, type, brand, colors }) => {
  return (
    <div className="vehicle-item">
      <div className="vehicle-item__img">
        <img src={imageUrl} alt={brand} />
      </div>
      <div className="vehicle-item__features">
        <div className="vehicle-item__brand mb-10">{brand}</div>
        <div className="mb-10">{type}</div>
        <div style={{ display: 'flex' }}>
          {
            colors.map((color, index) => <ColorChip key={`color-${index}`} colorName={color} />)
          }
        </div>
      </div>
    </div>
  );
};

VehicleItem.propTypes = {
  imageUrl: PropTypes.string,
  type: PropTypes.string,
  brand: PropTypes.string,
  colors: PropTypes.array,
};

export default VehicleItem;
