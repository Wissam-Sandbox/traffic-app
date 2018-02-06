import React from 'react';
import ReactPaginate from 'react-paginate';
import '../styles/Pagination.css';

const Pagination = () => {
  return (
    <ReactPaginate
      previousLabel={"previous"}
      nextLabel={"next"}
      breakLabel={<span>...</span>}
      breakClassName={"break-me"}
      pageCount={10}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={a => { console.log(a); }}
      containerClassName={'pagination'}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"} />
  );
};

export default Pagination;
