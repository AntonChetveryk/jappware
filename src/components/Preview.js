import React from "react";
import Field from "./Field";

export default class Preview extends React.Component {
  state = {};
  onClick = (e, index) => {
    this.props.delete(index);
  };

  onChange = (e) => {
    const { name, value } = e.target;
    console.log("onChange");
    this.setState((state) => {
      return { [name]: value };
    });
  };

  onChangeBool = (e) => {
    const { name, checked } = e.target;
    this.setState((state) => {
      return { [name]: checked };
    });
  };

  render() {
    const { components } = this.props;

    return (
      <>
        {components.map((component, index) => (
          <div className="d-flex" key={index}>
            {component.type === "text" ||
            component.type === "password" ||
            component.type === "email" ? (
              <Field
                className="d-flex flex-column"
                labelText={component.label}
                type={component.type}
                value={this.state[component.label]}
                onChange={this.onChange}
                name={component.label}
              />
            ) : component.type === "range" ? (
              <Field
                className="d-flex flex-column"
                labelText={component.label}
                type={component.type}
                value={this.state[component.label]}
                min={component.min}
                max={component.max}
                onChange={this.onChange}
                name={component.label}
              />
            ) : component.type === "checkbox" ? (
              <Field
                className="d-flex flex-column"
                labelText={component.label}
                type={component.type}
                value={this.state[component.label]}
                onChange={this.onChangeBool}
                name={component.label}
              />
            ) : component.type === "radio" ? (
              <>
                <Field
                  className="d-flex flex-column"
                  labelText={component.labelFirst}
                  type={component.type}
                  value={this.state[component.labelFirst]}
                  onChange={this.onChangeBool}
                  name={component.labelFirst}
                />
                <Field
                  className="d-flex flex-column"
                  labelText={component.labelSecond}
                  type={component.type}
                  value={this.state[component.labelSecond]}
                  onChange={this.onChangeBool}
                  name={component.labelFirst}
                />
              </>
            ) : null}

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
