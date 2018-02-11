import React from 'react';
import PropTypes from 'prop-types';
import {translate} from '../i18n/tools';

const TextLabel = ({ className, transKey, language }) => {
  return (
    <div className={`text-label ${className}`}>
      {translate(transKey, language)}
    </div>
  );
};

TextLabel.propTypes = {
  className: PropTypes.string,
  transKey: PropTypes.string,
  language: PropTypes.string,
};

export default TextLabel;
