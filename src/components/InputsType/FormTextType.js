import React from "react";
import Field from "../Field";

const FormTextType = (props) => {
  const { values, onChange } = props;
  return (
    <div>
      <Field
        name="label"
        value={values.label}
        labelText="Label"
        onChange={onChange}
      />
      <Field
        name="defaultValue"
        value={values.defaultValue}
        labelText="DefaultValue"
        onChange={onChange}
      />
    </div>
  );
};

export default FormTextType;
