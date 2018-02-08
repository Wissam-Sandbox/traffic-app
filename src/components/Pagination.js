import React from 'react';
import ReactPaginate from 'react-paginate';
import '../styles/Pagination.css';

const Pagination = ({ pageCount, changePage }) => {
  const handlePageChange = (pageObject) => {
    changePage(pageObject.selected);
  };

  return (
    pageCount ?
    <ReactPaginate
      previousLabel={"previous"}
      nextLabel={"next"}
      breakLabel={<span>...</span>}
      breakClassName={'break-class-name'}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageChange}
      containerClassName={'pagination'}
      subContainerClassName={'pages pagination'}
      activeClassName={'active'} />
    : null
  );
};

export default Pagination;
