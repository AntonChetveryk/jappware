import React from "react";
import styled from "styled-components";
import Field from "./Field";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const types = ["text", "password", "email", "checkbox", "radio", "range"];

export default class ComponentConfig extends React.Component {
  getOptionsItems = (items) => {
    const defaultOption = (
      <option key={"Type"} value={""}>
        Type
      </option>
    );
    return [
      defaultOption,
      ...items.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      )),
    ];
  };

  renderSwitch = (param) => {
    switch (param) {
      case "radio":
        return <div>radio</div>;
      case "checkbox":
        return <div>checkbox</div>;
      case "range":
        return <div>range</div>;
      default:
        return null;
    }
  };

  render() {
    const { type, message, onChange } = this.props;

    return (
      <Wrapper>
        <div className="d-flex mt-4">
          <select id="type" name="type" value={type} onChange={onChange}>
            {this.getOptionsItems(types)}
          </select>
          <Field
            id="message"
            type="text"
            placeholder="message"
            name="message"
            value={message}
            onChange={onChange}
          />
        </div>

        <div className="options mt-4">
          <h3>Options</h3>
          {this.renderSwitch(type)}
        </div>
      </Wrapper>
    );
  }
}
