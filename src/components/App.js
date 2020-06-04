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
    e.preventDefault();
  };

  onChange = (e) => {
    e.persist();
    this.setState((state) => ({
      [e.target.name]: e.target.value,
    }));
  };

  render() {
    const { type, message } = this.state;

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
                <button onClick={this.onClick} className="mt-4">
                  Add Components
                </button>
              </form>
            </div>
            <div className="preview col-6">
              <h2> Components preview</h2>
              <Preview />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
