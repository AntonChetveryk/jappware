import React from "react";
import Field from "../Field";

const FormRangeType = (props) => {
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
        name="min"
        value={values.min}
        labelText="min"
        onChange={onChange}
      />
      <Field
        name="max"
        value={values.max}
        labelText="max"
        onChange={onChange}
      />
    </div>
  );
};

export default FormRangeType;
