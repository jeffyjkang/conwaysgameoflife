import React from "react";
import "./Grid.css";

const Boxes = props => {
  console.log(props);
  return <div className="boxes">{props.boxes}</div>;
};

export default Boxes;
