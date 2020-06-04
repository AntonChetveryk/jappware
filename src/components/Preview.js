import React from "react";
//import styled from "styled-components";
import Component from "./Component";

// const WrapperPreview = styled.section``;

export default class Preview extends React.Component {
  render() {
    const { components } = this.props;
    return (
      <>
        {components.map((component) => (
          <Component
            className="d-flex flex-column"
            labelText={component.message}
            id={component.message}
            type={component.type}
            placeholder={component.type}
          />
        ))}
      </>
    );
  }
}
