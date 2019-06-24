import React from "react";
import "./Grid.css";

const Boxes = props => {
  return (
    <div className="boxes">
      <div className={props.boxes !== 0 ? "alive" : ""}>{props.boxes}</div>
    </div>
  );
};

export default Boxes;
