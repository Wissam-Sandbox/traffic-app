import React, {Component} from 'react';
import { connect } from 'react-redux';
import VehicleItemList from '../components/VehicleItemList';
import { fetchInventory } from '../actions';
import { getFilteredVehiclesSelector } from '../selectors';

const mapStateToProps = (state) => {
  return {
    isFetchingData: state.inventory.isFetching,
    data: getFilteredVehiclesSelector(state),
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
      <VehicleItemList
        data={this.props.data}
        isFetchingData={this.props.isFetchingData} />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VehicleItemListWithDataOnLoad);
