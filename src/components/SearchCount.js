import React from 'react';
import TextLabel from './TextLabel';
import '../styles/SearchCount.css';

const SearchCount = ({ count }) => (
  <div className="search-count">
    <span className="search-count__digits">{count}</span>
    <TextLabel transKey="filters.found" />
  </div>
);

export default SearchCount;
