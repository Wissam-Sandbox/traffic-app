import React from 'react';
import './VehicleItem.css';

const VehicleItem = ({ imageUrl, type, brand, colors }) => {
  return (
    <div className="vehicle-item">
      <div className="vehicle-item__img">
        <img src={imageUrl} alt={brand} />
      </div>
      <div className="vehicle-item__features">
        <div>{type}</div>
        <div>{brand}</div>
        <div>
          {
            colors.map((color, index) => <span key={`color-${index}`}>{color}</span>)
          }
        </div>
      </div>
    </div>
  );
};

export default VehicleItem;
