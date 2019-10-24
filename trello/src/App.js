import React, { Component } from "react";
import "./App.css";
// import trello from './trello.png'
import Logo from "./Components/Header/Header";
import Lists from "./Components/Board/Lists";

class App extends Component {
  state = {
    listItems: [{ text: "vasya" }, { text: "Petya" }, { text: "one more " }],
    lists: [{ MARKER: "right1" }],
    board_lists: [
      {
        id: "1",
        name: "first",
        cards: [{ id: "1", text: "test text" }, { id: "2", text: "petya" }]
      },
      {
        id: "2",
        name: "second",
        cards: [{ id: "1", text: "Vasya" }, { id: "2", text: "Egor" }]
      },
      {
        id: "3",
        name: "first",
        cards: [{ id: "1", text: "Borys" }, { id: "2", text: "petya" }]
      },
      {
        id: "4",
        name: "second",
        cards: [{ id: "1", text: "Vasya" }, { id: "2", text: "Misha" }]
      }
    ],
    value: {
      text: "vasya",
      board_id: ""
    }
  };

  addItemHandler = event => {
    // console.log(this.state.value) ;
    // let oldItems = this.state.board_lists;
    let current_list = this.state.board_lists.find(e => {
      return e.id === this.state.value.board_id;
    });

    current_list.push();

    this.setState();
    console.log(current_list);
    // oldItems.push({"text": this.state.value});
    // this.setState({listItems: oldItems})
    this.setState({ value: "" });
    event.preventDefault();
  };

  valueChanger = (value, board_id) => {
    this.setState({ value: { text: value, board_id: board_id } });
    console.log();
  };

  addList = event => {
    let oldLists = this.state.lists;
    oldLists.push({ list: "" });
    this.setState({ lists: oldLists });
  };

  render() {
    let lists = (
      <div className="lists row">
        <Lists
          lists={this.state.board_lists}
          submit={this.addItemHandler}
          // text={this.state.article}
          // items={this.state.listItems}
          value={this.state.value}
          change={this.valueChanger}
        />
      </div>
    );

    return (
      <div className="container">
        <Logo />

        <button onClick={this.addList}>Add list</button>

        {lists}
      </div>
    );
  }
}

export default App;
