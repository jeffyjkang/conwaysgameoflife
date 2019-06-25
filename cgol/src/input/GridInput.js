import React from "react";

const GridInput = props => {
  return (
    <div>
      <form>
        Input size of grid (4-30): {"  "}
        <input
          type="number"
          min={0}
          max={30}
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
