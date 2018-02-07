import React, {Component} from 'react';
import VehicleItem from './VehicleItem';
import '../styles/VehicleItemList.css';

class VehicleItemList extends Component {
  render() {
    const { isFetchingData, data } = this.props;

    return (
      isFetchingData
        ? <h1>Loading</h1>
        : (
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
        )
    );
  }
}

export default VehicleItemList;
