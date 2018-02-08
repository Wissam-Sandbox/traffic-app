import { connect } from 'react-redux';
import FilterForm from '../components/FilterForm';
import {
  isInventoryFetchSuccessfulSelector,
  activeFilterOptionsSelector,
  filterValuesSelector,
  getFilteredVehiclesSelector,
} from '../selectors';
import { setFilters } from '../actions';

const mapStateToProps = (state) => {
  const { isFetching, data } = state.inventory;

  return {
    isDisabled: isFetching || !isInventoryFetchSuccessfulSelector(state),
    data: data.vehicles,
    searchCount: getFilteredVehiclesSelector(state).length,
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
