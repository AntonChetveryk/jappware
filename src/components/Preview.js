import React from "react";

import Field from "./Field";

export default class Preview extends React.Component {
  onClick = (e, index) => {
    this.props.delete(index);
  };

  onChange = (e) => {
    e.persist();
    console.log("onChange");
  };

  render() {
    const { components } = this.props;

    return (
      <>
        {components.map((component, index) => (
          <div className="d-flex" key={index}>
            <Field
              className="d-flex flex-column"
              labelText={component.label}
              type={component.type}
              value={component.defaultValue}
              min={component.min}
              max={component.max}
              onChange={this.onChange}
              name={component.label}
            />
            <button
              className="btn btn-light delete ml-2"
              onClick={(e) => this.onClick(e, index)}
            >
              delete
            </button>
          </div>
        ))}
      </>
    );
  }
}
