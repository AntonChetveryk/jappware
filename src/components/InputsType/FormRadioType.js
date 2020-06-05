import React from "react";
import Field from "../Field";

const FormRadioType = (props) => {
  const { values, onChange } = props;
  return (
    <div>
      <Field
        name="labelFirst"
        value={values.labelFirst}
        labelText="Label1"
        onChange={onChange}
      />
      <Field
        name="labelSecond"
        value={values.labelSecond}
        labelText="Label2"
        onChange={onChange}
      />
    </div>
  );
};

export default FormRadioType;
