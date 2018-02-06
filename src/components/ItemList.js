import React from 'react';
import Item from './Item';

const data = [
  {
    brand: 'Bugatti Veyron',
    colors: ['red', 'black'],
    id: 1,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg/520px-Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg',
    type: 'car',
  }
];

const ItemList = () => {
  return (
    <ul>
      {
        data.map(item => (
          <Item
            key={item.id}
            imageUrl={item.img}
            type={item.brand}
            brand={item.brand}
            colors={item.colors} />
        ))
      }
    </ul>
  );
};

export default ItemList;
