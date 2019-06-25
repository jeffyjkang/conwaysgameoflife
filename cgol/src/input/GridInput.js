import React from "react";

const GridInput = props => {
  return (
    <div>
      <form>
        Input size of grid (4-40): {"  "}
        <input
          type="number"
          min={4}
          max={40}
          name="size"
          onChange={props.sizeInput}
        />
        <button onClick={props.gridCreate}>Create Grid</button>
        {"  "} Default Game speed is 1 sec
      </form>
    </div>
  );
};

export default GridInput;
