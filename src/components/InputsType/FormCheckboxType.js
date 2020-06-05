import React from "react";
import Field from "../Field";

const FormCheckboxType = (props) => {
  const { values, onChange } = props;
  return (
    <div>
      <Field
        name="label"
        value={values.label}
        labelText="Label"
        onChange={onChange}
      />
    </div>
  );
};

export default FormCheckboxType;
