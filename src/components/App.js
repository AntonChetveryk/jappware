import React from "react";
//import Field from "./Field";
import ComponentConfig from "./ComponentConfig";
import Preview from "./Preview";

class App extends React.Component {
  state = {
    components: [],
  };

  delete = (index) => {
    const { components } = this.state;
    const newComponents = components.filter((component, i) => index !== i);
    this.setState({ components: newComponents });
  };

  addComponent = (values) => {
    this.setState((state) => {
      return {
        components: [...state.components, values],
      };
    });
  };

  render() {
    const { components } = this.state;

    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="config col-6">
              <h2> Components config</h2>
              <form>
                <ComponentConfig addComponent={this.addComponent} />
              </form>
            </div>
            <div className="preview col-6">
              <h2>Components preview</h2>
              <Preview components={components} delete={this.delete} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
