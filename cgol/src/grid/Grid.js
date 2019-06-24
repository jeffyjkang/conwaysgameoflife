import React from "react";
import Rows from "./Rows";
import "./Grid.css";

const GridContainer = props => {
  console.table(props.grid);
  return (
    <div className="grid">
      {props.grid.map(rows => (
        <Rows key={Math.random()} rows={rows} />
      ))}
    </div>
  );
};

export default GridContainer;
