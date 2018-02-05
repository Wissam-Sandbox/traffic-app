import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import TextLabel from './TextLabel';

const SelectDropdown = ({ title, name, options, value, onChange }) => {
  return (
    <div>
      <TextLabel transKey={title} language="en" />
      <Select
        multi={true}
        name={name}
        options={options}
        value={value}
        onChange={onChange} />
    </div>
  );
};

export default SelectDropdown;
