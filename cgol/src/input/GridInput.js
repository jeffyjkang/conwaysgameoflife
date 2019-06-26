import React from "react";
import "./Input.css";

const GridInput = props => {
  return (
    <div>
      <form className="giForm">
        <span className="gText">Input size of grid (4-40): {"  "}</span>
        <input
          className="gInput"
          type="number"
          placeholder="4-40"
          min={4}
          max={40}
          name="size"
          onChange={props.sizeInput}
        />
        <button className="gButton" onClick={props.gridCreate}>
          Create Grid
        </button>
        {/* {"  "} Default Game speed is 1 sec */}
      </form>
    </div>
  );
};

export default GridInput;
