import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import '../styles/Pagination.css';

const Pagination = ({ pageCount, page, changePage }) => {
  const handlePageChange = (pageObject) => {
    changePage(pageObject.selected);
  };

  return (
    !!pageCount &&
    <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={<span>...</span>}
      breakClassName={'break-class-name'}
      pageCount={pageCount}
      forcePage={page}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageChange}
      containerClassName={'pagination'}
      subContainerClassName={'pages pagination'}
      activeClassName={'active'} />
  );
};

Pagination.propTypes = {
  pageCount: PropTypes.number,
  page: PropTypes.number,
  changePage: PropTypes.func,
};

export default Pagination;
