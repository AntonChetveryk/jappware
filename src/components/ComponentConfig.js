import React from "react";
import styled from "styled-components";
// import Field from "./Field";
import FormTextType from "./InputsType/FormTextType";
import FormRangeType from "./InputsType/FormRangeType";
import FormCheckboxType from "./InputsType/FormCheckboxType";
import FormRadioType from "./InputsType/FormRadioType";

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
    defaultValue: true,
  },
  radio: {
    type: "radio",
    label: "",
    defaultValue: true,
  },
  range: {
    type: "range",
    min: "0",
    max: "50",
    defaultValue: "0",
    step: "1",
  },
};

const typesInputs = Object.keys(inputsConfig);

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

  initValues = (typeInput) => {
    const values = inputsConfig[typeInput] || {};
    this.setState({
      values,
    });
  };

  onChangeValue = (e) => {
    const { name, value } = e.target;
    this.setState((state) => ({
      values: {
        ...state.values,
        [name]: value,
      },
    }));
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
        return (
          <FormRadioType
            values={this.state.values}
            onChange={this.onChangeValue}
          />
        );
      case "checkbox":
        return (
          <FormCheckboxType
            values={this.state.values}
            onChange={this.onChangeValue}
          />
        );
      case "range":
        return (
          <FormRangeType
            values={this.state.values}
            onChange={this.onChangeValue}
          />
        );
      default:
        return null;
    }
  };

  onAddComponent = (e) => {
    const {
      values: { label },
    } = this.state;
    e.preventDefault();
    if (label) {
      this.props.addComponent(this.state.values);
      this.reset();
    }
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
