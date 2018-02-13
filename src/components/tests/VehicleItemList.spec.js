import React from 'react';
import { shallow } from 'enzyme';
import '../../system/setupTests';
import VehicleItemList from '../VehicleItemList';
import VehicleItem from '../VehicleItem';
import LoadingScreen from '../LoadingScreen';
import ErrorScreen from '../ErrorScreen';
import ZeroResult from '../ZeroResult';

describe('VehicleItemList', () => {

  describe('Data is fetching', () => {
    it('should render LoadingScreen', () => {
      const renderedComponent = shallow(<VehicleItemList isFetchingData={true} data={[]} isFetchSuccessful={true} />);
      expect(
        renderedComponent.containsMatchingElement(<LoadingScreen />)
      ).toBe(true);
    });
  });

  describe('Data fetch failure', () => {
    it('should render ErrorScreen', () => {
      const renderedComponent = shallow(<VehicleItemList isFetchingData={false} data={[]} isFetchSuccessful={false} />);
      expect(renderedComponent.containsMatchingElement(<ErrorScreen />)).toBe(true);
    });
  });

  describe('Data fetch success', () => {
    it('should correctly render list of VehicleItems', () => {
      const renderedComponent = shallow(
        <VehicleItemList
          isFetchingData={false}
          data={[
            { id: 3, type: 'plane', brand: 'Airbus', colors: ['red', 'green'], img: 'image3' },
            { id: 4, type: 'plane', brand: 'Concord', colors: ['black', 'yellow'], img: 'image4' },
          ]}
          isFetchSuccessful={true} />
      );

      const vehicleItemCollection = renderedComponent.find(VehicleItem);
      expect(vehicleItemCollection.length).toEqual(2);
      expect(vehicleItemCollection.get(0).props.vehicleId).toEqual(3);
      expect(vehicleItemCollection.get(1).props.vehicleId).toEqual(4);
    });

    it('should render ZeroResult if result-set is empty', () => {
      const renderedComponent = shallow(<VehicleItemList isFetchingData={false} data={[]} isFetchSuccessful={true} />);
      expect(renderedComponent.containsMatchingElement(<ZeroResult />)).toBe(true);
    });
  });

});
