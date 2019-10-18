import React, { Component } from 'react';
import './App.css';
// import trello from './trello.png'
import Logo from './Components/Header/Header';
import List from './Components/Board/List';

class App extends Component {
  
  state = {
		listItems: [
      {"text": "vasya"},
      {"text": "Petya"},
      {"text": "one more "}
    ], 
    lists: [
      {MARKER: "right1"}
    ],
    value: ''
	}

  addItemHandler = (event) => {
    // console.log(this.state.value) ;
    let oldItems = this.state.listItems;
    oldItems.push({"text": this.state.value});
    this.setState({listItems: oldItems})
    this.setState({value: ''});
    event.preventDefault();
  }

  valueChanger = (event) => {
    this.setState({value: event.target.value });
  }

  addList = (event) => {
    let oldLists = this.state.lists; 
    oldLists.push({"list":""});
    this.setState({lists: oldLists});
    console.log(this.state.lists)
  }

  render() {

    let lists = (
      <div> 
        {this.state.lists.map(list => {
        return(
          <div>
            <List 
              submit={this.addItemHandler}
              text={this.state.article}
              items={this.state.listItems}
              value={this.state.value}
              change={this.valueChanger}/>
              sASasAS
            </div> 
              )
        })}
      </div>
    )


    return (
      <div>
        <Logo/>

        <div className="App jumbotron">
          <h2> Hey there</h2>
          {/* <div><img src={trello}/></div> */}
          <button className="btn btn-primary">Push me!</button>
        </div>

        <button onClick={this.addList}>Add list</button>
        <hr />
        {lists}
        {/* <List 
          submit={this.addItemHandler}
          text={this.state.article}
          items={this.state.listItems}
          value={this.state.value}
          change={this.valueChanger}/> */}
      </div>
    );
  }
}

export default App;
