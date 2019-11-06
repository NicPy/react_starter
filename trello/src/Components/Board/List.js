import React from "react";
import "./boardStyles.css";
import "./boardStyles.scss";
import Listitem from "./ListItem";
import TextareaAutosize from 'react-textarea-autosize';

const list = props => {
  let list_items = [];
  
  if(props.items){
     list_items = (
      <React.Fragment>
        {props.items.map((item, index) => {
          return <Listitem key={index} text={item.text} />;
        })}
      </React.Fragment>
    );
  }  

  return (
    <div className=" col-lg-3 col-md-4 col-6">
      
      <div className="list">
        <span 
          className="list-title">
          <TextareaAutosize 
            resize="off"
            onChange={e => props.nameChange(e, props.id, e.target.value)}
            value={props.list_name} 
            onKeyDown={e => {(e.key === 'Enter' || e.key === 'Escape') && e.target.blur()}}
            />
          
          <img src={require('../../Images/pencil.png')} className='edit-icon' alt="edit"/>
        </span>
        <button 
          className="btn btn-danger float-right"
          onClick={e => props.delete(e, props.id) }
        >
          X
        </button>
        <form onSubmit={props.submit}>
          <input
            value={props.value}
            onChange={e => props.change(e.target.value, props.id)}
            autoFocus
          />
          <input type="submit" className="hidden" />
        </form>

        {list_items}
      </div>
    </div>
  );
};

export default list;
