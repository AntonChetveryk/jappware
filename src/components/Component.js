import React from "react";

const Component = (props) => {
  const {
    id,
    labelText,
    type,
    placeholder,
    name,
    value,
    onChange,
    className,
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
      />
    </div>
  );
};

export default Component;
