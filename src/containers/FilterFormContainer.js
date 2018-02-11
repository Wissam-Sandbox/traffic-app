import { connect } from 'react-redux';
import FilterForm from '../components/FilterForm';
import {
  isInventoryFetchSuccessfulSelector,
  activeFilterOptionsSelector,
  filterValuesSelector,
  // getFilteredVehiclesSelector,
} from '../selectors/inventory';
import { setFilters } from '../actions/creators';

const mapStateToProps = (state) => {
  return {
    isDisabled: state.inventory.isFetching || !isInventoryFetchSuccessfulSelector(state),
    // searchCount: getFilteredVehiclesSelector(state).length, //@TODO: Let's show this total somewhere else!
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
