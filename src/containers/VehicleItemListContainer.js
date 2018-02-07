import React, {Component} from 'react';
import { connect } from 'react-redux';
import VehicleItemList from '../components/VehicleItemList';
import {fetchVehicles} from '../actions';

const mapStateToProps = (state) => {
  return {
    isFetchingData: state.isFetchingVehicles,
    data: state.vehicles,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchVehicles());
    },
  };
};

class VehicleItemListWithDataOnLoad extends Component {
  componentDidMount() {
    this.props.fetchData();
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
