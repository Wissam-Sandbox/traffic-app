import { connect } from 'react-redux';
import FilterForm from '../components/FilterForm';

const mapStateToProps = (state) => {
  const { isFetching, data } = state.inventory;

  return {
    isDisabled: isFetching,
    data: data.vehicles,
  };
};

export default connect(
  mapStateToProps
)(FilterForm);
