import React from 'react';
import TextLabel from './TextLabel';
import '../styles/ZeroResult.css';

const ZeroResult = () => (
  <div className="zero-result">
    <TextLabel transKey={'data.emptyResultSet'} />
  </div>
);

export default ZeroResult;
