import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ColorChip.css';

const COLOR_CODES = {
  black: '#000000',
  white: '#ffffff',
  red: '#e81123',
  green: '#4CAF50',
  blue: '#2196F3',
  yellow: '#FFEB3B',
  purple: '#800080',
  grey: '#757575',
  default: '#F1F1F1',
};

const ColorChip = ({ colorName }) => {
  return (
    <div className="color-chip">
      <span className="color-chip__shape" style={{backgroundColor: COLOR_CODES[colorName] || COLOR_CODES['default']}} />
      <span className="color-chip__text">{colorName}</span>
    </div>
  );
};

ColorChip.prototypes = {
  className: PropTypes.string,
};

export default ColorChip;
