import React from "react";
import Boxes from "./Boxes";
import "./Grid.css";

const Rows = props => {
  return (
    <div className="rows">
      {props.rows.map(boxes => (
        <Boxes key={Math.random()} boxes={boxes} />
      ))}
    </div>
  );
};

export default Rows;
