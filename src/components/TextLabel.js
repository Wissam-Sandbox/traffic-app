import React from 'react';
import {translate} from '../i18n/tools';

const TextLabel = ({ className, transKey, language }) => {
  return (
    <div className={`text-label ${className}`}>
      {translate(transKey, language)}
    </div>
  );
};

export default TextLabel;
