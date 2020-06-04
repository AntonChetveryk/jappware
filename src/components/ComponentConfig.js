import React from "react";
import styled from "styled-components";
import Field from "./Component";

const Wrapper = styled.section`
  display: flex;
`;

const types = ["text", "password", "checkbox"];

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

  render() {
    const { type, message, onChange } = this.props;
    return (
      <Wrapper>
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
      </Wrapper>
    );
  }
}
