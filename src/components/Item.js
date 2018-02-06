import React from 'react';

const Item = ({ imageUrl, type, brand, colors }) => {
  return (
    <div>
      <img src={imageUrl} alt={brand} width={200} height={100} />
      <div>{type}</div>
      <div>{brand}</div>
      <div>
        {
          colors.map((color, index) => <span key={`color-${index}`}>{color}</span>)
        }
      </div>
    </div>
  );
};

export default Item;
