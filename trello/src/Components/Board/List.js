import React from "react";
import "./boardStyles.css";
import Listitem from "./ListItem";

const list = props => {
  let list_items = (
    <React.Fragment>
      {props.items.map((item, index) => {
        return <Listitem key={index} text={item.text} />;
      })}
    </React.Fragment>
  );

  return (
    <div className=" col-lg-3 col-md-4 col-6">
      <div className="list-item">
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
