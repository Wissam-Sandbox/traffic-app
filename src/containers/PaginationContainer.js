import { connect } from 'react-redux';
import Pagination from '../components/Pagination';
import { getPaginationSelector, getPageCountSelector } from '../selectors';
import { changePage } from '../actions';

const mapStateToProps = (state) => {
  const { pageSize, page } = getPaginationSelector(state);

  return {
    page,
    pageSize,
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
