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
        name: "To do",
        cards: []
      },
      {
        id: "2",
        name: "In process",
        cards: []
      },
      {
        id: "3",
        name: "Done",
        cards: []
      },
    ],
    value: {
      text: "vasya",
      board_id: "",
      focused_board: ""
    }
  };

  componentDidMount(prevProps) {
    this.setState(JSON.parse(localStorage.getItem('state_data')));    
  }

  componentDidUpdate(prevProps) {
    localStorage.setItem('state_data', JSON.stringify(this.state))
  }

  addListHandler = () => {

    // copy old state 
    let oldList = Object.assign([], this.state.board_lists);

    // Add an empty list
    oldList.push({
      id: Date.now(),
      name: 'New list lorem4 dsa f asdf asfd asdf asdf sd Lorem ipsum dolor sit amet, veritus mnesarchum conclusionemque nam te. Vel magna nominati persequeris ad, no quando fabellas oporteat vis. His iriure iracundia an. Usu no meis possim nostrud, mea ad odio elitr.',
      cards:[],
    })

    this.setState({board_lists: oldList});
  }

  listNameChangeHandler = (event, listId, nameValue) => {

    let old_state = Object.assign({}, this.state);

    // Find list where changes should be implemented
    let used_list = old_state.board_lists.find(e => {
      return e.id === listId;
    });

    // change list name
    used_list.name = nameValue.replace(/\n/g, '');
    // console.log(new_state);

    // update state with new name
    this.setState({board_lists: old_state.board_lists})
  }

  deleteListHandler = (event, listId) => {

    if (window.confirm("Are you sure?")){
      let old_state = Object.assign({}, this.state);

      // remove element by ID  from board_lists
      let new_state = old_state.board_lists.filter(function(el) { return el.id !== listId });
  
      this.setState({board_lists: new_state})
    }
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
          nameChange={this.listNameChangeHandler}
        />
      </div>
    );

    return (
      <div className="container-fluid">
        <Logo />
        <button onClick={this.addListHandler}>Add list</button>

        {lists}
      </div>
    );
  }
}

export default App;
