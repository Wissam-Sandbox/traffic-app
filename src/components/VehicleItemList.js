import React, {Component} from 'react';
import VehicleItem from './VehicleItem';
import '../styles/VehicleItemList.css';

class VehicleItemList extends Component {
  render() {
    return (
      this.props.isFetchingData ? <h1>Loading</h1> :
      <ul className="vehicle-item-list">
        {
          this.props.data.map(item => (
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
  }
}

export default VehicleItemList;
