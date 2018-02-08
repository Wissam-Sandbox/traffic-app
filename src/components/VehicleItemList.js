import React, {Component} from 'react';
import VehicleItem from './VehicleItem';
import LoadingScreen from './LoadingScreen';
import '../styles/VehicleItemList.css';

class VehicleItemList extends Component {
  render() {
    const { isFetchingData, data, isFetchSuccessful } = this.props;

    return (
      isFetchingData
        ? <LoadingScreen/>
        : (
          isFetchSuccessful
          ? (
              <div>
                <div>{`${data.length} results`}</div>
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
              </div>
            )
          : <div>Error occured</div>
        )
    );
  }
}

export default VehicleItemList;
