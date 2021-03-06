import React from "react";
import "./Confirm.scss";

export const Confirm = (props) => {

  return (
    <div className="confirm__card">
      <div className="message">Do you want to delete this item?</div>
      <div className="confirm__card--buttons--container">
        <button
          className="confirm__card--buttons"
          onClick={() => props.trasition("DEFAULT")}
        >
          Cancel
        </button>
        <button className="confirm__card--buttons" onClick={props.deleteMe} >Delete</button>
      </div>
    </div>
  );
}
