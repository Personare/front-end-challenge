import React from "react";
import Select from "react-select";

const MenuSelect = ({ text, code, value, options, onChange }) => (
  <div className="menu__input">
    <label>{text}</label>
    <Select
      options={options}
      value={{ value: `${value}`, label: `${value}` }}
      onChange={obj => {
        onChange(code, obj.value);
      }}
    />
  </div>
);

export default MenuSelect;
