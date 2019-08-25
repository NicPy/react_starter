import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';  

class App extends Component {
  state ={
    persons: [
      {name: 'petya', age: 44},
      {name: 'zenya', age: 42},
      {name: 'dadya', age: 24},
    ]
  }

  nameChangeHandler = (event) => {
    this.setState ={
      persons: [
        {name: event.target.value, age: 44},
        {name: 'zenya', age: 42},
        {name: 'dadya', age: 24},
      ]
    } 
  }
  
  render() {
    return (
      <div className="App">
        <h1>Here is the test</h1>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          changed = {this.nameChangeHandler} />
        
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}/>
        
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          />

        
      </div>
    );
  }
}

export default App;
