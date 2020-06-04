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
            <label htmlFor="input">{values.firstInput}</label>
            <Field
              id="input"
              type={values.firstSelect}
              placeholder="Item"
              name="input"
            />
          </WrapperPreview>
        ) : null}
      </>
    );
  }
}
