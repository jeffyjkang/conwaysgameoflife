import React from "react";

const InputContainer = props => {
  return (
    <div>
      <form>
        Input size of grid: {"  "}
        <input type="number" min="0" name="size" onChange={props.sizeInput} />
        <button onClick={props.gridCreate}>Create Grid</button>
      </form>
    </div>
  );
};

export default InputContainer;
