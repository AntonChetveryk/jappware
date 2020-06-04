import React from "react";
import styled from "styled-components";
import Field from "./Field";

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
    const {
      selectName,
      selectValue,
      inputName,
      inputValue,
      onChange,
    } = this.props;
    return (
      <Wrapper>
        <select
          id={selectName}
          name={selectName}
          value={selectValue}
          onChange={onChange}
        >
          {this.getOptionsItems(types)}
        </select>
        <Field
          id={inputName}
          type="text"
          placeholder="text"
          name={inputName}
          value={inputValue}
          onChange={onChange}
        />
      </Wrapper>
    );
  }
}
