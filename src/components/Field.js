import React from "react";

const Field = (props) => {
  const { id, labelText, type, placeholder, name, value, onChange } = props;
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
      />
    </div>
  );
};

export default Field;
