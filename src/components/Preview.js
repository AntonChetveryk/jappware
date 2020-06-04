import React from "react";
//import styled from "styled-components";
import Field from "./Field";

// const WrapperPreview = styled.section``;

export default class Preview extends React.Component {
  render() {
    const { components } = this.props;
    return (
      <>
        {components.map((component) => (
          <Field
            id={component.message}
            type={component.type}
            placeholder={component.type}
          />
        ))}
      </>
    );
  }
}
