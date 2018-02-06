import React from 'react';
import VehicleItem from './VehicleItem';
import '../styles/VehicleItemList.css';

const data = [
  {
    brand: 'Bugatti Veyron',
    colors: ['red', 'black'],
    id: 1,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg/520px-Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg',
    type: 'car',
  },
  {
    brand: 'Boeing 787 Dreamliner',
    colors: ['white', 'red', 'black'],
    id: 2,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/All_Nippon_Airways_Boeing_787-8_Dreamliner_JA801A_OKJ_in_flight.jpg/600px-All_Nippon_Airways_Boeing_787-8_Dreamliner_JA801A_OKJ_in_flight.jpg',
    type: 'plane',
  },
  {
    brand: 'Prairie',
    colors: ['white', 'red', 'gray'],
    id: 3,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/CFR_Steam_locomotive.jpg/600px-CFR_Steam_locomotive.jpg',
    type: 'train',
  }
];

const VehicleItemList = () => {
  return (
    <ul className="vehicle-item-list">
      {
        data.map(item => (
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
  );
};

export default VehicleItemList;
