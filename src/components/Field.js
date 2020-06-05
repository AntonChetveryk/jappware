import React from "react";

const Field = (props) => {
  const {
    id,
    labelText,
    type,
    placeholder,
    name,
    value,
    onChange,
    className,
    min,
    max,
  } = props;
  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
        min={min}
        max={max}
      />
    </div>
  );
};

export default Field;
