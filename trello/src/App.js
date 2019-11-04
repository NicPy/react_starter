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
      board_id: "",
      focused_board: ""
    }
  };

  addListHandler = () => {

    // copy old state 
    let oldList = Object.assign([], this.state.board_lists);

    // Add an empty list
    oldList.push({
      id: Date.now(),
      name: 'New list',
      cards:[],
    })

    this.setState({board_lists: oldList});
  }

  deleteListHandler = (event, listId) => {

    let old_state = Object.assign({}, this.state);

    // remove element by ID  from board_lists
    let new_state = old_state.board_lists.filter(function(el) { return el.id !== listId });

    this.setState({board_lists: new_state})
  }

  addItemHandler = event => {
    event.preventDefault();
    if (this.submited_id === this.state.value.id) {
      // Copy current state to work with object
      let old_state = Object.assign({}, this.state);

      // find list, where changes has to be pushed
      let current_list = old_state.board_lists.find(e => {
        return e.id === this.state.value.board_id;
      });
      current_list.cards.push({ id: 14, text: this.state.value.text });

      old_state.value.text = "";
      this.setState(old_state);
    }
  };

  valueChanger = (value, board_id) => {
    this.setState({ value: { text: value, board_id: board_id } });
  };

  render() {
    let lists = (
      <div className="lists row">
        <Lists
          lists={this.state.board_lists}
          submit={this.addItemHandler}
          value={this.state.value}
          change={this.valueChanger}
          delete={this.deleteListHandler}
        />
      </div>
    );

    return (
      <div className="container">
        <Logo />
        <button onClick={this.addListHandler}>Add list</button>

        {lists}
      </div>
    );
  }
}

export default App;
