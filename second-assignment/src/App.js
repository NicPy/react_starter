import React, { Component } from 'react';
import Validator from './ValidationComponent/ValidationComponent';
import CharElement from './CharComponent/CharComponent';
import './App.css';

class App extends Component {
  state = {
    input_length: 0,
  }

  lengthChanger = (event) => {
    this.setState({
      input_length: event.target.value.length,
    })

    
  } 

  render() {
    return (
      <div className="App">
        <input onChange={this.lengthChanger}/>
        <br />
        <Validator length={this.state.input_length}/>

        <CharElement />
      </div>
    );
  }
}

export default App;
