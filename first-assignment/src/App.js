import React, { Component } from "react";
import PersonInput from "./PersonInput/PersonInput";
import "./App.css";

class App extends Component {
  state = {
    name: "darvin",
    age: 44
  };

  nameHandler = event => {
    this.setState({
      name: event.target.value,
      age: this.state.age
    });
  };

  ageHandler = event => {
    this.setState({
      name: this.state.name,
      age: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <PersonInput
          name={this.state.name}
          age={this.state.age}
          changedName={this.nameHandler}
          changedAge={this.ageHandler}
        />
      </div>
    );
  }
}

export default App;
