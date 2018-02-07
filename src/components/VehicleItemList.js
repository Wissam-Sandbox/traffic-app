import React, {Component} from 'react';
import VehicleItem from './VehicleItem';
import '../styles/VehicleItemList.css';

class VehicleItemList extends Component {
  render() {
    const { isFetchingData, data } = this.props;
    return (
      isFetchingData ? <h1>Loading</h1> :
      <ul className="vehicle-item-list">
        {
          Object.keys(data).map(id => (
            <li key={id}>
              <VehicleItem
                imageUrl={data[id].img}
                type={data[id].type}
                brand={data[id].brand}
                colors={data[id].colors} />
            </li>
          ))
        }
      </ul>
    );
  }
}

export default VehicleItemList;
