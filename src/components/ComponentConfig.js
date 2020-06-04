import React from "react";
import styled from "styled-components";
import Field from "./Field";

const Wrapper = styled.section`
  display: flex;
`;

const types = ["text", "password"];

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
    const { values, onChange } = this.props;
    return (
      <Wrapper>
        <select
          id="firstSelect"
          name="firstSelect"
          value={values.firstSelect}
          onChange={onChange}
        >
          {this.getOptionsItems(types)}
        </select>
        <Field
          id="firstInput"
          type="text"
          placeholder="text"
          name="firstInput"
          value={values.firstInput}
          onChange={onChange}
        />
      </Wrapper>
    );
  }
}
