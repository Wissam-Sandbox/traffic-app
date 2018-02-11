import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import TextLabel from './TextLabel';
import '../styles/SelectDropdown.css';

const SelectDropdown = ({ isDisabled, className, title, name, options, value, onChange }) => {
  return (
    <div className={`select-dropdown ${className}`}>
      <TextLabel transKey={title} />
      <Select
        disabled={isDisabled}
        multi={true}
        name={name}
        options={options}
        value={value}
        onChange={onChange} />
    </div>
  );
};

SelectDropdown.propTypes = {
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.array,
  onChange: PropTypes.func,
};

SelectDropdown.defaultProps = {
  isDisabled: false,
  className: '',
  value: [],
  onChange: x => x,
};

export default SelectDropdown;
