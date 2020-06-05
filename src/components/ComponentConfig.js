import React from "react";
import styled from "styled-components";
import Field from "./Field";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const inputsConfig = {
  text: {
    type: "text",
    label: "",
    defaultValue: "",
  },
  password: {
    type: "password",
    label: "",
    defaultValue: "",
  },
  email: {
    type: "email",
    label: "",
    defaultValue: "",
  },
  checkbox: {
    type: "checkbox",
    label: "",
    defaultChecked: false,
  },
  range: {
    type: "range",
    min: "0",
    max: "1",
    defaultValue: "0",
    step: "1",
  },
};

const typesInputs = Object.keys(inputsConfig);

const FormTextType = ({ values, onChange }) => (
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

export default class ComponentConfig extends React.Component {
  state = {
    typeInput: "",
    values: {},
  };

  onChangeTypeInput = (e) => {
    this.setState({ typeInput: e.target.value });
  };

  componentDidUpdate(_, prevState) {
    if (this.state.typeInput !== prevState.typeInput) {
      this.initValues(this.state.typeInput);
    }
  }

  onChangeValue = (e) => {
    const { name, value } = e.target;
    this.setState((state) => ({
      values: {
        ...state.values,
        [name]: value,
      },
    }));
  };

  initValues = (typeInput) => {
    const values = inputsConfig[typeInput] || {};
    this.setState({
      values,
    });
  };

  renderFormByTypeInput = (typeInput) => {
    switch (typeInput) {
      case "text":
      case "password":
      case "email":
        return (
          <FormTextType
            values={this.state.values}
            onChange={this.onChangeValue}
          />
        );
      case "radio":
      case "checkbox":
      case "range":
      default:
        return null;
    }
  };

  onAddComponent = (e) => {
    e.preventDefault();

    this.props.addComponent(this.state.values);
    this.reset();
  };

  reset = () => {
    this.setState({ typeInput: "", values: {} });
  };

  render() {
    const { typeInput } = this.state;
    return (
      <Wrapper>
        <div className="d-flex mt-4">
          <select
            name="type"
            value={typeInput}
            onChange={this.onChangeTypeInput}
          >
            <option value="">Choose field type</option>
            {typesInputs.map((type, index) => (
              <option value={type} key={index}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="options mt-4">
          {this.renderFormByTypeInput(typeInput)}
        </div>
        <button
          type="submit"
          onClick={this.onAddComponent}
          className="mt-4 btn btn-dark"
        >
          Add Components
        </button>
      </Wrapper>
    );
  }
}
