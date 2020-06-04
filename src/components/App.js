import React from "react";
//import Field from "./Field";
import ComponentConfig from "./ComponentConfig";
import Preview from "./Preview";

class App extends React.Component {
  state = {
    values: {
      firstSelect: "",
      firstInput: "",
      secondSelect: "",
      secondInput: "",
    },
    showElements: false,
  };

  onClick = (e) => {
    e.preventDefault();
    this.setShowElements();
  };

  setShowElements = () => {
    this.setState((state) => {
      return { showElements: true };
    });
  };

  onChange = (e) => {
    e.persist();
    this.setState((state) => ({
      values: {
        ...state.values,
        [e.target.name]: e.target.value,
      },
      showElements: false,
    }));
  };

  render() {
    const { values, showElements } = this.state;

    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="config col-6">
              <h2> Components config</h2>
              <form>
                <ComponentConfig
                  onChange={this.onChange}
                  selectName="firstSelect"
                  selectValue={values.firstSelect}
                  inputName="firstInput"
                  inputValue={values.firstInput}
                />
                <ComponentConfig
                  onChange={this.onChange}
                  selectName="secondSelect"
                  selectValue={values.secondSelect}
                  inputName="secondInput"
                  inputValue={values.secondInput}
                />
                <button onClick={this.onClick} className="mt-4">
                  Add Components
                </button>
              </form>
            </div>
            <div className="preview col-6">
              <h2> Components preview</h2>
              <Preview values={values} showElements={showElements} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
