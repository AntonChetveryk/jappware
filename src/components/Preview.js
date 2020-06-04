import React from "react";
import styled from "styled-components";
import Field from "./Field";

const WrapperPreview = styled.section``;

export default class Preview extends React.Component {
  render() {
    const { values, showElements } = this.props;
    return (
      <>
        {showElements ? (
          <WrapperPreview>
            <label htmlFor="firstInput">{values.firstInput}</label>
            <Field
              id="firstInputPreview"
              type={values.firstSelect}
              placeholder="Item"
              name="firstInputPreview"
            />
            <label htmlFor="secondInput">{values.secondInput}</label>
            <Field
              id="secondInputPreview"
              type={values.secondSelect}
              placeholder="Item"
              name="secondInputPreview"
            />
          </WrapperPreview>
        ) : null}
      </>
    );
  }
}
