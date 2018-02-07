import { connect } from 'react-redux';
import FilterForm from '../components/FilterForm';

const mapStateToProps = (state) => {
  const {
    isFetchingVehicles,
    vehicles,
  } = state.data;

  return {
    isDisabled: isFetchingVehicles || !vehicles.length,
    data: vehicles,
  };
};

export default connect(
  mapStateToProps
)(FilterForm);
