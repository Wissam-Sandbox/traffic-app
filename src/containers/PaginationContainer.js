import { connect } from 'react-redux';
import Pagination from '../components/Pagination';
import { getPaginationSelector, getPageCountSelector } from '../selectors/inventory';
import { changePage } from '../actions/creators';

const mapStateToProps = (state) => {
  const { page } = getPaginationSelector(state);

  return {
    page,
    pageCount: getPageCountSelector(state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (pageNumber) => {
      dispatch(changePage(pageNumber));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pagination);
