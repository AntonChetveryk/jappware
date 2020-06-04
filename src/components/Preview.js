import React from "react";

import Field from "./Field";

export default class Preview extends React.Component {
  render() {
    const { components } = this.props;
    return (
      <>
        {components.map((component) => (
          <div className="d-flex">
            <Field
              className="d-flex flex-column"
              labelText={component.message}
              id={component.message}
              type={component.type}
              placeholder={component.type}
            />
            <button className="btn btn-light delete ml-2">delete</button>
          </div>
        ))}
      </>
    );
  }
}
