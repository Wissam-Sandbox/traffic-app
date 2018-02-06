import { connect } from 'react-redux';
import VehicleItemList from '../components/VehicleItemList';
import {fetchVehicles} from '../actions';
import { withRouter } from 'react-router-dom';

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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(VehicleItemList)
);
