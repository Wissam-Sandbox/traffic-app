import { connect } from 'react-redux';
import FilterForm from '../components/FilterForm';
import { activeFilterOptionsSelector, filterValuesSelector } from '../selectors';
import { setFilters } from '../actions';

const mapStateToProps = (state) => {
  const { isFetching, data } = state.inventory;

  return {
    isDisabled: isFetching,
    data: data.vehicles,
    filterOptions: activeFilterOptionsSelector(state),
    filterValues: filterValuesSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilters: (filterName, filterValues) => {
      dispatch(setFilters(filterName, filterValues));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterForm);
