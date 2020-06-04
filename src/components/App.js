import React from "react";
//import Field from "./Field";
import ComponentConfig from "./ComponentConfig";
import Preview from "./Preview";

class App extends React.Component {
  state = {
    type: "",
    message: "",
    components: [],
    options: {},
  };

  onClick = (e) => {
    const { type, message } = this.state;
    e.preventDefault();
    if (type && message) {
      this.setState((state) => {
        return {
          components: [
            ...state.components,
            { type: state.type, message: state.message },
          ],
          type: "",
          message: "",
        };
      });
    } else {
      alert("fill in all the fields");
    }
  };

  onChange = (e) => {
    e.persist();
    this.setState((state) => ({
      [e.target.name]: e.target.value,
    }));
  };

  render() {
    const { type, message, components } = this.state;

    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="config col-6">
              <h2> Components config</h2>
              <form>
                <ComponentConfig
                  onChange={this.onChange}
                  type={type}
                  message={message}
                />
                <button onClick={this.onClick} className="mt-4 btn btn-dark">
                  Add Components
                </button>
              </form>
            </div>
            <div className="preview col-6">
              <h2>Components preview</h2>
              <Preview components={components} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
