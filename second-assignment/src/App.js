import React, { Component } from 'react';
import Validator from './ValidationComponent/ValidationComponent';
import CharElement from './CharComponent/CharComponent';
import './App.css';

class App extends Component {
  state = {
    inputed_text: '',
    input_length: 0,
  }

  lengthChanger = (event) => {
    this.setState({
      inputed_text: event.target.value,
      input_length: event.target.value.length,
    })

    
  } 

  deleteCharHandler = (letterIndex) => {
    const text = [...this.state.inputed_text];
    text.splice(letterIndex, 1);
    this.setState({
      inputed_text: text.join(''),
      }
    );
    document.getElementById("main-inp").value = text.join('');

  }
  render() {
console.log(this.state.input_length);
    let char_elements = null;
    let smbls = Array.from(this.state.inputed_text);
    if(this.state.input_length > 0) {
      char_elements = (
        <div>
          {/* { for(let chr of this.state.inputed_text) {
            
            <CharElement content={chr}/>

          }}    */}
        {smbls.map((value, index) => {
            return <CharElement 
              content={value}
              click={()=>this.deleteCharHandler(index)}
              key={index}/>
        })}
        </div>
      )
    }
    return (
      <div className="App">
        <input id='main-inp' onChange={this.lengthChanger}/>
        <br />
        <Validator length={this.state.input_length}/>
        {char_elements}
      </div>
    );
  }
}

export default App;
