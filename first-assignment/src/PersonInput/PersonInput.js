import React from "react";
import "./PersonInput.css";

const personinput = props => {
  return (
    <div className="PersonInput">
      <h2>Please, enter your name and age</h2>
      <label>Name is {props.name}</label>
      <input
        type="text"
        onChange={props.changedName}
        defaultValue={props.name}
      />
      <br />
      <br />
      <label>Age is {props.age}</label>
      <input
        type="number"
        onChange={props.changedAge}
        defaultValue={props.age}
      />
    </div>
  );
};

export default personinput;
