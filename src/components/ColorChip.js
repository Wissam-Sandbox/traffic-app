import React from 'react';
import '../styles/ColorChip.css';

const COLOR_CODES = {
  red: '#FF0000',
  green: '#008000',
  blue: '#0000FF',
  yellow: '#FFFF00',
  purple: '#800080',
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

export default ColorChip;
