import React, {Component} from 'react';
import { connect } from 'react-redux';
import VehicleItemList from '../components/VehicleItemList';
import { fetchInventory } from '../actions/creators';
import {
  isInventoryFetchSuccessfulSelector,
  getFilteredVehiclesPaginatedSelector,
} from '../selectors/inventory';

const mapStateToProps = (state) => {
  return {
    isFetchingData: state.inventory.isFetching,
    data: getFilteredVehiclesPaginatedSelector(state),
    isFetchSuccessful: isInventoryFetchSuccessfulSelector(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchInventory: () => {
      dispatch(fetchInventory());
    },
  };
};

class VehicleItemListWithDataOnLoad extends Component {
  componentDidMount() {
    this.props.fetchInventory();
  }

  render() {
    return (
      <VehicleItemList {...this.props} />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VehicleItemListWithDataOnLoad);
